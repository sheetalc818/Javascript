
/***********************************************************************************
 *  @Purpose        : Create a JSON file The Inventory Manager will use InventoryFactory 
 *                    to create Inventory Object from JSON.
 *  @file           : inventory.js
 *  @author         : Sheetal Chaudhari
 *  @version        : 1.30.1
 *  @since          : 04-01-2019
 **********************************************************************************/

//uses for handling all the file operations
var fs = require('fs');

//using prompy-sync asking user to enter the input
var prompt = require('prompt-sync')();

//reading data from a json file
var data = fs.readFileSync('./inventory.json', 'utf-8');

//printing data from json file
console.log("Data in a json file is\n" + data);

//for holding the object 
var arrayOfObjects = JSON.parse(data);

console.log(" ");
var totalPrice = 1;

function menue() 
{
    console.log(" ");
    //menue
    console.log("Inventory Management-->");
    console.log(" 1: Insert\n 2: Delete\n 3: Exit");

    //asking user to enter the choice
    var choice = prompt("Please enter your choice: ");

    //Insert  Operation
    if (choice == '1') 
    {
        nameRestriction = /[a-z]/ig;
        var num = prompt("Enter the value for the stock->");
        for (var i = 0; i < num; i++) 
        {
            var Name = prompt("Please enter the item you want to add: ");
            var weight = prompt("Please enter the number of  Kgs: ");
            var price = prompt("Please enter the price per Kg.: ");
            if (nameRestriction.test(Name) && isNaN(weight) != -1 && isNaN(price) != -1) 
            {
                arrayOfObjects.push({
                    stockName: Name,
                    shareNumber: weight,
                    Price: price
                })
            }
            else 
            {
                console.log("Invalid input for name,weight and price!");
                return false;
            }
            console.log(arrayOfObjects);
            console.log("");

            //calculating total price
            totalPrice = parseInt(num) * parseInt(price);

            console.log("");

            //calculating total price for all shares
            console.log("The total price of all the stocks is " + totalPrice);

            //writing arrayOfObjects on json file
            fs.writeFileSync('./inventory.json', JSON.stringify(arrayOfObjects), 'utf-8', function () { console.log('done') });

            //reading json file after insertion
            var data = fs.readFileSync('./inventory.json', 'utf-8');
            console.log("after insertion data is" + data);
            menue();
        }

    }

    //Delete Operation
    else if (choice == '2') 
    {
        //asking user to enter product name
        var del = prompt("Please enter the name of product you want to delete from the inventory: ");
        
        //deleting item from the jason file
        for (var i = 0; i < arrayOfObjects.length; i++) 
        {
            if (del == arrayOfObjects[i].stockName) 
            {
                var index = arrayOfObjects.indexOf(arrayOfObjects[i]);
                arrayOfObjects.splice(index, 1);
            }
        }

        //printing array after deletion
        console.log("after deletion data is");
        arrayOfObjects.forEach(element => 
        {
            console.log(element);
        });

        fs.writeFileSync('./inventory.json', JSON.stringify(arrayOfObjects),'utf-8', function(err){
            if (err) throw err
            console.log('Done!');
        })
        
        menue();
    }

    //Exit
    else (choice == '3')
    {
        process.exit();
    }
}
//calling function
menue();





