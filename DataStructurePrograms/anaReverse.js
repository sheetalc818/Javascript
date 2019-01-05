var Utility = require('../utility/utility');
var linkedStack = require('./stackLine');

function printAnaprimes()
{
    var stackLink = new linkedStack.StackedLink;

   // var Utility = require('../utility/utility');
    var show = require('util');

    var anaPrimes = [[]];
    anaPrimes = Utility.findAnaPrime(0,1000);
   
    for(let i = 0 ; i < anaPrimes.length ; i++)
    {
        stackLink.push(anaPrimes[i]);
    }

    console.log();
    console.log("Initial LinkList->");
    console.log();
    stackLink.display();
    
    var top =  stackLink.getHead();
    
    console.log();
    console.log("Reversed LinkList->");
    console.log();
    stackLink.displayReverse(top);
}
printAnaprimes();