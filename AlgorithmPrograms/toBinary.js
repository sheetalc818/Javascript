
var r1= require('../utility/utility.js');
var r2= r1.userInput();

r2.question("Enter a decimal number to convert into binary: ",function(number)
{
        r1.toBinary(number);
        process.exit();
})



    