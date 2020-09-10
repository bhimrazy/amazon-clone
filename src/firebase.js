import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDPKQLV6f2WnG8r9AhdKlEfbq56Vpm2VEM",
  authDomain: "clone-1a11b.firebaseapp.com",
  databaseURL: "https://clone-1a11b.firebaseio.com",
  projectId: "clone-1a11b",
  storageBucket: "clone-1a11b.appspot.com",
  messagingSenderId: "819278953653",
  appId: "1:819278953653:web:c4e5c0c464437992b952fc",
  measurementId: "G-RKL8J335V7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
