
var r1=require('../utility/utility.js');
var r2=r1.userInput();

r2.question("Enter value for calculating squar root ",function(number)
{
    r1.sqrt(number);
    process.exit();
})
    
    