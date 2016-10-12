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

function btnToArray(clicked_id) {
  calcInput.push(clicked_id);
  console.log(calcInput);
}

function equalButton() {
  if (calcInput[1] == '+') {
    let cb = calcAdd();
    let a = calcInput[0].parseInt;
    let b = calcInput[2];
    calcCalculate(a, b, cb);
  }
  console.log(calcInput);
}

function calcCalculate(a, b, cb) {
  return cb(a, b);
  console.log(cb(a,b));
}
