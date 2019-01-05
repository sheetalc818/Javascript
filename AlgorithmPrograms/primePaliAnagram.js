
var r1=require('../utility/utility.js');
var r2=r1.userInput();

r2.question("Enter value to start ",(start)=>
{
    r2.question("Enter value to end ",(end)=>
    {
        var arr=r1.primeNumbers(start,end);
        process.exit();
    }
)})




  

    



    

