import runMiddleware from "../../../lib/cors";
import admin from "./../../../services/admin/index";
let messagesRef = admin.database().ref();

export default async function personHandler(req, res) {
  await runMiddleware(req, res, ["GET"]);
  const { id } = req.query;
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
}
