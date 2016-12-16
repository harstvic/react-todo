import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyB5p2F4t22VfrVV15Ry2ruZi_5GpiS8Fgs",
    authDomain: "reac-todo-app.firebaseapp.com",
    databaseURL: "https://reac-todo-app.firebaseio.com",
    storageBucket: "reac-todo-app.appspot.com",
    messagingSenderId: "463393028428"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
