//listenforsubmit
document.getElementById("loan-form").addEventListener("submit", function(e){
  //show loader
  document.getElementById("loading").style.display = "block";
  setTimeout(calculateResults, 2000);
  e.preventDefault();
});

function calculateResults(){
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterst = document.getElementById("total-interest");
const principal = parseFloat(amount.value);
const calculatedInterest =  parseFloat(interest.value)/ 100/12;
const calculatedPayments = parseFloat(years.value) * 12;

const x = Math.pow(1 + calculatedInterest, calculatedPayments);

const monthly = (principal*x*calculatedInterest)/(x-1);
console.log(totalInterst);

if(isFinite(monthly)) {
  monthlyPayment.value = monthly.toFixed(2);
  totalPayment.value = (monthly * calculatedPayments ).toFixed(2);
  totalInterst.value = ((monthly * calculatedPayments)- principal).toFixed(2);
  //show result
  document.getElementById("results").style.display = "block";
  document.getElementById("loading").style.display = "none";
} else {
  showError("Please check your number");
}


}
function showError(error) {
  const card =  document.querySelector(".card");
  const heading = document.querySelector(".heading");
  //create a div
  const errorDiv = document.createElement("div");
  errorDiv.className = "alert alert-danger";
  errorDiv.appendChild(document.createTextNode(error));
  //insert error above the div 
  card.insertBefore(errorDiv, heading);
  //hide result and loading
  document.getElementById("loading").style.display = "none";
  document.getElementById("results").style.display = "none";
//clear error in seconds
setTimeout(clearError, 2000);

}   
//clear function
function clearError(){
  document.querySelector(".alert").remove();
}