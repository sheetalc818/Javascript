// to find Prime factor for given number

var r1=require('../utility/utility.js');
var prompts =r1.userInput();

prompts.question("Number to find the prime factors",function(n)
{
    r1.primeFact(n);
    process.exit();
})