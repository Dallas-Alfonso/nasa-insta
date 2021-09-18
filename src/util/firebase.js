import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCdlUPTd-6vGIEvCSI50Z4y24EF9ipW96Y",
    authDomain: "nasa-insta.firebaseapp.com",
    projectId: "nasa-insta",
    storageBucket: "nasa-insta.appspot.com",
    messagingSenderId: "457432937253",
    databaseURL: "https://nasa-insta-default-rtdb.firebaseio.com/",
    appId: "1:457432937253:web:579cbe01896b0af13f60cc",
    measurementId: "G-BTPETJS9P1"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;