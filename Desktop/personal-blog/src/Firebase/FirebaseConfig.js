import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_APIKEY,
//   authDomain: process.env.FIREBASE_AUTHDOMAIN,
//   projectId: process.env.FIREBASE_PROJET_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBIz5dxmeE1QSDvHSzzd5UpQDT3Qm2xTu4",
  authDomain: "personal-blog-35ee9.firebaseapp.com",
  projectId: "personal-blog-35ee9",
  storageBucket: "personal-blog-35ee9.appspot.com",
  messagingSenderId: "206748298610",
  appId: "1:206748298610:web:3be7f029b352b0f50b01eb",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
