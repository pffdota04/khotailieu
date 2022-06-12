import runMiddleware from "../../../lib/cors";
import admin from "./../../../services/admin/index";
export default async function personHandler(req, res) {
  console.log("POST INFO");
  await runMiddleware(req, res, ["POST", "GET"]);
  let messagesRef = admin.database().ref();
  const { method } = req;
  switch (method) {
    case "POST": {
      const last = await getLast(messagesRef);
      const body = req.body;
      const newId = parseInt(last.id) + 1 + "";
      const token = req.headers.authorization;
      console.log(token);
      try {
        admin
          .auth()
          .verifyIdToken(token)
          .then(async (decodeToken) => {
            if (decodeToken.email == "pffdota04@gmail.com") {
              if (body.pending === undefined) {
                console.log("POST NEW");
                const keyword = body.info.name + " " + body.info.author + " ";

                await setNewInfo(messagesRef, body, newId, keyword.toLowerCase());
                if (body.fromPending)
                  messagesRef.child("pending").child(body.fromPending).remove();

                res.status(200).json({
                  message: `Post to info success! New id is ${newId}`,
                });
              } else {
                console.log("POST FROM PENDING");
                const keyPending = body.pending;
                const response = await messagesRef
                  .child("pending")
                  .child(keyPending)
                  .once("value");
                const keyword =
                  response.val().info.name +
                  " " +
                  response.val().info.author +
                  " ";
                response.val().info.date;
                let addResult = await setNewInfo(
                  messagesRef,
                  response.val(),
                  newId,
                  keyword.toLowerCase()
                );

                messagesRef.child("pending").child(keyPending).remove();

                res.status(200).json({
                  message: `Post to info success! New id is ${newId}`,
                });
              }
            } else {
              res
                .status(404)
                .json({ message: `POST failed: You are not admin` });
            }
          })
          .catch((error) => {
            console.log(error);
            res.status(404).json({
              message: `POST failed: Token not true  or you not admin`,
            });
          });
      } catch (error) {
        console.log(error);
        res.status(404).json({ message: `POST failed` });
      }
      break;
    }
    case "GET": {
      try {
        const last = await getLast(messagesRef);
        res.status(200).json(last);
      } catch (error) {
        console.log(error);
        res.status(404).json({ message: `Info by  not found.` });
      }
      break;
    }
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}

const setNewInfo = async (messRef, body, newID, keyword) => {
  try {
    await messRef
      .child("info")
      .child(newID)
      .set({ ...body.info, date: body.date, id: newID, view: 0, status: "Ok" });
    await messRef
      .child("detail")
      .child(newID)
      .set({ data: body.detail, id: newID });
    await messRef
      .child("keyword")
      .child(newID)
      .set({
        keyword: keyword,
        id: newID,
        filter: body.info.major + " " + body.info.type,
      });
    return true;
  } catch (error) {
    console.log("error");
    console.log(error);
    return false;
  }
};

const getLast = async (messRef) => {
  try {
    const response = await messRef
      .child("info")
      .orderByKey()
      .limitToLast(1)
      .once("value");
    return Object.values(response.val())[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};
