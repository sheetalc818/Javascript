let prompt = require('prompt-sync')();

let utility = require('./utilityPrimeNumbers.js');

//to check for strings
let re = /[a-zA-Z]/g; 

//to check for characters
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g; 



function prime() 
{

    let num1 = prompt(' Enter Number 1: ');
    let num2 = prompt(' Enter Number 2: ');

if(isNaN())
{
    if(num1.search(re) == -1 && num2.search(re2) == -1 && num1 >= 0 && num2 > 0 && num1 < 1001 && num2 < 1001) 
    {
        
         num1 = parseInt(num1);
         num2 = parseInt(num2);
         
         utility.checkPrime(num1,num2);
    }
}
else
{
    console.log("Invalid Input");
}
}

prime();