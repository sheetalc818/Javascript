/**
* @description Program for prime numbers that are anagrams 
* @author      Sheetal Chaudhari
* @since       27/12/2018
* @param res   holds the array strings to be passed to mergeSort
*/

//require utility
var Utility = require('../utility/utility.js');

//require util for ignoring minor mistakes  
var show = require('util');

//Dividing 0-1000 in slot
var anaPrimes = [[],[],[],[],[],[],[],[],[],[]];

//initialise variables first slot
var initial = 0;
var final = 100;

//finding prime numbers that are anagrams using findAnaPrime()
for(let i=0 ; i < 10 ; i++)
{
    anaPrimes[i] = Utility.findAnaPrime(initial,final);
    initial = initial + 100;
    final = final + 100;
}

var start = 0;
var end = 100;


console.log("---Range of Prime numbers which are Anagrams---");
console.log("");

//printing prime numbers that are in the range
for(let i=0 ; i<10 ; i++)
{
    show.print(start+"-"+end + " --> " + "[ " + anaPrimes[i] + " ]" );

    //incrementing range 
    start = start + 100;
    end = end + 100;
    console.log();
}