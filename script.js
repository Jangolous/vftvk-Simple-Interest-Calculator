//This function checks if there is a valid input for the principal variable
function validate() {
      //We declare variables
      var amount = document.getElementById("principal");
      var principal = document.getElementById("principal").value;
      var rate = document.getElementById("rate").value;
      var years = document.getElementById("years").value;
      var interest = principal * years * rate / 100;
      var year = new Date().getFullYear() + parseInt(years);
    
      //This function tells the user to introduce a positive number in case it isn't   
    
      if (amount.value <= 1) {
        alert("Enter a positive number");
        amount.focus();
        return false;
      }
      //This is the structure for the result displayed to the user
      document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,\<br\>at an interest rate of <mark>" + rate + "%</mark>.\<br\>You will receive an amount of <mark>" + interest + "</mark>,\<br\>in the year <mark>" + year + "</mark>\<br\s>"
    }
    
    //This is the function to show the selected rate on the screen
    function updateRate() {
      var rateval = document.getElementById("rate").value;
      document.getElementById("rate_val").innerText = rateval;
    }
    
    
