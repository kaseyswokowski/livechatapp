import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD7tZpaqBIX3X5TtCLiUSRq4VLYDQIPDqE",
    authDomain: "livechatapp-95e79.firebaseapp.com",
    projectId: "livechatapp-95e79",
    storageBucket: "livechatapp-95e79.appspot.com",
    messagingSenderId: "506168121221",
    appId: "1:506168121221:web:3fdd2d2e02d389a8ff16ec"

};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
    