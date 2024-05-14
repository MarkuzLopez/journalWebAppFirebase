// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZj2ur8sO8NvvX616D1yrsUVQiSY5CzDM",
  authDomain: "react-app-cursos-eff0a.firebaseapp.com",
  projectId: "react-app-cursos-eff0a",
  storageBucket: "react-app-cursos-eff0a.appspot.com",
  messagingSenderId: "1029492324054",
  appId: "1:1029492324054:web:20e1e909e180cc92f8bb77"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp)