
/***********************************************************************************
 *  @Purpose        : Create a JSON file DeckOfCards.java, to initialize deck of cards 
 *                    having suit ("Clubs", "Diamonds", "Hearts", "Spades") & Rank 
 *                    ("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", 
 *                    "King", "Ace"). Shuffle the cards using Random method and then 
 *                    distribute 9 Cards to 4 Players and Print the Cards the received 
 *                    by the 4 Players using 2D Array
 *  @file           : cards.js
 *  @author         : Sheetal Chaudhari
 *  @version        : 1.30.1
 *  @since          : 07-01-2019
 **********************************************************************************/

"use strict"

function cards()
{
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
    for (var i = 0; i < n; i++) 
    {
        var random = i + parseInt(Math.random() * (n-i));
        var temp = arr3[random];
        arr3[random] = arr3[i];
        arr3[i] = temp;
    }


    //After shuffling ,distribute 9 Cards to 4 Players
    for (var i = 0; i < 4; i++) 
    {
        console.log();
        console.log("****** Cards receieved by Person "+(i+1)+" is ********");
        console.log();
        for (var j = 0; j < 9; j++)
        {
            var arr = [];
            arr.push(arr3[i+j*4]);
            console.log(arr);
        }
    }
    
}
//calling cards() function
cards();