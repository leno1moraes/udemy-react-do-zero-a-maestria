// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOo7fNHoOCxvEjzPtgglW65-RUUenzmzM",
  authDomain: "miniblog-14e09.firebaseapp.com",
  projectId: "miniblog-14e09",
  storageBucket: "miniblog-14e09.appspot.com",
  messagingSenderId: "833665164403",
  appId: "1:833665164403:web:2cfd15bbb77c0258867606"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };