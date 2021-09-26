// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";

// import { getFirestore, collection, getDocs } from "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3YWGxviDwgXK42lWxSp9B1DQlMGojfqA",
  authDomain: "whatsapp-clone-a8525.firebaseapp.com",
  databaseURL:
    "https://whatsapp-clone-a8525-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "whatsapp-clone-a8525",
  storageBucket: "whatsapp-clone-a8525.appspot.com",
  messagingSenderId: "1046646621104",
  appId: "1:1046646621104:web:b10be06b1f3fe62e4b8c75",
  measurementId: "G-LGKJ4J5FHJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
