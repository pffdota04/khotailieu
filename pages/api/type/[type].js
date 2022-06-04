import { info } from "../../../data/info";
import runMiddleware from "../../../lib/cors";

export default async function personHandler(req, res) {
  await runMiddleware(req, res, ["GET"]);
  const { type } = req.query;
  let filtered = [];
  filtered = info.filter((p) => p.type == type);

  console.log(filtered.length);
  if (filtered.length > 0) {
    res.status(200).json(filtered);
  } else {
    res.status(404).json({ message: `Info info by type: ${type} not found.` });
  }
}
