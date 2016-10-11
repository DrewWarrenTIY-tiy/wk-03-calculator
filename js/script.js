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

function calcRemainder(a, b) {
  return a % b;
}

function calcCalculate(a, b, cb) {
  return cb(a, b);
  console.log(cb(a,b));
}
