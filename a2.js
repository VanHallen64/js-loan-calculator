"use strict";
let totalExpenses = 0
let totalIncome = 0


//Formats the value to display dollar sign and decimal
function formatDollarAmount(value) {            
	let amount = "$" + value.toFixed(2);
	return amount;
}


//Adds a new item to the list in the webpage
function addListItem(id,newItem) {             
	let node = document.createElement("LI");
	let textnode = document.createTextNode(newItem);
	node.appendChild(textnode);
	id.appendChild(node);
}


//Updates the totals displayed in the site
function updateTotals() {                     
	let totalFormExpenses = formatDollarAmount(totalExpenses);
	let totalFormIncome = formatDollarAmount(totalIncome);
	let annualFormTotal = formatDollarAmount(12*(totalIncome - totalExpenses));
	document.getElementById("expTotal").innerHTML = totalFormExpenses;
	document.getElementById("incTotal").innerHTML = totalFormIncome;
	document.getElementById("total").innerHTML = annualFormTotal;
}


//Asks the user for an expense value and item and sends it to updateTotals and addListItem
function addExpense() {                      
	let value = +prompt("Enter Expense Amount");
	let valueText = formatDollarAmount(value) + ": " + prompt("Enter Item");
	let id = document.getElementById("expenses");
	totalExpenses += value;
	updateTotals();
	addListItem(id,valueText);
}


//Asks the user for an income value and item and sends it to updateTotals and addListItem
function addIncome() {
	let value = +prompt("Enter Income Amount");
	let valueText = formatDollarAmount(value) + ": " + prompt("Enter Item");
	let id = document.getElementById("income");
	totalIncome += value;
	updateTotals();
	addListItem(id,valueText);
}


//Calculates the monthly payment
function monthlyPayment(L,p,N) {
	let y = 1 + (p/1200);
	let x = Math.pow(y,N);
	let answer = (((p/1200)* x)/(x - 1)) * L;
	return answer;
}


//Asks the user for the loan values and replaces the HTML element
function monthlyPaymentClicked() {
	let L = +prompt("Enter Amount");
	let p = +prompt("Enter Interest Rate");
	let N = +prompt("Enter Number of Months");
	document.getElementById("loanTaken").innerHTML = "You borrowed " + formatDollarAmount(L) + " at " + p + "% and are paying it back over " + N + " months." + " Your monthly payment is " + formatDollarAmount(monthlyPayment(L,p,N));
}
	






