// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCazC80vD0r4pSCD_nnzuCnLHfSPcAQ5t0",
    authDomain: "profe-tachi.firebaseapp.com",
    projectId: "profe-tachi",
    storageBucket: "profe-tachi.appspot.com",
    messagingSenderId: "81025963",
    appId: "1:81025963:web:267ada56b546d737c990ee",
    measurementId: "G-ZNKGVEHX1N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);