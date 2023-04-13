import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import firebase from "firebase/app";
import "firebase/firestore";

import {BrowserRouter as Router} from 'react-router-dom';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcZ2wkpb-WgJI_s5KQajd2DCnMhMIjiJU",
  authDomain: "react-hooks-blog-7c600.firebaseapp.com",
  projectId: "react-hooks-blog-7c600",
  storageBucket: "react-hooks-blog-7c600.appspot.com",
  messagingSenderId: "814806009488",
  appId: "1:814806009488:web:3f064c29ffca5c73aefa15"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      </Router>
  </React.StrictMode>
);
