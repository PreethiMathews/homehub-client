// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "homehub-20e23.firebaseapp.com",
  projectId: "homehub-20e23",
  storageBucket: "homehub-20e23.appspot.com",
  messagingSenderId: "558159446089",
  appId: "1:558159446089:web:3bb8e00f9aefa7597cbf98",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
