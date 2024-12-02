// Import the functions you need from the SDKs you need
import {  initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNKqkLyUA5KHEoYoZclzFsQiTjQ6Imn08",
  authDomain: "coffee-store-ffb7d.firebaseapp.com",
  projectId: "coffee-store-ffb7d",
  storageBucket: "coffee-store-ffb7d.firebasestorage.app",
  messagingSenderId: "1053740172788",
  appId: "1:1053740172788:web:bef8877061893b838b25a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)