import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: JSON.stringify(import.meta.env.VITE_REACT_FIREBASE_APIKEY).replace(
    /['"]+/g,
    ""
  ),
  authDomain: JSON.stringify(
    import.meta.env.VITE_REACT_REACT_FIREBASE_AUTHDOMAIN
  ).replace(/['"]+/g, ""),
  projectId: JSON.stringify(
    import.meta.env.VITE_REACT_REACT_FIREBASE_PROJET_ID
  ).replace(/['"]+/g, ""),
  storageBucket: JSON.stringify(
    import.meta.env.VITE_REACT_REACT_FIREBASE_STORAGE_BUCKET
  ).replace(/['"]+/g, ""),
  messagingSenderId: JSON.stringify(
    import.meta.env.VITE_REACT_REACT_FIREBASE_MESSAGING_SENDER_ID
  ).replace(/['"]+/g, ""),
  appId: JSON.stringify(
    import.meta.env.VITE_REACT_REACT_FIREBASE_APP_ID
  ).replace(/['"]+/g, ""),
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
