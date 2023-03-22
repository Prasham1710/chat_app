// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkn1WJsVk4e0aibmrnexSIlIUYAkq753k",
  authDomain: "chat-app-c0ea3.firebaseapp.com",
  projectId: "chat-app-c0ea3",
  storageBucket: "chat-app-c0ea3.appspot.com",
  messagingSenderId: "210757128437",
  appId: "1:210757128437:web:c25d2d28f07360c60c75bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)