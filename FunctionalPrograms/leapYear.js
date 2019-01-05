//Check whether Year is Leap Year or not

var utility=require("../utility/utility.js");
var prompt = utility.userInput();

prompt.question("enter the year you want to check",function(year)
{
        utility.leapYear(year);
})