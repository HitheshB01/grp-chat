// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyBuCG93D9neQr92OtoN0i7HdBU2Qbu0YyE",
  authDomain: "group-chat-1158f.firebaseapp.com",
  projectId: "group-chat-1158f",
  storageBucket: "group-chat-1158f.appspot.com",
  messagingSenderId: "787959438862",
  appId: "1:787959438862:web:1a018a3a22124ea3abe65f",
  measurementId: "G-762DLXR0ER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app) 