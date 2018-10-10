/*    Hands-On Project 3-7:  Car Price Estimate
 *    Author: 
 *    Date:   

 *    Filename: estimate.js
 */
 //global variables


var basePrice=0;
var trimPrice=0;
var soundPrice=0;
var gpsPrice=0;
var stateTax=0;


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
  
  document.getElementById("carMake").innerHTML += ("$" + basePrice.toFixed(2));
  document.getElementById("trimPkg").innerHTML += ("$" + trimPrice.toFixed(2));
  document.getElementById("soundPkg").innerHTML += ("$" + soundPrice.toFixed(2));
  document.getElementById("gpsPkg").innerHTML += ("$" + gpsPrice.toFixed(2));
  document.getElementById("stateTax").innerHTML += ("$" + stateTax.toFixed(2));
  document.getElementById("estPrice").innerHTML += ("$" + (basePrice + 
                                                         trimPrice + 
                                                         soundPrice +
                                                         gpsPrice + 
                                                         stateTax).toFixed(2));
  
  document.getElementById("estimate").style.display = "block";
  
  
}

var button = document.getElementById("calcEstimate");
   if (button.addEventListener) {
      button.addEventListener("click", getEstimate);
   }

