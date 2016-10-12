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
// NOT WORKING
function equalButton() {
  let a = parseFloat(calcInput[0]);
  let b = parseFloat(calcInput[2]);
  if (calcInput[1] == '+') {
    let cb = calcAdd;
    calcCalculate(a, b, cb);
    document.querySelector('.answerBox').innerHTML = calcCalculate(a, b, cb);
    console.log(calcCalculate(a, b, cb));
  }
  if (calcInput[1] == '-') {
    let cb = calcSubtract;
    calcCalculate(a, b, cb);
    document.querySelector('.answerBox').innerHTML = calcCalculate(a, b, cb);
    console.log(calcCalculate(a, b, cb));
  }
  if (calcInput[1] == '*') {
    let cb = calcMultiply;
    calcCalculate(a, b, cb);
    document.querySelector('.answerBox').innerHTML = calcCalculate(a, b, cb);
    console.log(calcCalculate(a, b, cb));
  }
  if (calcInput[1] == '/') {
    let cb = calcDivide;
    calcCalculate(a, b, cb);
    document.querySelector('.answerBox').innerHTML = calcCalculate(a, b, cb);
    console.log(calcCalculate(a, b, cb));
  }
  if (calcInput[1] == '%') {
    let cb = calcRemainder;
    calcCalculate(a, b, cb);
    document.querySelector('.answerBox').innerHTML = calcCalculate(a, b, cb);
    console.log(calcCalculate(a, b, cb));
  }
  console.log(calcInput);
}

function calcCalculate(a, b, cb) {
  return cb(a, b);
  console.log(cb(a,b));
}
