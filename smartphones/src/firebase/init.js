  import firebase from 'firebase'
  import firestore from 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA5YZlbs4io1ttWo3C799dym0dhnKOf3HA",
    authDomain: "smrtphones-3ce20.firebaseapp.com",
    databaseURL: "https://smrtphones-3ce20.firebaseio.com",
    projectId: "smrtphones-3ce20",
    storageBucket: "smrtphones-3ce20.appspot.com",
    messagingSenderId: "1069475902467",
    appId: "1:1069475902467:web:7be6445e1c96440ae3ca36",
    measurementId: "G-GXGZQ9CZJG"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //firebaseApp.firestore.settings({timestampsInSnapshots: true})
  firebase.analytics();

  //export firestore database
  export default firebaseApp.firestore()