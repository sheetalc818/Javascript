
//Program for sum of 3 numbers
 
var r2=require('../utility/utility.js');
var prompt=r2.userInput();

prompt.question("Enter value of N: ",(N)=>
{
    addNumber(N);
});

function addNumber(N)
{
    var array = [];
    var len = parseInt(N);
    sum(len);

    function sum(len)
    {
        if(len>0)
        {
            prompt.question("Enter element: ",(j)=>
            {
                array.push(parseInt(j));
                len--;
                sum(len);
            });
        }
        else
        {
            r2.triples(array,N);
            process.exit();
        }
    }
}