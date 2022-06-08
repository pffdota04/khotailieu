import { info } from "../../../data/info";
import runMiddleware from "../../../lib/cors";

export default async function personHandler(req, res) {
  let messagesRef = admin.database().ref();
  await runMiddleware(req, res, ["GET"]);
  const { type } = req.query;

  try {
    const fdata = await messagesRef
      .child("info")
      .orderByChild("type")
      .equalTo(type)
      .once("value");
    console.log(fdata.val());
    res.status(200).json(fdata.val().filter((item) => item)[0]);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: `Info by type: ${id} not found.` });
  }

  // console.log(filtered.length);
  // if (filtered.length > 0) {
  //   res.status(200).json(filtered);
  // } else {
  //   res.status(404).json({ message: `Info info by type: ${type} not found.` });
  // }
}
