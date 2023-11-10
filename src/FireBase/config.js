import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARKAxRds8JOZ2Lj2W3OS6vxCiFJ8g_hKw",
  authDomain: "expense-tracker-9b586.firebaseapp.com",
  projectId: "expense-tracker-9b586",
  storageBucket: "expense-tracker-9b586.appspot.com",
  messagingSenderId: "488027503531",
  appId: "1:488027503531:web:6c6a8d76d4eb5a8b13b0ee",
  measurementId: "G-JCG02W3N1L"
};

initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
