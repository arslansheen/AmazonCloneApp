// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDocs,doc,getFirestore,collection,setDoc,orderBy,query} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from 'firebase/auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export {collection, setDoc,doc,orderBy,query,getDocs};
const firebaseConfig = {
  apiKey: "AIzaSyBqIdheKogJKhW21pWGUcLfMETKpxaK7tc",
  authDomain: "clone-app-925c5.firebaseapp.com",
  projectId: "clone-app-925c5",
  storageBucket: "clone-app-925c5.appspot.com",
  messagingSenderId: "793419459509",
  appId: "1:793419459509:web:1900bb8d12a373e24b07fc",
  measurementId: "G-DKNL9WNQF0"
};

// Initialize Firebase with firebase config
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
//create auth object using firebase api
//create firestore object using firebase app
const auth=getAuth();
;
export const firestore=()=>getFirestore(firebaseApp);

export function createUser(email,password)
{
  return createUserWithEmailAndPassword(auth,email,password);
}
export function signIn(email,password){
  return signInWithEmailAndPassword(auth,email,password);
}
export function logOut(){
  return signOut(auth);
}