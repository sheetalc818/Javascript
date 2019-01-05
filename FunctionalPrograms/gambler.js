

var r1 = require('../utility/utility.js');
var prompts = r1.userInput();

prompts.question("$ stake", function (stake) 
{
    prompts.question("$goal ", function (goal) 
    {
        prompts.question("$trials", function (trials) 
        {
            r1.gambler(stake,goal,trials);
        })
    })
})




   