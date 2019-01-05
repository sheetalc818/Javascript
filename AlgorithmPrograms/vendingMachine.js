var Utility = require('../utility/utility.js');
var r1= Utility.userInput();


r1.question("Enter an amount you want to dispense: ",function(amount)
{

    Utility.vendingMachine(amount);  
    process.exit();
})



