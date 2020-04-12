import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDokq0mEg31hzeOGw1hBBhPl4yPh2nxLLY",
    authDomain: "ahmed-1625a.firebaseapp.com",
    databaseURL: "https://ahmed-1625a.firebaseio.com",
    projectId: "ahmed-1625a",
    storageBucket: "ahmed-1625a.appspot.com",
    messagingSenderId: "5592717961",
    appId: "1:5592717961:web:ee84cfb717747c2daf8458",
    measurementId: "G-YM2ETPXC29"
};

firebase.initializeApp(firebaseConfig);

export default firebase;