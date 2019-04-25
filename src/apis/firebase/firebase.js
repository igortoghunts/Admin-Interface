import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDSJDOyFMmUX16Ac57Fmje4WnJl7hwSOVs",
    authDomain: "react-back-d0db4.firebaseapp.com",
    databaseURL: "https://react-back-d0db4.firebaseio.com",
    projectId: "react-back-d0db4",
    storageBucket: "react-back-d0db4.appspot.com",
    messagingSenderId: "198162368938"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();