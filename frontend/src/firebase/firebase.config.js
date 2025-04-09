// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "Your Firebase API key",
  authDomain: "mern-book-inventory-121.firebaseapp.com",
  projectId: "mern-book-inventory-121",
  storageBucket: "mern-book-inventory-121.appspot.com",
  messagingSenderId: "560290498383",
  appId: "1:560290498383:web:ce9359bb58b2cbe888273a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
