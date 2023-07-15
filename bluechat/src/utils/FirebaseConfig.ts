// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4darHAT6eQDRMv4BmNdwmDpDs8V71dOU",
  authDomain: "bluechat-e3652.firebaseapp.com",
  projectId: "bluechat-e3652",
  storageBucket: "bluechat-e3652.appspot.com",
  messagingSenderId: "575343413361",
  appId: "1:575343413361:web:e7877ce201eb443cc733d0",
  measurementId: "G-YSMVGYKHSF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);