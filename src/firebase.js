import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
 const firebaseConfig = {
  apiKey: "AIzaSyA23Qr8wbFvDon9-aklSO6_f99xjHqxTQY",
  authDomain: "tiktokclone-8c717.firebaseapp.com",
  projectId: "tiktokclone-8c717",
  storageBucket: "tiktokclone-8c717.appspot.com",
  messagingSenderId: "347918318571",
  appId: "1:347918318571:web:6a45d33628aa88bd77f7ae",
  measurementId: "G-31RD2H1D4H"
 };
 const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();
 
 export default db;