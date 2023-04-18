import 'firebase/auth';
import 'firebase/firestore';

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClsq8rGRmBWLbZieKLe6IsADYIX4gH9Ug",
  authDomain: "guitar-chord-recognition.firebaseapp.com",
  projectId: "guitar-chord-recognition",
  storageBucket: "guitar-chord-recognition.appspot.com",
  messagingSenderId: "817243484256",
  appId: "1:817243484256:web:e29670d0129b39f2265305",
  measurementId: "G-Y4NE64NG72"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// const auth = firebase.auth()

// export { app, auth };