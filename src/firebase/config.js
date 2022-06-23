// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF8mivfwfNers0QQKRE4Cny-rSFTt_WGc",
  authDomain: "ecommerce-walls-coderhouse.firebaseapp.com",
  projectId: "ecommerce-walls-coderhouse",
  storageBucket: "ecommerce-walls-coderhouse.appspot.com",
  messagingSenderId: "811102398255",
  appId: "1:811102398255:web:3a6c170b4020633989e3da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);