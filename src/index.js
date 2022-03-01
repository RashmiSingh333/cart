import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/firestore'

//  web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoITuY-tIT3xkUvEaLF8zuZuS-XdAyUSI",
    authDomain: "cart-b4e0f.firebaseapp.com",
    projectId: "cart-b4e0f",
    storageBucket: "cart-b4e0f.appspot.com",
    messagingSenderId: "450631583993",
    appId: "1:450631583993:web:90b27b6b42597227157a28"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />,document.getElementById('root'));

