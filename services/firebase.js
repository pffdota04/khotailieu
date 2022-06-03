import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDO343bctqhV8h-myk0FIrqOshUeYiTx-M",
  authDomain: "khotailieu-hcmute.firebaseapp.com",
  databaseURL:
    "https://khotailieu-hcmute-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "khotailieu-hcmute",
  storageBucket: "khotailieu-hcmute.appspot.com",
  messagingSenderId: "242891984063",
  appId: "1:242891984063:web:ea1912e0adcec19755ca0a",
  measurementId: "G-VZGP9HTNG3",
};

const app = firebase.initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);
export const config = firebaseConfig;
// export const analytics = getAnalytics(app);
// export const auth = firebase.auth;
