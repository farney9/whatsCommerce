import firebase  from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAYDgEUR5TOA6ayfBjCE8xj_lwSnZ74uKg",
    authDomain: "whatscommerce-5dfbc.firebaseapp.com",
    projectId: "whatscommerce-5dfbc",
    storageBucket: "whatscommerce-5dfbc.appspot.com",
    messagingSenderId: "818259685332",
    appId: "1:818259685332:web:836c9abb12117d8d60f041"
  };
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig); 