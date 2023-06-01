// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfMD7bxZvECFm1JU0KfYxPeke1kTQVhBM",
  authDomain: "suho-15206.firebaseapp.com",
  projectId: "suho-15206",
  storageBucket: "suho-15206.appspot.com",
  messagingSenderId: "119385447987",
  appId: "1:119385447987:web:c3ec912763d34a40f38d46",
  measurementId: "G-EPCRBEN5EY",
  storageBucket: 'gs://suho-15206.appspot.com'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)

export {db, storage, ref, uploadBytes, getDownloadURL}