import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCln46M8XMjvr36V2bdmkQQrTBFYGONHsw",
  authDomain: "slack-clone-2c98a.firebaseapp.com",
  projectId: "slack-clone-2c98a",
  storageBucket: "slack-clone-2c98a.appspot.com",
  messagingSenderId: "246832372420",
  appId: "1:246832372420:web:2005df1add86b9a7250791",
  measurementId: "G-9NNJN0E34L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
