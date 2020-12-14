import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBG-M5ZfJRPMux8DTrIe85NH6MnJE-ehO0",
    authDomain: "bouychatapp-54bac.firebaseapp.com",
    projectId: "bouychatapp-54bac",
    storageBucket: "bouychatapp-54bac.appspot.com",
    messagingSenderId: "884842642247",
    appId: "1:884842642247:web:04df6ac374e1af2411ea62",
    measurementId: "G-H4BHZV74XV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;