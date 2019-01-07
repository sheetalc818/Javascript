 /**
 * @purpose Program to read in Stock Names, Number of Share, Share Price and 
 * Print a Stock Report with total value of each Stock and the total value of Stock.
 * @author Sheetal Chaudhari
 * @since 04/01/2019
 **/

"use strict"

//uses for prompting user
var prompt = require('prompt-sync')();

//require for file operations
var fs=require('fs');

function inventory()
{
    //reading a file
    var data = require('./stock.json',"utf8");
    
    console.log(" data-->\n",data);

    //menue
    console.log("Stocks Names-->");
    console.log("1: Google");
    console.log("2: Microsoft");
    console.log("3: Delloite");

    //asking user to enter the choice
    var choice = prompt("Please enter your choice: ");

    switch(parseInt(choice))
    {
        case 1:
        //case 1 for Google to calculate total price of share
        console.log("Price per share in Google is: "+data.stock[0].price);
        var share = prompt("Please enter the number of shares you want to purchase: ");
        var total = share*data.stock[0].price
        console.log("Per Stock in "+data.stock[0].stockName+" is sold for Rs."+data.stock[0].price+" and for "+share+" shares the price would be Rs."+total);
        break;

        case 2:
        //case 2 for Microsoft to calculate total price of share
        console.log("Price per share in Microsoft is: "+data.stock[1].price);
        var share = prompt("Please enter the number of shares you want to purchase: ");
        var total = share*data.stock[1].price;
        console.log("Per Stock in "+data.stock[1].stockName+" is sold for Rs."+data.stock[1].price+" and for "+share+" shares the price would be Rs."+total);
        break;

        case 3:
        //case 3 for Delloite to calculate totale price of share
        console.log("Price per share Delloite is: "+data.stock[2].price);
        var share = prompt("Please enter the number of shares you want to purchase: ");
        var total = share*data.stock[2].price
        console.log("Per Stock in "+data.stock[2].stockName+" is sold for Rs."+data.stock[2].price+" and for "+share+" shares the price would be Rs."+total);
        break;

        default:
        console.log("Please select a valid choice!!");
    }
    //printing total price of all three shares
    console.log("The total price of all the stocks is "+(data.stock[0].price+data.stock[1].price+data.stock[2].price));
}
inventory();

	
