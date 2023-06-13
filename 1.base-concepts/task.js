"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d < 0) {
    return arr;
  } else if (d === 0) {
    arr.push(-b / (2 * a));
  } else {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }

  let monthlyPercent = percent / 100 / 12;
  let creditBody = amount - contribution;
  let monthlyPayment = creditBody * (monthlyPercent + monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1));
  let totalAmount = monthlyPayment * countMonths;

  totalAmount = Number(totalAmount.toFixed(2));

  return totalAmount;
}