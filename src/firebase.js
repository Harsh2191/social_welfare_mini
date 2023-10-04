// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv6qxIPO4A2JRWFxmv__iblH3iY_5tXTg",
  authDomain: "sih1368.firebaseapp.com",
  databaseURL: "https://sih1368-default-rtdb.firebaseio.com",
  projectId: "sih1368",
  storageBucket: "sih1368.appspot.com",
  messagingSenderId: "640155490408",
  appId: "1:640155490408:web:c284faa0ac07ab30ee43dd",
  measurementId: "G-XSJX71Q1QJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
