

/***********************************************************************************
 *  @Purpose        : Create a JSON file to create a Player Object having Deck of Cards, 
 *                    and having ability to Sort by Rank and maintain the cards in a 
 *                    Queue.
 *  @file           : player.js
 *  @author         : Sheetal Chaudhari
 *  @version        : 1.30.1
 *  @since          : 07-01-2019
 **********************************************************************************/

var utilityQueue = require('../dateTimeQueue8/utilityQueue.js'); 
var s= require('./utilitySort');

//creating object of utilityQueue for each person(4)
var queue =  new utilityQueue();
var queue1 = new utilityQueue();
var queue2 = new utilityQueue();
var queue3 = new utilityQueue();

//arr1 is array of suits
var arr1 = ["Hearts","Diamonds", "Spades","Clubs"];

//arr2 is array of rank
var arr2 = ["Jack", "Queen", "King", "Ace","2", "3", "4", "5", "6", "7", "8", "9", "10"];

//calculating lenght by multiplying lenth of the arrays
var n = arr1.length * arr2.length;

//defined the new array
var arr3 = new Array(n);

//calculating values for arr3
for (var i = 0; i < arr2.length; i++) 
{
    for (var j = 0; j < arr1.length; j++) 
    {
            arr3[arr1.length*i + j] = arr2[i] + " of " + arr1[j];
    }
}

//for Shuffling the cards using Random method
function shuffle()
{
    for (var i = 0; i < n; i++) 
    {
        var random = i + parseInt(Math.random() * (n-i));
        var temp = arr3[random];
        arr3[random] = arr3[i];
        arr3[i] = temp;
    }
}

//for Adding cards in arr3  
for (var j = 0; j < 9; j++)
{
        i=0;
        var arr = [];
        arr.push(arr3[i+j*4]);
        queue.enqueue(arr);
        i++;
}


console.log("****** Cards receieved by Person 1 is ********");
queue.printQ();
shuffle();
for (var j = 0; j < 9; j++)
{
        i=0;
        var arr = [];
        arr.push(arr3[i+j*4]);
       // console.log(arr);
        queue1.enqueue(arr);
        i++;
}

    
console.log("****** Cards receieved by Person 2 is ********");
queue1.printQ();
shuffle();
for (var j = 0; j < 9; j++)
{
        i=0;
        var arr = [];
        arr.push(arr3[i+j*4]);
       // console.log(arr);
        queue2.enqueue(arr);
        i++;
        
}
    
console.log("****** Cards receieved by Person 3 is ********");
queue2.printQ();
shuffle();
for (var j = 0; j < 9; j++)
{
        i=0;
        var arr = [];
        arr.push(arr3[i+j*4]);
       // console.log(arr);
        queue3.enqueue(arr);
        i++;
}

//remaining cards given to the 4th person
console.log("****** Cards receieved by Person 4 is ********");
queue3.printQ();

