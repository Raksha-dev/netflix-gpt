// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB07uVLlqA_S9YpHO9Q3BSl52tFtwdTR-Q",
  authDomain: "netflixgpt-c8689.firebaseapp.com",
  projectId: "netflixgpt-c8689",
  storageBucket: "netflixgpt-c8689.appspot.com",
  messagingSenderId: "801916260386",
  appId: "1:801916260386:web:f5d110d9e74f779b183a7b",
  measurementId: "G-YG0F2W44BE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();