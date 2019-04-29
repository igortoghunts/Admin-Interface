import app from 'firebase/app';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDSJDOyFMmUX16Ac57Fmje4WnJl7hwSOVs",
    authDomain: "react-back-d0db4.firebaseapp.com",
    databaseURL: "https://react-back-d0db4.firebaseio.com",
    projectId: "react-back-d0db4",
    storageBucket: "react-back-d0db4.appspot.com",
    messagingSenderId: "198162368938"
};

class Firebase {
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWhitEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

}

export default Firebase;

