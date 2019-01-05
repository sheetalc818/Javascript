var r1=require('../utility/utility.js');
var r2=r1.userInput();

r2.question("Enter string to find in array with binary search ", function(string)
{
    r1.binarySearchOfString(string);
    process.exit();
} )


