
/**
* @description Program for demonstrating calander using queueLInklist
* @author      Sheetal Chaudhari
* @since       28/12/2018
**/

//require method of utility
var Utility = require('../utility/utility');

//util require for formatting
var show = require('util');

//method from queue require 
var linkedQueue = require('./queueLine');

function calender()
{

    var linkedqueue = new linkedQueue.QueuedLinkedList;
    var linkedqueue2 = new linkedQueue.QueuedLinkedList;

    //month array 
    var months = 
    [
    "",
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
    ];

    // days[i] = number of days in month i
    var days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    //day array
    var day = ["S", "M", "Tu", "W", "Th", "F", "S"];

    try 
    {
        //command line arguments
        var month = + process.argv[2];
        var year = + process.argv[3];

        //parsing input
        var newMonth = parseInt(month);
        var newYear = parseInt(year);

        //validation of input
        if (newMonth < 1 || newMonth > 12) throw "Month value is Invalid , Please Enter value in range 1-12"
        if (newMonth == undefined || newYear == undefined) throw "No input found"
        if (isNaN(newMonth) || isNaN(newYear)) throw "No input or String found , Please Enter a valid input";
        if (newMonth % 1 != 0 || newYear % 1 != 0) throw "Number required , Floating value found"

        //getting day
        var d = Utility.day(newMonth, 1, newYear);
        
        //checking for 
        if (newMonth == 2 && Utility.isLeapYear(newYear)) days[newMonth] = 29;

        console.log("     " + months[newMonth] + " " + year);

        for (let i = 0; i < 7; i++) 
        {
            linkedqueue.enque(day[i]);
        }
        linkedqueue.display2();

        for (let i = 0; i < d; i++) 
        {
            linkedqueue2.enque(" ");
        }

        for (let i = 1; i <= days[newMonth]; i++) 
        {
            linkedqueue2.enque(i);
        }

        linkedqueue2.displayCalender(d);
    } 
    catch (err) {console.log("Error: " + err);}
}
//calling calender function
calender();