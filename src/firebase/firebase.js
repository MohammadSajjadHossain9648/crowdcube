// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyJ7b-hlP2WQMB1Sm1KPCpBDBgBSKFm80",
  authDomain: "crowdcube-f1f1e.firebaseapp.com",
  projectId: "crowdcube-f1f1e",
  storageBucket: "crowdcube-f1f1e.firebasestorage.app",
  messagingSenderId: "952060954100",
  appId: "1:952060954100:web:ecb83e9f6b4cd864d7e5a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;