

var r2=require('../utility/utility.js');
var prompt = r2.userInput();

prompt.question("Enter the value of a",function(a)
{
    prompt.question("Enter the value of b",function(b)
    {
        prompt.question("Enter the value of c",function(c)
        {
            r2.quadratic(a,b,c);
        })
    })
})