// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqIdheKogJKhW21pWGUcLfMETKpxaK7tc",
  authDomain: "clone-app-925c5.firebaseapp.com",
  projectId: "clone-app-925c5",
  storageBucket: "clone-app-925c5.appspot.com",
  messagingSenderId: "793419459509",
  appId: "1:793419459509:web:1900bb8d12a373e24b07fc",
  measurementId: "G-DKNL9WNQF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);