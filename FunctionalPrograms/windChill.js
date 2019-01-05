
var r2=require('../utility/utility.js');
var prompt=r2.userInput();

prompt.question("enter the value of T",function(T)
{
    prompt.question("enter the value of V",function(V)
    {
        r2.windChill(T,V);
    })
   
}) 
