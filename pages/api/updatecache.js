import runMiddleware from "./../../lib/cors";
import admin from "./../../services/admin/index";

const fs = require("fs");

export default async function cache(req, res) {
  let messagesRef = admin.database().ref();
  await runMiddleware(req, res, ["GET"]);
  try {
    const a = await messagesRef.child("keyword").once("value");
    let saveit = a.val().filter((n) => n);
    
    fs.writeFileSync(
      "data/keyword.json",
      JSON.stringify(saveit, (k, v) => v ?? undefined, 4)
    );

    res.status(200).json({ message: `okok` });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: `not update` });
  }
}
