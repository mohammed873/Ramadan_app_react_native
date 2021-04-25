// config firebase dev
import firebase from 'firebase';
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAS_B8LF-yFoVpXdAtHIJGI0f1Yiu-yK8s",
    authDomain: "ramadan-d7cce.firebaseapp.com",
    projectId: "ramadan-d7cce",
    storageBucket: "ramadan-d7cce.appspot.com",
    messagingSenderId: "378223873382",
    appId: "1:378223873382:web:63101975b27fc0eb930ca7"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;