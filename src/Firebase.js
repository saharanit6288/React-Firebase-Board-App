import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {};

const config = {
    apiKey: "xxx",
    authDomain: "xxx",
    databaseURL: "xxx",
    projectId: "xxx",
    storageBucket: "xxx",
    messagingSenderId: "xxx"
  };
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
