
/**
* @description Program for Commercial Data Processing 
* @author      Sheetal Chaudhari
* @since       06/01/2019
**/

"use strict"

//uses for handling all the file operations
var fs = require('fs');

//using prompy-sync asking user to enter the input
var prompt = require('prompt-sync')();

//reading file contex
var data =  fs.readFileSync('stock.json','utf-8');//, 'utf-8', function(err,stock)

//parsing data from string to json object
var arrayOfObjects = JSON.parse(data);

class Account
{
    /*Sometimes we need a "blueprint" for creating many objects of the same "type".
      Objects of the same type are created by calling the constructor function with
      the new keyword*/

    constructor(arrayOfObjects,totalPrice, amount,report)
    {
        this.arrayOfObjects;
        this.totalPrice = 1;
        this.amount = 0;
        this.report=[];
    }

    //buy() function Add shares of stock to account
    buy()
    {
        var num = prompt("Please enter the total number of stocks purchased: "); 

        for(var i=0;i<num;i++)
        {
            var Name = prompt("Please enter the item purchased: ");
            var number = prompt("Please enter the number of items purchased: ");
            var price = prompt("Please enter the price per item: ");
            
            arrayOfObjects.Person.push({
                                            Stockname: Name,
                                            Number: number,
                                            Price: price
                                })

            totalPrice = parseInt(num) * parseInt(price);

            console.log("The total price of all the stocks is "+JSON.stringify(totalPrice));
            
            console.log(arrayOfObjects);
    
            fs.writeFileSync('./stock.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) 
            {
                if (err) throw err
                {
                    console.log('Done!');
                }
            }) 
        } 
    }
    
    //sell() function subtract shares of stock to account
    sell()
    {
        var del = prompt("Please enter the product name you want to purchase: ");
    
        //deleting item from the jason file
        for (var i = 0; i < arrayOfObjects.length; i++) 
        {
            if (del == arrayOfObjects[i].Stockname) 
            {
                var index = arrayOfObjects.indexOf(arrayOfObjects[i]);
                arrayOfObjects.splice(index, 1);
            }
        }
        console.log("after deletion data is");
        arrayOfObjects.forEach(element =>{console.log(element);});

        fs.writeFileSync('./stock.json', JSON.stringify(arrayOfObjects),'utf-8', function(err)
        {
            if (err) throw err
            console.log('Done!');
        }) 
    }

    //total value of account dollars
    valueOf()
    {
        for(var i=0;i<arrayOfObjects.Person.length;i++)
        {
            amount = Number(arrayOfObjects.Person[i].Price) + Number(amount);
        }
        console.log("The total price of the stocks is: "+amount);
    }

    //accountReport()-print the report 
    accountReport()
    {
        console.log("a");
        for(var j=0;j<arrayOfObjects.Person.length;j++)
        {
            report.push(arrayOfObjects.Person[j]);
        }
        console.log("The report of your stock is: "+JSON.stringify(report)); 
    }
}

    //creating object of Account class
    var s = new Account();
    var arrayOfObjects,totalPrice=1, amount =0,report=[];

    console.log("***************Welcome to stock account manager***************")
    console.log("1: Buy stock");
    console.log("2: Value of the stock");
    console.log("3: Sell stock");
    console.log("4: Stock Report");
    console.log("5: Exit");

    var choice = prompt("Please enter your choice: ");
    
    switch(parseInt(choice))
    {
        case 1: s.buy();
                break;

        case 2: s.valueOf();
                break;

        case 3: s.sell();
                break;

        case 4: s.accountReport();
                break;

        case 5: console.log("Exit!!");
                break;

        default: console.log("Invalid Input!");
                 break;
    }



