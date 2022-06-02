import { detail } from "../../../data/detail.js";
export default function personHandler(req, res) {
  const { id } = req.query;
  let filtered = [];

  filtered = detail.filter((p) => p.id == id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `Detail info by id: ${id} not found.` });
  }
}
