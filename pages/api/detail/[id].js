import { detail } from "../../../data/detail.js";
import runMiddleware from "./../../../lib/cors";
import admin from "./../../../services/admin/index";

export default async function personHandler(req, res) {
  let messagesRef = admin.database().ref();
  await runMiddleware(req, res, ["GET"]);
  const { id } = req.query;
  try {
    const fdata = await messagesRef
      .child("detail")
      .orderByChild("id")
      .equalTo(id)
      .once("value");
    if (fdata.val().length === undefined) {
      res.status(200).json(Object.values(fdata.val())[0]);
    } else res.status(200).json(fdata.val().filter((item) => item)[0]);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: `Detail by id: ${id} not found.` });
  }

  // let filtered = [];

  // filtered = detail.filter((p) => p.id == id);

  // if (filtered.length > 0) {
  //   res.status(200).json(filtered[0]);
  // } else {
  //   res.status(404).json({ message: `Detail info by id: ${id} not found.` });
  // }
}
