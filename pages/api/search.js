// import * as data from "../../data/keyword.json";
import runMiddleware from "./../../lib/cors";

export default async function personHandler(req, res) {
  var startTime = Date.now();
  await runMiddleware(req, res, ["GET"]);
  let data = require("../../data/keyword.json");
  const { keyword, type, category } = req.query;
  try {
    if (!keyword || !type || !category) throw "Some query is undefine!";
    let filtered = [];
    console.log("API: " + keyword + ", " + type + ", " + category);
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
    console.log("API: Data response lenght: " + filtered.length);
    var endTime = Date.now();
    console.log(`API: Took ${endTime - startTime} milliseconds`);

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
