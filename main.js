const loanForm = document.getElementById("loan-form");

loanForm.addEventListener("submit", calculateResults);

const amount = document.getElementById("amount");
const interest = document.getElementById("interest");
const years = document.getElementById("years");
const monthlyPayment = document.getElementById("monthly-payments");
const totalInterests = document.getElementById("total-interests");
const totalAmount = document.getElementById("total-amounts");

function calculateResults(e) {
  e.preventDefault();
  console.log("calculating");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayment = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatedPayment);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (monthly) {
    monthlyPayment.value = monthly.toFixed(2);
    totalAmount.value = (monthly * calculatedPayment).toFixed(2);
    totalInterests.value = (monthly * calculatedPayment - principal).toFixed(2);
  } else {
    console.log("please check your numbers and try again");
  }
}
