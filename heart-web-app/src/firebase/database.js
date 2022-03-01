import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyADuTZ1K9rvWQDNlH6snazJe4Qmp4Q7p78",
    authDomain: "heart-project-4bb9b.firebaseapp.com",
    projectId: "heart-project-4bb9b",
    storageBucket: "heart-project-4bb9b.appspot.com",
    messagingSenderId: "24818209908",
    appId: "1:24818209908:web:9a60e675f2f5ae4a7e6d21",
    measurementId: "G-JY0C76GLHH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firebaseAuthentication = firebase.auth();
const firebaseFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firebaseAuthentication, firebaseFireStore, timestamp };