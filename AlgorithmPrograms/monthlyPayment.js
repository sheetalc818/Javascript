var r1=require('../utility/utility.js');
var r2=r1.userInput();

r2.question("Enter value of P(principle) ",function(principle)
{
    r2.question("Enter value of R(Percent)",function(Percent)
    {
        r2.question("Enter value of Y (years)",function(years)
        {
            r1.monthlyPayment(principle,Percent,years);
            process.exit();
        })
    })
})