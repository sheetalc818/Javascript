/**
* @description  Program for demonstrating inventory data management system using JSON 
* @author       Sheetal Chaudhari
* @since        03/01/2019
**/

//using prompy-sync asking user to enter the input
var prompt = require('prompt-sync')();

//uses for handling all the file operations
var fs=require('fs');

function inventory()
{

//reading data from a file    
var data = fs.readFileSync('./inventory.json');

//parsing data from string to Json object
var jsonGrocery = JSON.parse(data);

//menue
console.log("Inventory Data Management\n");
console.log("1: Rice");
console.log("2: Wheat");
console.log("3: Pulses");

//asking user for choice
var item = prompt("Please enter your choice: ");

switch(parseInt(item))
{

    case 1:
    //case 1 for Rice
    var weight = prompt("Please enter the weight of rice you want to purchase: ");
    
    for(var i=0;i<jsonGrocery.Rice.length;i++)
    {
        console.log("Per Kg. of "+jsonGrocery.Rice[i].name+" costs "+jsonGrocery.Rice[i].price+" and for "+weight+" Kgs. costs "+weight*jsonGrocery.Rice[i].price);
    }
    break;

    case 2:
    //case 2 for Wheat
    var weight = prompt("Please enter the weight of wheat you want to purchase: ");

    for(var i=0;i<jsonGrocery.Wheat.length;i++)
    {
        console.log("Per Kg. of "+jsonGrocery.Wheat[i].name+" costs "+jsonGrocery.Wheat[i].price+" and for "+weight+" Kgs. costs "+weight*jsonGrocery.Wheat[i].price);
    }
    break;

    case 3:
    //case 3 for pulses
    var weight = prompt("Please enter the weight of pulses you want to purchase: ");

    for(var i=0;i<jsonGrocery.Pulses.length;i++)
    {
        console.log("Per Kg. of "+jsonGrocery.Pulses[i].name+" costs "+jsonGrocery.Pulses[i].price+" and for "+weight+" Kgs. costs "+weight*jsonGrocery.Pulses[i].price);
    }
    break;

    default: console.log("Please select a valid item!!");
}
}
inventory();

