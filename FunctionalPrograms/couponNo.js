
var p1 = require('../utility/utility.js');
var r=p1.userInput();

r.question("Enter value for N Distinct Coupon Number ",function(n)
{
    p1.coupon(n);
    process.exit();
})