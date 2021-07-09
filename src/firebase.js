import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyB0HMLnSRU07iKPeoBdboPScXm6yPVaHHw",
  authDomain: "unichat-10171.firebaseapp.com",
  projectId: "unichat-10171",
  storageBucket: "unichat-10171.appspot.com",
  messagingSenderId: "632119878271",
  appId: "1:632119878271:web:fc4ed03eff4933d09d154a"
}).auth();
