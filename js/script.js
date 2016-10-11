"use strict";

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

function calcModulate(a, b) {
  return a % b;
}

function calcCalculate(a, b, cb) {
  cb(a, b);
  console.log(cb(a,b));
}
