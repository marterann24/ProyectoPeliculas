// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwoddHSyzHaNqVi_8xYfJWYtYHgZhVxa8",
  authDomain: "opuslumina-6211f.firebaseapp.com",
  projectId: "opuslumina-6211f",
  storageBucket: "opuslumina-6211f.appspot.com",
  messagingSenderId: "751547351796",
  appId: "1:751547351796:web:01a54756357ea6a38054a1"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
