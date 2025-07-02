// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgkksHT_skm7Ia4FqJYHNvMpQmO-NTN54",
  authDomain: "netflixgpt-cd36a.firebaseapp.com",
  projectId: "netflixgpt-cd36a",
  storageBucket: "netflixgpt-cd36a.firebasestorage.app",
  messagingSenderId: "901078147518",
  appId: "1:901078147518:web:046b0cc5089dbf91a399ef",
  measurementId: "G-VDC718K4VW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();