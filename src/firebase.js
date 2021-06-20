import firebase from 'firebase'

const firebaseConfig = {
    // apiKey: "AIzaSyDn-iLCm4uH0YX0cLHhh52dZlFoGXdVHmg",
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "linkedin-clone-9864c.firebaseapp.com",
    projectId: "linkedin-clone-9864c",
    storageBucket: "linkedin-clone-9864c.appspot.com",
    messagingSenderId: "969404513963",
    appId: "1:969404513963:web:9fa333e19138106689c1ee"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };