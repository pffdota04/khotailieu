// import * as data from "../../data/keyword.json";
import runMiddleware from "./../../lib/cors";
import admin from "./../../services/admin/index";

export default async function personHandler(req, res) {
  var startTime = Date.now();
  await runMiddleware(req, res, ["GET"]);
  let data;
  // = require("../../data/keyword.json");
  const { keyword, type, category } = req.query;
  try {
    if (!keyword || !type || !category) throw "Some query is undefine!";
    let filtered = [];
    console.log("API: " + keyword + ", " + type + ", " + category);

    data = (await admin.database().ref().child("keyword").once("value")).val();
    // let x = await admin
    //   .firestore()
    //   .collection("keyword")
    //   .orderBy("id", "desc")
    //   .get();
    // x.forEach((doc) => {
    //   console.log(doc.data());
    // });
    //////////////////////
    // data.map((e) => {
    //   if (e !== null)
    //     admin
    //       .firestore()
    //       .collection("keyword")
    //       .doc(e.id)
    //       .set(e)
    //       .then(() => console.log("OK " + e.id))
    //       .catch((e) => console.log(e));
    // });

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
