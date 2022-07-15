// Inline, Internal, external Javascript
// Comments
// variables
// Data Types

var firstName = 'John';
let daughter = "John's daughter";
const lastName = 'Doe';

let x = 1.4;
let y = 2;
console.log(x + y);

console.log(firstName + ' ' + lastName);

// Strings

// Numbers - Int, Floats
// Boolean
// Null, undefined

const userName = prompt("Choose username?");
const welcomeNote = `Welcome, ${userName}`;
const notificationNote = `You're logged in as ${userName}`;

window.alert(welcomeNote);
console.log(notificationNote);
var data = 100;
console.log(typeof(data));


if(userName){
    console.log('true')
} else {
    console.log('false');
}