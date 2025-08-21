// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClU0iM7INORAbdZjcgRbmU_1uEXHdr0Co",
  authDomain: "fir-5138f.firebaseapp.com",
  projectId: "fir-5138f",
  storageBucket: "fir-5138f.firebasestorage.app",
  messagingSenderId: "888614505489",
  appId: "1:888614505489:web:6ae52bafc8025fddc575b0",
  measurementId: "G-3CJZGLWPH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);