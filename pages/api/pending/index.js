import runMiddleware from "../../../lib/cors";
import admin from "./../../../services/admin/index";

export default async function personHandler(req, res) {
  await runMiddleware(req, res, ["POST", "GET"]);
  const { method } = req;
  const token = req.headers.authorization;
  try {
    admin
      .auth()
      .verifyIdToken(token)
      .then(async (decodeToken) => {
        if (decodeToken.email == "pffdota04@gmail.com") {
          switch (method) {
            case "POST": {
              let messagesRef = admin.database().ref();
              try {
                const body = req.body;
                console.log(body);
                // need check input
                await messagesRef.child("pending").push({
                  ...body,
                  date: new Date()
                    .toJSON()
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("/"),
                });
                res.status(200).json({ message: `Post to pending success!` });
              } catch (error) {
                console.log(error);
                res.status(500).json({ message: `Add pending error.` });
              }
              break;
            }
            case "GET": {
              let messagesRef = admin.database().ref();
              try {
                let data = await messagesRef.child("pending").once("value");
                res.status(200).json(data.val());
              } catch (error) {
                console.log(error);
                res.status(500).json({ message: `Add pending error.` });
              }
              break;
            }
            default:
              res.setHeader("Allow", ["POST", "GET"]);
              res.status(405).end(`Method ${method} Not Allowed`);
              beark;
          }
        }
      });
  } catch (error) {
    res
      .status(404)
      .json({ message: `Failed: Token not true or you not admin` });
  }
}
