 //Replace string with username

 var t= require('../utility/utility.js');
 var ut=t.userInput();
 
  ut.question("Hello sheetal, How are you?", function(ans)
 {
        t.replace(ans);
 })
 
 