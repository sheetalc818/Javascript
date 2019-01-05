//harmonic Series

   var p = require('../utility/utility.js');
   var prompt=p.userInput();
   prompt.question("Enter the value for n?", function(n)
   {
       p.harmonic(n);
   })