/**
* @description Program for demonstrating inventory data management system using JSON 
* @author Sheetal Chaudhari
* @since 03/01/2019
**/

//It is not a statement, but a literal expression ,you can not use undeclared variables.
"use strict"

//required for taking the user input from user using prompt
var prompt = require('prompt-sync')();

//required for file system to perform operation with file
var fs=require('fs');

function inventory()
{
    //reading text from file and stored in data
    var data = fs.readFileSync('../jsonFiles/inventory.json');

    //Use the JavaScript function JSON.parse() to convert text into a JavaScript object:
    //var jsonGrocery = JSON.parse(data);

    console.log("Inventory Data Management of Rice, Pulses and Wheats-->");
    console.log("1: Rice");
    console.log("2: Wheat");
    console.log("3: Pulses");

    //item tobe searched in a list
    var item = prompt("Please enter your choice: ");
   
    switch(parseInt(item))
    {
        case 1:
        var weight = prompt("Please enter the weight of rice you want to purchase: ");
        for(var i=0;i<data.Rice.length;i++)
        {
        console.log("Per Kg. of "+data.Rice[i].name+" costs "+data.Rice[i].price+" and for "+weight+" Kgs. costs "+weight*data.Rice[i].price);
        }
        break;

        case 2:
        var weight = prompt("Please enter the weight of wheat you want to purchase: ");
        for(var i=0;i<data.Wheat.length;i++)
        {
        console.log("Per Kg. of "+data.Wheat[i].name+" costs "+data.Wheat[i].price+" and for "+weight+" Kgs. costs "+weight*data.Wheat[i].price);
        }
        break;

        case 3:
        var weight = prompt("Please enter the weight of pulses you want to purchase: ");
        for(var i=0;i<data.Pulses.length;i++)
        {
        console.log("Per Kg. of "+data.Pulses[i].name+" costs "+data.Pulses[i].price+" and for "+weight+" Kgs. costs "+weight*data.Pulses[i].price);
        }
        break;

        default:
        console.log("Please select a valid item!!");
    }
    
}
//calling inventory function
inventory();