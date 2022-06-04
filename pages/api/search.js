import { info } from "../../data/info";
import runMiddleware from "./../../lib/cors";

export default async function personHandler(req, res) {
  await runMiddleware(req, res, ["GET", "HEAD"]);

  const { keyword, type, category } = req.query;
  let filtered = [];
  if (
    category != undefined &&
    category != "all" &&
    type != undefined &&
    type != "all"
  )
    filtered = info.filter(
      (p) =>
        p.keywork.includes(keyword) && p.type == type && p.major == category
    );
  else if (
    (category == undefined || category == "all") &&
    (type == undefined || type == "all")
  )
    filtered = info.filter((p) => p.keywork.includes(keyword));
  else if (
    (category == undefined || category == "all") &&
    type != undefined &&
    type != "all"
  )
    filtered = info.filter(
      (p) => p.keywork.includes(keyword) && p.type.includes(type)
    );
  else if (
    (type == undefined || type == "all") &&
    category != undefined &&
    category != "all"
  )
    filtered = info.filter(
      (p) => p.keywork.includes(keyword) && p.major.includes(category)
    );

  if (filtered.length > 0) {
    res.status(200).json(filtered);
  } else {
    res
      .status(404)
      .json({ message: `Your search with keyword: ${keyword} not found.` });
  }
}
