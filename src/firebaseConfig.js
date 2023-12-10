import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAAdr-G2JSROW0-iou1GunGigkYWFrio2w",
  authDomain: "garten-2023.firebaseapp.com",
  projectId: "garten-2023",
  storageBucket: "garten-2023.appspot.com",
  messagingSenderId: "448825868710",
  appId: "1:448825868710:web:d7d54c42eb86eea6fe8f67",
  measurementId: "G-J86ES3Z1VC",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getDatabase(app);
