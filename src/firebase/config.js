import firebase from "firebase/app";
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAdMAr4HFdQ7zHBKfHM5wVLvtdu8wSfQ44",
    authDomain: "vue-block-system-39b19.firebaseapp.com",
    projectId: "vue-block-system-39b19",
    storageBucket: "vue-block-system-39b19.appspot.com",
    messagingSenderId: "144389887050",
    appId: "1:144389887050:web:31a3c4bfa87ae56a0802b3"
  };

  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();

  let timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {db, timestamp}