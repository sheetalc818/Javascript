/**
* @description Program for Inventory Management 
* @author Sheetal Chaudhari
* @since 03/01/2019
**/

var fs = require('fs');
var prompt = require('prompt-sync')();

var data=fs.readFileSync('output.json','utf-8');
var arrayOfObjects = [];
console.log("Data in a json file is\n" +data);
console.log(" ");
var totalPrice=1;

function menue()
{
    console.log(" ");
    console.log("Inventory Management-->");
    console.log(" 1: Insert\n 2: Delete\n 3: Edit\n 4: Save\n 5: Exit");

    var choice = prompt("Please enter your choice: ");
    
    //Insert
    if(choice=='1')
    {       
        nameRestriction= /[a-z]/ig;
        weightRestriction=/[0-9]/g;
        priceRestriction=/[0-9]/g;
         
        var num =prompt("Enter the value for the stock->");
        var Name = prompt("Please enter the item you want to add: ");
        var weight = prompt("Please enter the number of  Kgs: ");
        var price = prompt("Please enter the price per Kg.: ");
        if(nameRestriction.test(Name) && weightRestriction.test(weight) && priceRestriction.test(price))
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
        //calculating total price
        totalPrice = parseInt(num) * parseInt(price);
        console.log("The total price of all the stocks is "+totalPrice);
        console.log(arrayOfObjects);
        menue();
    }
    //Delete
    else if (choice=='2')
    {
        var del = prompt("Please enter the item you want to delete from the inventory: ");
        //deleting item from the jason file
        delete arrayOfObjects[del];
        menue();                
    }
    else if(choice=='3')
    {
        console.log("In Edit");
        menue();
    }
    else if(choice=='4')
    {
        fs.writeFile('output.json',JSON.stringify(arrayOfObjects),'utf-8',function(){console.log('done')});
        var data=fs.readFileSync('output.json','utf-8');
        console.log("data is"+data);
    }
    //Exit
    else(choice=='5') 
    {
        process.exit();
    } 
}
menue();


	
	
	
