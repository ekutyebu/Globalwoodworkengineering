// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAET6imsxH2gxlOsnby9r76lt3ptLFSOg8",
  authDomain: "webhosting-27629.firebaseapp.com",
  projectId: "webhosting-27629",
  storageBucket: "webhosting-27629.firebasestorage.app",
  messagingSenderId: "779720974377",
  appId: "1:779720974377:web:525ea2f2b26dd155e0bc38",
  measurementId: "G-JS2XYGMZS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);