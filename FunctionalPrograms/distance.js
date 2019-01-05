
//dist((x, y), (a, b)) = √(x - a)² + (y - b)²
//Math.dist(0,0, 3,4); //the output will be 5
//Math.dist(3,4); //the output will be 5

var r2= require('../utility/utility.js');
var p = r2.userInput();

p.question("enter the value of x2=>",function(x2)
{
    p.question("enter the value of y2=>",function(y2)
    {
        r2.points(x2,y2);
    })
})



  
  


  



