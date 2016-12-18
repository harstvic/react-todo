import firebase from 'firebase';

try {
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);
} catch (e) {

}

// sign-in providers
export var facebookProvider = new firebase.auth.FacebookAuthProvider();
export var githubProvider   = new firebase.auth.GithubAuthProvider();
export var googleProvider   = new firebase.auth.GoogleAuthProvider();
export var twitterProvider  = new firebase.auth.TwitterAuthProvider();

export var firebaseRef = firebase.database().ref();
export default firebase;
