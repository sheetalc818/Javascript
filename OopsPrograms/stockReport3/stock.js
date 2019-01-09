 
 /***********************************************************************************
 *  @Purpose        : Create a JSON file to read in Stock Names, Number of Share, Share 
 *                    Price. Print a Stock Report with total value of each Stock and the 
 *                    total value of Stock.
 *  @file           : stock.js
 *  @author         : Sheetal Chaudhari
 *  @version        : 1.30.1
 *  @since          : 04-01-2019
 **********************************************************************************/

"use strict"

//uses for prompting user
var prompt = require('prompt-sync')();

//reading a file
var data = require('./stock.json',"utf8");

//require for file operations
var fs=require('fs');

console.log(" data-->\n",data);

class inventory
{
        google()
        {
        console.log("Price per share in Google is: "+data.stock[0].price);

        var share = prompt("Please enter the number of shares you want to purchase: ");

        var total = share*data.stock[0].price
        console.log("Per Stock in "+data.stock[0].stockName+" is sold for Rs."+data.stock[0].price+" and for "+share+" shares the price would be Rs."+total);
        }

        microsoft()
        {
        console.log("Price per share in Microsoft is: "+data.stock[1].price);

        var share = prompt("Please enter the number of shares you want to purchase: ");

        var total = share*data.stock[1].price;
        console.log("Per Stock in "+data.stock[1].stockName+" is sold for Rs."+data.stock[1].price+" and for "+share+" shares the price would be Rs."+total);
        }

        delloite()
        {
        console.log("Price per share Delloite is: "+data.stock[2].price);

        var share = prompt("Please enter the number of shares you want to purchase: ");
        
        var total = share*data.stock[2].price
        console.log("Per Stock in "+data.stock[2].stockName+" is sold for Rs."+data.stock[2].price+" and for "+share+" shares the price would be Rs."+total);
        }

        total()
        {
        //printing total price of all three shares
        console.log("The total price of all the stocks is "+(data.stock[0].price+data.stock[1].price+data.stock[2].price));
        }
    }


function invent1()
{
    var i = new inventory();
    //menue
    console.log("Stocks Names-->");
    console.log("1: Google");
    console.log("2: Microsoft");
    console.log("3: Delloite");

    //asking user to enter the choice
    var choice = prompt("Please enter your choice: ");
    switch(parseInt(choice))
    {
        case 1: i.google();
                break;
        case 2: i.microsoft();
                break;
        case 3: i.delloite();
                break;
        case 4: i.total();
                break;
        default:console.log("Invalid Input");
    }
}
invent1();

	
