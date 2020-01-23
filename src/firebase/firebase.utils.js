// importing modules
import firebase from 'firebase/app';
import 'firebase/firestore'; // firestore
import 'firebase/auth'; // authentication

// firebase config
const firebaseConfig = {
    apiKey: 'AIzaSyCmp5rO7OkRyOfI7ekyqV7gNAtvp0L_N2E',
    authDomain: 'crwn-db-b123b.firebaseapp.com',
    databaseURL: 'https://crwn-db-b123b.firebaseio.com',
    projectId: 'crwn-db-b123b',
    storageBucket: 'crwn-db-b123b.appspot.com',
    messagingSenderId: '1071633055474',
    appId: '1:1071633055474:web:9b05e4ece047c2ca795a6b',
    measurementId: 'G-GSY6PNHRQT'
  };

// initializing firebase
firebase.initializeApp(firebaseConfig);

// exporting firebase services
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// firestore query
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`); // queries the collection
    const snapShot = await userRef.get(); // gets the user data

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
