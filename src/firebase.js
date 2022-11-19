import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBi3YCTslr31x_OSfmHv7E3zmsvR2LOeXk",
  authDomain: "slack-clone-20d76.firebaseapp.com",
  projectId: "slack-clone-20d76",
  storageBucket: "slack-clone-20d76.appspot.com",
  messagingSenderId: "487465220073",
  appId: "1:487465220073:web:5cd606de069e0395427d78",
  measurementId: "G-5Q04SBHJZS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
