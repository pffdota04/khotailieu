import runMiddleware from "../../../lib/cors";
import admin from "./../../../services/admin/index";
let messagesRef = admin.database().ref();

export default async function personHandler(req, res) {
  await runMiddleware(req, res, ["GET", "DELETE"]);
  const { id } = req.query;
  const { method } = req;
  switch (method) {
    case "GET": {
      try {
        const fdata = await messagesRef
          .child("info")
          .orderByChild("id")
          .equalTo(id)
          .once("value");
        if (fdata.val().length === undefined) {
          res.status(200).json(Object.values(fdata.val())[0]);
        } else res.status(200).json(fdata.val().filter((item) => item)[0]);
      } catch (error) {
        console.log(error);
        res.status(404).json({ message: `Info by id: ${id} not found.` });
      }
      break;
    }
    case "DELETE": {
      try {
        const token = req.headers.authorization;
        admin
          .auth()
          .verifyIdToken(token)
          .then(async (decodeToken) => {
            if (decodeToken.email == "pffdota04@gmail.com") {
              messagesRef.child("info").child(id).remove();
              messagesRef.child("detail").child(id).remove();
              messagesRef.child("keyword").child(id).remove();
              res.status(200).json("okok");
            } else
              res
                .status(404)
                .json({ message: `GET failed: You are not admin` });
          })
          .catch((error) => {
            console.log(error);
            res.status(404).json({ message: `Info not found.` });
          });
      } catch (error) {
        console.log(error);
        res.status(404).json({ message: `DELETE failed` });
      }
      break;
    }
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
