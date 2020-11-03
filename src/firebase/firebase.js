import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyB3W91aRG2vi-3kSb5t7ccJ-A2RMk77kh4",
    authDomain: "leave-management-firebase.firebaseapp.com",
    databaseURL: "https://leave-management-firebase.firebaseio.com",
    projectId: "leave-management-firebase",
    storageBucket: "leave-management-firebase.appspot.com",
    messagingSenderId: "833433355259",
    appId: "1:833433355259:web:382510d223f9f32a29c15e",
    measurementId: "G-9G3RZ3RWW6"
};

const app = firebase.initializeApp(config);     // required
const database = firebase.database();
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleAuthProvider, database, firebase };

