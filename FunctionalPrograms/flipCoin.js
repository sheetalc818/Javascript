
var utility = require('../utility/utility.js');
var rl=utility.userInput();

rl.question("Enter number of time flip coin: ",(flip)=>
{
    if(flip < 0){
        console.log('please enter positive number: ');
        process.exit();

    }else{
        rl.question('enter number of time flip coin: ',(flip));
        utility.flipCoin(flip);
        process.exit();

    }
});

