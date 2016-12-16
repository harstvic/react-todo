import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyB5p2F4t22VfrVV15Ry2ruZi_5GpiS8Fgs",
  authDomain: "reac-todo-app.firebaseapp.com",
  databaseURL: "https://reac-todo-app.firebaseio.com",
  storageBucket: "reac-todo-app.appspot.com",
  messagingSenderId: "463393028428"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'ViC',
    age: 29
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNodeRef = notesRef.push({
//   text: 'walk the dog!'
// });
//
// console.log('Todo id', newNodeRef.key);
















// var changeName = (snapshot) => {
//     console.log('Change name:', snapshot.val());
// };
//
// firebaseRef.child('user').on('value', changeName);
//
// firebaseRef.update({'user/name': 'John'});
//
// firebaseRef.update({'app/name': 'Todo Application'});

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', ',key:', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });

// var logData = (snapshot) => {
//   console.log('Got value for key:', snapshot.key, snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// firebaseRef.off('value', logData);
//
// firebaseRef.update({isRunning: false});
