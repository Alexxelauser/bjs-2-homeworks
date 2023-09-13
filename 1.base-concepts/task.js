"use strict"
let a = 1;
let b = 5;
let c = 4;

function solveEquation(a, b, c) {
	let discriminant = b ** 2 - 4 * a * c;
	let root;
	let decision1;
	let decision2;
	let arr = [];
	if (discriminant < 0) {
		arr = [];
	} else if (discriminant == 0) {
		root = (-b / (2 * a));
		arr = [root];
	} else {
		decision1 = ((-b + Math.sqrt(discriminant)) / (2 * a));
		decision2 = ((-b - Math.sqrt(discriminant)) / (2 * a));
		arr = [decision1, decision2];
	}
	return arr;
}
  



let percent = 10;
let contribution = 0;
let amount = 10000;
let countMonths = 36;

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyPercent = (percent / 100) / 12;
	let loanBody = amount - contribution;
	let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
	let sum = monthlyPayment * countMonths;
	sum = Number(sum.toFixed(2));
	return sum;
}