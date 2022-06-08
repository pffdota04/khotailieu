import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json";
import { getAuth } from "firebase/auth";

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL:
        "https://khotailieu-hcmute-default-rtdb.asia-southeast1.firebasedatabase.app/",
    });
  } catch (error) {
    console.log("Firebase admin initialization error", error.stack);
  }
}
export default admin;
