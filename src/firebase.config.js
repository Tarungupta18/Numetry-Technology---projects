// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuPa1kQYX2XyU673wRpLa-CYX2CC5PHis",
  authDomain: "otp-auth-157e8.firebaseapp.com",
  projectId: "otp-auth-157e8",
  storageBucket: "otp-auth-157e8.firebasestorage.app",
  messagingSenderId: "79721949530",
  appId: "1:79721949530:web:c4d189e0cadfecefc42b63",
  measurementId: "G-DJ6YC36HY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
