import runMiddleware from "../../../lib/cors";
import admin from "./../../../services/admin/index";

export default async function personHandler(req, res) {
  await runMiddleware(req, res, ["POST"]);
  const { method } = req;
  switch (method) {
    case "POST": {
      let messagesRef = admin.database().ref();
      try {
        const body = req.body;
        console.log(body);
        // need check input
        await messagesRef.child("pending").push({
          ...body,
          date: new Date().toJSON().slice(0, 10).split("-").reverse().join("/"),
        });
        res.status(200).json({ message: `Post to pending success!` });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Add pending error.` });
      }
      break;
    }
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      beark;
  }
}
