// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjpyCcXzWBnK0c_X8xJwc0CcrhhnrkIik",
  authDomain: "busy-buy-98b61.firebaseapp.com",
  projectId: "busy-buy-98b61",
  storageBucket: "busy-buy-98b61.appspot.com",
  messagingSenderId: "658690238171",
  appId: "1:658690238171:web:c80e88c77ec41379e00efe",
  measurementId: "G-5B98NP6KNY"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
