import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";

firebase.initializeApp ({
  apiKey: "AIzaSyCdlUPTd-6vGIEvCSI50Z4y24EF9ipW96Y",
  authDomain: "nasa-insta.firebaseapp.com",
  databaseURL: "https://nasa-insta-default-rtdb.firebaseio.com",
  projectId: "nasa-insta",
  storageBucket: "nasa-insta.appspot.com",
  messagingSenderId: "457432937253",
  appId: "1:457432937253:web:579cbe01896b0af13f60cc",
  measurementId: "G-BTPETJS9P1"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
