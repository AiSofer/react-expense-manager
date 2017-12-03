import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDEGk870hrw4WnlqI2PuoFU-36s7Qg5vfk",
    authDomain: "expensify-f3f0d.firebaseapp.com",
    databaseURL: "https://expensify-f3f0d.firebaseio.com",
    projectId: "expensify-f3f0d",
    storageBucket: "expensify-f3f0d.appspot.com",
    messagingSenderId: "499867007579"
  };
const app = firebase.initializeApp(config);
const db = firebase.database();
const rootRef = db.ref();

export { firebase, db as default };