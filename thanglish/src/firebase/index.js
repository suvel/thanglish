import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  // apiKey: process.env.FB_apiKey,
  // authDomain: process.env.FB_authDomain,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
