// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkLWRqVdoGwPSW1TXLs7mGfPk8Pck7qEM",
  authDomain: "ktpwebsite-49a9a.firebaseapp.com",
  projectId: "ktpwebsite-49a9a",
  storageBucket: "ktpwebsite-49a9a.appspot.com",
  messagingSenderId: "712524555425",
  appId: "1:712524555425:web:d367680cab09b0d3037ce0",
  measurementId: "G-X6W6FCSG6R"
};

// Initialize Firebase
// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(FirebaseApp);
const firestore = getFirestore(FirebaseApp);
const auth = getAuth(FirebaseApp);
const provider = new GoogleAuthProvider();
export {storage, firestore, auth, FirebaseApp, provider};
