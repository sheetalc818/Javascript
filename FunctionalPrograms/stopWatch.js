//Program for demonstrating stopwatch

var r1=require('../utility/utility');
var r2=r1.userInput();

r2.question(" Press 1 to start = ", (start) =>
{
   start = r1.time();
   if (start) 
   {
       r2.question("Press 2 to stop 2 = ", (stop) => 
       {
            stop = r1.time();
            elapsed = r1.elapsedTime(start, stop);
            console.log("Elapsed time from start to stop = "+elapsed/1000+" seconds");
          
       });
   }
})

