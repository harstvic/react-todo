// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

// var groupA = ['Jen', 'John'];
// var groupB = ['Mike'];
//
// var final = [...groupB, 'Bill', ...groupA];
//
// console.log(final);

var person = ['Adrew', 25];
var personTwo = ['Jen', 29];
// Hi Adrew, you are 25
function hello (name, age) {
  return ('Hi ' + name + ', you are ' + age + '.');
}

// console.log(hello(...person));
// console.log(hello(...personTwo));
function greet (name, age) {
  console.log('Hi ' + name + ', you are' + age + '.');
}

greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['ViC', ...names];
// Hi ViC
//final.forEach((name) => console.log('Hi ' + name));
final.forEach((name) => console.log('Hi ' + name + '.'));
