import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyB3rGrq3EfPQwLAYXjKuEjT_rgcwhzDROg",
    authDomain: "fireblogsyt-79b64.firebaseapp.com",
    projectId: "fireblogsyt-79b64",
    storageBucket: "fireblogsyt-79b64.appspot.com",
    messagingSenderId: "918491608362",
    appId: "1:918491608362:web:38a3b3d4580aa925cbda53"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
