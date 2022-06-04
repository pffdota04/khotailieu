import { detail } from "../../../data/detail.js";
import runMiddleware from "./../../../lib/cors";

export default async function personHandler(req, res) {
  await runMiddleware(req, res, ["GET"]);

  const { id } = req.query;
  let filtered = [];

  filtered = detail.filter((p) => p.id == id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Detail info by id: ${id} not found.` });
  }
}
