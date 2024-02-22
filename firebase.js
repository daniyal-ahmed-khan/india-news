// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuGwFL5HRTdShFCX8let6TM4KsyXM50-Y",
  authDomain: "news-website-bf258.firebaseapp.com",
  projectId: "news-website-bf258",
  storageBucket: "news-website-bf258.appspot.com",
  messagingSenderId: "415222534388",
  appId: "1:415222534388:web:d4e997efb36e19a98f4ea1",
  measurementId: "G-LW9E65XVWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);