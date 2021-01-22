import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
 
};
// Initialize Firebase
const defaultProject = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
