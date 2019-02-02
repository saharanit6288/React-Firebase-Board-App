import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {};

const config = {
    apiKey: "AIzaSyAP57iTRsF7dIrIdFGGsexSkWoJkU_MiCA",
    authDomain: "ronitboard.firebaseapp.com",
    databaseURL: "https://ronitboard.firebaseio.com",
    projectId: "ronitboard",
    storageBucket: "ronitboard.appspot.com",
    messagingSenderId: "992311449166"
  };
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
