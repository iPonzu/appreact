import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEeK0xz3A6bm30CuKamSVnYeC_R3c-wdo",
  authDomain: "react-app-e92bc.firebaseapp.com",
  projectId: "react-app-e92bc",
  storageBucket: "react-app-e92bc.appspot.com",
  messagingSenderId: "561852770792",
  appId: "1:561852770792:web:a660ea56786583d18a5c5d"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export default auth