import firebase from 'firebase';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithRedirect } from "firebase/auth";

const auth = getAuth();
signInWithRedirect(auth, provider);

const provider = new GoogleAuthProvider();

import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  
const firebaseConfig = {
    apiKey: "AIzaSyDd29g41uxN1xZ21d27lyQJpka4fu-0YZs",
    authDomain: "quantum-88cc5.firebaseapp.com",
    projectId: "quantum-88cc5",
    storageBucket: "quantum-88cc5.appspot.com",
    messagingSenderId: "497795125918",
    appId: "1:497795125918:web:351880ea2bfebd72a8a18f"
  };
  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider(); 
export {auth , provider};
