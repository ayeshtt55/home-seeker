// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7NBoh07FYRSY0Cmp0odo5ckiZ-95ZUig",
  authDomain: "mern-state-f2e08.firebaseapp.com",
  projectId: "mern-state-f2e08",
  storageBucket: "mern-state-f2e08.appspot.com",
  messagingSenderId: "132413802892",
  appId: "1:132413802892:web:063eda8dce996a28d36ea9",
  measurementId: "G-89Y6XY824Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);