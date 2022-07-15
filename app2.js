// functions - intro
// The DOM
// GetElementById, innerText, .textContent
// Comparison & Logical Operators

// let numberOne = 10;
// let numberTwo = 7;

// if(numberOne <=  numberTwo){
//     console.log('true');
// }else if (numberOne === numberTwo) {
//     console.log('equal');
// }
// else {
//     console.log('false');
// }

// if(numberOne !== numberTwo && numberOne < numberTwo) {
//     console.log("not equal");
// } else {
//     console.log("not equal");
// } 

let counter = document.getElementById('counter');
let scorePoints = document.getElementById('score-points');
let count = 0;

function increment() {
    count += 1;
    counter.innerText = count;
}

function reset() {
    let message = count + ' _ ';
    scorePoints.innerText += message;
    counter.innerText = 0;
    count = 0;
}