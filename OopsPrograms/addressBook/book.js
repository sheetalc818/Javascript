/***********************************************************************************
 *  @Purpose        : Create a JSON file to demonstrate address book
 *  @file           : book.js
 *  @author         : Sheetal Chaudhari
 *  @version        : 1.30.1
 *  @since          : 09-01-2019
 **********************************************************************************/

//require for asking user input
var prompt = require('prompt-sync')();

//require for file operations
var fs=require('fs');

//reading data from the book.json file
var data = fs.readFileSync('./book.json');

//to convert text into a JavaScript object:
var arrayOfObjects = JSON.parse(data);

//regular expressions
nameRestriction = /[a-z]/ig;
contactRestriction = /[0-9]/g;

class Address
{
    constructor()
    {}
    createAddress()
    {
        //asking user to enter the input
        console.log("Please enter all the following information to create a address profile");
        var name = prompt("Please enter your first name: ");
        var lastName = prompt("Please enter your last name: ");

        //validating information
        if(nameRestriction.test(name) == false && name.length>3 &&  nameRestriction.test(lastName) == false && lastName.length>3) 
        {
            console.log("Invalid name!");
            return false;
        }

        //asking user to enter the address
        console.log("Please enter your address");
        var street = prompt("Street: ");
        var city = prompt("City: ");

        //validating input
        if(nameRestriction.test(city) == false) 
        {
            console.log("Invalid name!");
            return false;
        }
        
        //validating state input
        var state = prompt("State: ");
        if(nameRestriction.test(state) == false) 
        {
            console.log("Invalid name!");
            return false;
        }
        
        //validating nationality input
        var nation = prompt("Nationality: ");
        if(nameRestriction.test(nation) == false)
        {
            console.log("Invalid name!");
            return false;
        }
        
        //validating zip code 
        var zip = prompt("Zip/Postal code: ");
        if(contactRestriction.test(zip) == false)
        {
            console.log("Invalid number!");
            return false;
        }

        //perform validation for phone
        var phoneNum = prompt("Phone number: ");
        if(contactRestriction.test(phoneNum) == false  || phoneNum.length !=10 )
        {
            console.log("Invalid number!");
            return false;
        }
        
        arrayOfObjects.Person.push({
                                    Name: name,
                                    LastName: lastName,
                                    Address:
                                    {
                                        Street: street,
                                        City: city,
                                        State: state,
                                        Nation: nation,
                                        Zip: zip,
                                        PhoneNum: phoneNum
                                    }
                                   })
                
        fs.writeFile('book.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
            if (err) throw err
            console.log('Done!')
        })
           
        console.log("Address updated succesfully!");
        console.log("Your information as per our record is: \r\n First Name: "+name+"\r\nLast Name: "+lastName+"\r\nStreet: "+street+"\r\nCity: "+city+"\r\nState: "+state+"\r\nNationality: "+nation);
    }
                          
    compare1(a, b) 
    {  
        if (a.LastName.toLowerCase() < b.LastName.toLowerCase()) 
        {  
            return -1;  
        }  
        if (a.LastName.toLowerCase() > b.LastName.toLowerCase()) 
        {  
            return 1;  
        }    
        return 0;  
    }
                          
    
    sorting()
    {
        console.log(arrayOfObjects.Person.sort(this.compare1));
    }


    //openProfile() is for viewing person's information
    openProfile()
    {

    }
}

function address()
{

    var add= new Address();
    console.log("************Menue************");
    console.log("1: Create Address");
    console.log("2: Open Profile");
    console.log("3: Exit");

    var choice= prompt("Enter choice to perform operation ");

    switch(parseInt(choice))
    {
        case 1: add.createAddress();
                break;

        case 2: add.openProfile();
                break;

        case 3: process.exit();

        default: console.log("Invalid Choice!!");
    }
}
address();