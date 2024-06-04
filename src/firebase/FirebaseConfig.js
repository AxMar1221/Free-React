// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
// Required for side-effects
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGiy3_d4pOcGcvP-RGALuKImawJVFxNCY",
  authDomain: "profe-tachi-6a634.firebaseapp.com",
  projectId: "profe-tachi-6a634",
  storageBucket: "profe-tachi-6a634.appspot.com",
  messagingSenderId: "399598413180",
  appId: "1:399598413180:web:5553dfae132c03b24870f9",
  measurementId: "G-0DB4BH3RWB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);