
/***********************************************************************************
 *  @Purpose        : Create a JSON file StockAccount.java implements a data type that 
 *                    might be used by a financial institution to keep track of customer 
 *                    information.
 *  @file           : stock.js
 *  @author         : Sheetal Chaudhari
 *  @version        : 1.30.1
 *  @since          : 04-01-2019
 **********************************************************************************/

"use strict"

//uses for handling all the file operations
var fs = require('fs');

//using prompy-sync asking user to enter the input
var prompt = require('prompt-sync')();

//reading file contex
var data =  fs.readFileSync('stock.json','utf-8');//, 'utf-8', function(err,stock)

//parsing data from string to json object
var arrayOfObjects = JSON.parse(data);

class User
{
    /*Sometimes we need a "blueprint" for creating many objects of the same "type".
      Objects of the same type are created by calling the constructor function with
      the new keyword*/

      constructor(name,number,price)
      {
          this.Name = name;
          this.Stockname = number;
          this.Price = price;
      }
}

class Account extends User
{
    
    //buy() function Add shares of stock to account
    buy()
    {
        var num = prompt("Please enter the total number of stocks purchased: "); 

        for(var i=0;i<num;i++)
        {
            var nameRestriction= /[a-z]/ig;
            //asking user to enter inputs
            var name = prompt("Please enter the item purchased: ");
            var number = prompt("Please enter the weight of items purchased: ");
            var price = prompt("Please enter the price per item: ");

            var u = new User(name,number,price);

            var detail =JSON.parse(u);
            //adding user input into the arrayOfObject
            //arrayOfObjects.Person.push(u);
            detail.Person.push(u);
           
            var totalPrice = parseInt(num) * parseInt(price);

            console.log("The total price of all the stocks is "+JSON.stringify(totalPrice));
            
            console.log(arrayOfObjects);
    
            //writing arrayOfObject into the json file
            fs.writeFileSync('./stock.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) 
            {
                if (err) throw err
                console.log('Done!');
            }) 
        } 
    }
    
    //sell() function subtract shares of stock to account
    sell()
    {
        var del = prompt("Please enter the product name you want to purchase: ");
    
        //deleting item from the jason file
        for(var i=0;i<arrayOfObjects.Person.length;i++)
        {
            if(del === arrayOfObjects.Person[i].Stockname)
            {
                console.log('deleted element',del);
                console.log('search elemetn in array: ',arrayOfObjects.Person[i].Stockname);
                arrayOfObjects.Person.splice(i, 1);
            }
        }
         console.log("after deletion data is\n",arrayOfObjects);
        
         fs.writeFileSync('./stock.json', JSON.stringify(arrayOfObjects),'utf-8', function(){console.log('Done!');
        }) 
    }

    //total value of account 
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
        var report=[];
        //console.log("a");
        for(var j=0;j<arrayOfObjects.Person.length;j++)
        {
            report.push(arrayOfObjects.Person[j]);
        }
        console.log("The report of your stock is: "+JSON.stringify(report)); 
    }
}

function menue()
{
    //creating object of Account class
    var s = new Account();
    var arrayOfObjects,totalPrice=1, amount =0;

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
                menue();
                break;

        case 2: s.valueOf();
                menue();
                break;

        case 3: s.sell();
                menue();
                break;

        case 4: s.accountReport();
                menue();
                break;

        case 5: console.log("Exit!!");
                break;

        default: console.log("Invalid Input!");
                 break;
    }
}
menue();



