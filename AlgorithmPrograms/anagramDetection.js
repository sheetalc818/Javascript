var r1=require('../utility/utility.js');
var r2=r1.userInput();

r2.question("Enter the first string ",(string1)=>
{
    r2.question("Enter the second string ",(string2)=>
    {
        r1.anagramSt(string1,string2);
        process.exit();
    })
})