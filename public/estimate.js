/*    Hands-On Project 3-7:  Car Price Estimate
 *    Author: 
 *    Date:   

 *    Filename: estimate.js
 */
 //global variables

var carEstimate=0;


function calcBasePrice(){
  var carMakers=document.getElementsByName("carMakers");
}

function calcCustomOptions(){
  
}

function calcSalesTax(){
  
}

function getEstimate(){
  calcBasePrice();
  calcCustomOptions();
  calcSalesTax();
  
  document.getElementById("estimate").style.display = "block";
  
  
}

var button = document.getElementById("calcEstimate");
   if (button.addEventListener) {
      button.addEventListener("click", getEstimate);
   }

