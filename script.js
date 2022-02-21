//This function checks if there is a valid input for the principal variable
function validate(){
    var amount = document.getElementById("principal");
    
    if(amount.value >= 0){
          alert("Enter a positive number");
          amount.focus();
          return false;
    } else {
        function compute() {
            document.getElementById("result").innerHTML = "If you deposit " + principal + ",\<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of " + interest + ",\<br\>in the year " + year + "\<br\>"
          }
  }
  
//We declare variables
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = principal * years * rate / 100;
  var year = new Date().getFullYear() + parseInt(years);

//This is the function to show the selected rate on the screen
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
//This is the function to compute the interest with the input

