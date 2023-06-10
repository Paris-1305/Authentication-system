// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPNxBKsu6blfhz1auGU3HCo7Fv7wqycns",
  authDomain: "fir-frontend-bf213.firebaseapp.com",
  projectId: "fir-frontend-bf213",
  storageBucket: "fir-frontend-bf213.appspot.com",
  messagingSenderId: "884872687415",
  appId: "1:884872687415:web:07e5c131e13794eb4db4b2"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const database=getFirestore(app);