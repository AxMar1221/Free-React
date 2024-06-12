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
  apiKey: "AIzaSyCttK_rKvDI2Kg4bDu2RVY0bDCdFPO5Bqo",
  authDomain: "prueba-328d9.firebaseapp.com",
  databaseURL: "https://prueba-328d9-default-rtdb.firebaseio.com",
  projectId: "prueba-328d9",
  storageBucket: "prueba-328d9.appspot.com",
  messagingSenderId: "1025834332349",
  appId: "1:1025834332349:web:c703ea9bcdb1a2b11c47d4",
  measurementId: "G-22VR1QJBTW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);