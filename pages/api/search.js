// import * as data from "../../data/keyword.json";
import runMiddleware from "./../../lib/cors";

export default async function personHandler(req, res) {
  await runMiddleware(req, res, ["GET"]);
  let data = require("../../data/keyword.json");
  const { keyword, type, category } = req.query;
  try {
    if (!keyword || !type || !category) throw "Some query is undefine!";
    let filtered = [];
    console.log("Cache data lenght: " + data.length);
    console.log(
      "keyword, type, category: " + keyword + ", " + type + ", " + category
    );

    if (type == "all") {
      if (category == "all")
        filtered = data.filter((p) =>
          p.keyword.includes(keyword.toLowerCase())
        );
      else
        filtered = data.filter(
          (p) =>
            p.keyword.includes(keyword.toLowerCase()) &&
            p.filter.includes(category)
        );
    } else {
      if (category == "all")
        filtered = data.filter(
          (p) =>
            p.keyword.includes(keyword.toLowerCase()) && p.filter.includes(type)
        );
      else
        filtered = data.filter(
          (p) =>
            p.keyword.includes(keyword.toLowerCase()) &&
            p.filter.includes(type) &&
            p.filter.includes(category)
        );
    }
    console.log("Dảta response lenght: " + filtered.length);

    if (filtered.length > 0) {
      res.status(200).json(filtered);
    } else {
      res
        .status(404)
        .json({ message: `Your search with keyword: ${keyword} not found.` });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: `Detail by id: ${keyword} not found.` });
  }
}
