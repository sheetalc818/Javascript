/**
* @description Program for Anagram reverse for prime numbers 
* @author      Sheetal Chaudhari
* @since       27/12/2018
**/

//require utility
var Utility = require('../utility/utility');

//require stack
var linkedStack = require('./stackLine');

function printAnaprimes()
{
    var stackLink = new linkedStack.StackedLink;

   // var Utility = require('../utility/utility');
    var show = require('util');

    //declares empty array for storing anaprime
    var anaPrimes = [[]];

    //finding numbers that are anaprime upto 1000
    anaPrimes = Utility.findAnaPrime(0,1000);
   
    //pushing anaprime numbers into stack
    for(let i = 0 ; i < anaPrimes.length ; i++)
    {
        stackLink.push(anaPrimes[i]);
    }

    console.log();
    //strting from top of stack
    console.log("Initial LinkList->");
    console.log();
    stackLink.display();
    
    //getting top
    var top =  stackLink.getHead();
    
    //starting from from last which is top of stack
    console.log();
    console.log("Reversed LinkList->");
    console.log();
    stackLink.displayReverse(top);
}
printAnaprimes();