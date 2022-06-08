import { info } from "../../data/info";
import runMiddleware from "./../../lib/cors";
import admin from "./../../services/admin/index";

export default async function personHandler(req, res) {
  let messagesRef = admin.database().ref();
  await runMiddleware(req, res, ["GET"]);
  const { keyword, type, category, page } = req.query;
  try {
    const allkeyword = await messagesRef.child("keyword").once("value");
    let filtered = [];
    if (
      category != undefined &&
      category != "all" &&
      type != undefined &&
      type != "all"
    )
      filtered = allkeyword
        .val()
        .filter(
          (p) =>
            p.keyword.includes(keyword.toLowerCase()) &&
            p.type == type &&
            p.major == category
        );
    else if (
      (category == undefined || category == "all") &&
      (type == undefined || type == "all")
    )
      filtered = allkeyword
        .val()
        .filter((p) => p.keyword.includes(keyword.toLowerCase()));
    else if (
      (category == undefined || category == "all") &&
      type != undefined &&
      type != "all"
    )
      filtered = allkeyword
        .val()
        .filter(
          (p) =>
            p.keyword.includes(keyword.toLowerCase()) && p.type.includes(type)
        );
    else if (
      (type == undefined || type == "all") &&
      category != undefined &&
      category != "all"
    )
      filtered = allkeyword
        .val()
        .filter(
          (p) =>
            p.keyword.includes(keyword.toLowerCase()) &&
            p.major.includes(category)
        );

    if (filtered.length > 0) {
      // let info = [];
      // filtered.map(async (e) => {
      //   info.push(await getInfoById(messagesRef, e.id, page));
      // });

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

const getInfoById = async (messRef, id) => {
  let res;
  res = await messRef
    .child("info")
    .orderByChild("id")
    .equalTo(id)
    .once("value");
  return res.val();
};

const getInfoByIxd = async (messRef, id) => {
  let res;
  if (key)
    res = await messRef
      .child("info")
      .orderByChild("id")
      // .startAt(id)
      // .endBefore(id, key)
      // .limitToLast(6)
      .once("value");
  else
    res = await messRef
      .child("info")
      .orderByChild("id")
      .equalTo(id)
      .limitToLast(6)
      .once("value");

  return res.val();
};
