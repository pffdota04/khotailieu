import runMiddleware from "../../../lib/cors";
import admin from "./../../../services/admin/index";

export default async function personHandler(req, res) {
  await runMiddleware(req, res, ["POST", "GET"]);
  const { method } = req;
  const token = req.headers.authorization;
  try {
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
        admin
          .auth()
          .verifyIdToken(token)
          .then(async (decodeToken) => {
            if (decodeToken.email == "pffdota04@gmail.com") {
              let messagesRef = admin.database().ref();
              try {
                let data = await messagesRef.child("pending").once("value");
                res.status(200).json(data.val());
              } catch (error) {
                console.log(error);
                res.status(500).json({ message: `Add pending error.` });
              }
            } else
              res
                .status(401)
                .json({ message: `Token not true or you are not admin` });
          });
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `errror` });
  }
}
