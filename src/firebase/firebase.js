import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAQZBjBlmWlDr5517Zgo4OgXTkJQX287hQ",
    authDomain: "ecommerce-db-b00a7.firebaseapp.com",
    databaseURL: "https://ecommerce-db-b00a7.firebaseio.com",
    projectId: "ecommerce-db-b00a7",
    storageBucket: "",
    messagingSenderId: "371892720435",
    appId: "1:371892720435:web:371af0111559b3aa"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
