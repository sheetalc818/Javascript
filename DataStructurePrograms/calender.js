
/**
* @description Program for demonstrating calander using 2d array
* @author      Sheetal Chaudhari
* @since       28/12/2018
**/
var take = require('util');
var Utility = require('../utility/utility');
var readline = require('readline-sync');

function calender() 
{
    //command line arguments
    var month = +process.argv[2];
    var year = +process.argv[3];

    var newMonth=parseInt(month);
    var newYear=parseInt(year);
    
    if(isNaN(newMonth)||isNaN(newYear)) throw "Inavalid Input";
    
    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dates = [ 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];
   
    //day of week
    var day = Utility.dayOfWeek(1, month, year);
    console.log(day);

    //checking for leap year
    var leap = Utility.leapYear(year);
    if (leap = true) 
    {
        dates[2] = 29;
    }
    for (var i = 0; i < week.length; i++) 
    {
        take.print(week[i] + "  ");
    }
    console.log();
    //printing the day of week
    for (var i = 0; i < (day * 5); i++) 
    {
        take.print(" ");
    }
    //printing date
    for (var i = 1; i <= dates[month]; i++) 
    {
        if (i < 10) 
        {
            take.print(" " + i + "   ");
        }

        if (i > 9) 
        {
            take.print("" + i + "   ")
        }
        if ((i + day) % 7 == 0) 
        {
            console.log();
        }

    }
    console.log("\n\n");
}
calender();