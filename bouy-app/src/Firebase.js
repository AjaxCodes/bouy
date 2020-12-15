import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLG-OSbdvy1gnijc-ey7N2QNYt6VXOs1E",
  authDomain: "bouy-af08d.firebaseapp.com",
  databaseURL: "https://bouy-af08d-default-rtdb.firebaseio.com",
  projectId: "bouy-af08d",
  storageBucket: "bouy-af08d.appspot.com",
  messagingSenderId: "930710057572",
  appId: "1:930710057572:web:02d0899e1e5294480aa571",
  measurementId: "G-P4WV3PQS47"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;