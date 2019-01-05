//output=60°C is 140 °F.
//45°F is 7.222222222222222°C.


var r1=require('../utility/utility.js');
var r2=r1.userInput();

r2.question("Enter temperature in celcius",function(celcius)
{
    r2.question("Enter temperature in fahrenheit",function(fahrenheit)
    {
        r1.tempreture(celcius,fahrenheit);
        process.exit();
    })
})
