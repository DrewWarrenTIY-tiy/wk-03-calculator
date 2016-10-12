"use strict";

var calcInput = [];

function calcAdd(a, b) {
  return a + b;
}

function calcSubtract(a, b) {
  return a - b;
}

function calcMultiply(a, b) {
  return a * b;
}

function calcDivide(a, b) {
  return a / b;
}

function calcRemainder(a, b) {
  return a % b;
}

function calcCalculate(a, b, cb) {
  return cb(a, b);
  console.log(cb(a,b));
}

function btnToArray(clicked_id) {
  calcInput.push(clicked_id);
  console.log(calcInput);
}

// function equalBtn() {
//   if (calcInput[1] == '+') {
//     calcInput[1] = calcAdd();
//   }
//   if (calcInput[1] == '-') {
//     calcInput[1] = calcSubtract();
//   }
//   if (calcInput[1] == '*') {
//     calcInput[1] = calcMultiply();
//   }
//
//   calcCalculate(calcInput[0],calcInput[2], calcInput[1])
// }
