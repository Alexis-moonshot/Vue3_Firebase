import * as firebase from 'firebase/app';
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCW630pKFvTqGAb9JTI2jvbQRAgEK3izoQ",
    authDomain: "my-vue-firebase-6fd0e.firebaseapp.com",
    projectId: "my-vue-firebase-6fd0e",
    storageBucket: "my-vue-firebase-6fd0e.appspot.com",
    messagingSenderId: "990145729081",
    appId: "1:990145729081:web:e8e32764cc1d8d5ef0b3e8",
    measurementId: "G-047DN3JTSW"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
console.log(firebaseApp,firebase)
export const db = firebaseApp.firestore();
