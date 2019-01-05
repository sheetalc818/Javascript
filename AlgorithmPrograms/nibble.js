

var r1=require('../utility/utility.js');
var r2= r1.userInput();

r2.question("Enter the decimal Number ",function(num)
{
        r1.swapNibble(num);
        process.exit(); 
})