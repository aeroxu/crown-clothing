import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBBzL1Hh0AOa5kUJXT3sWLvTdd0vx0ntvI",
    authDomain: "crown-db-393d9.firebaseapp.com",
    databaseURL: "https://crown-db-393d9.firebaseio.com",
    projectId: "crown-db-393d9",
    storageBucket: "crown-db-393d9.appspot.com",
    messagingSenderId: "618648012464",
    appId: "1:618648012464:web:a9888ab31336ef79b75d75",
    measurementId: "G-TXQXVKBCF8"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;