// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACgH6wpdT_dl-OmccXZ5667b8BA4eV3NI",
    authDomain: "final-project-f8bfb.firebaseapp.com",
    projectId: "final-project-f8bfb",
    storageBucket: "final-project-f8bfb.appspot.com",
    messagingSenderId: "822698391123",
    appId: "web:521815cbaa00ea8ed438a6",
    measurementId: "G-15ZZJTRWK3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
