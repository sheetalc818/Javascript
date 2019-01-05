var utility =  require('../utility/utility.js')

var rl = utility.userInput();

rl.question('Enter the number you want to search: ',(number)=>
{
    utility.binarySearchOfInteger(number);
    process.exit();
})