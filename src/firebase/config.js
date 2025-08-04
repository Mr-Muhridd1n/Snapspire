import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqhh5WYmzHok1SDZnjfI8wnTeP7cMzs1M",
  authDomain: "snapspire-1b1df.firebaseapp.com",
  projectId: "snapspire-1b1df",
  storageBucket: "snapspire-1b1df.firebasestorage.app",
  messagingSenderId: "48925206743",
  appId: "1:48925206743:web:95d3684d6847f462dfa892",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth
export const auth = getAuth();

//db
export const db = getFirestore();
