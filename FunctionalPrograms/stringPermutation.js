
var r1=require('../utility/utilityFunction.js');
var r2=r1.userInput();

//using Recursion
r2.question("Enter the string to calculate", (str)=>
{
    r1.permutation(str);
})


//using Iteration method
function permutations(string)
{
var results = [];

if (string.length === 1)
{
results.push(string);
return results;
}

for (var i = 0; i < string.length; i++)
{
var firstChar = string[i];
var otherChar = string.substring(0, i) + string.substring(i + 1);
var otherPermutations = permutations(otherChar);
for (var j = 0; j < otherPermutations.length; j++)
{
results.push(firstChar + otherPermutations[j]);
}
}
return results;
}
var permutation1 = permutations('YES');
console.log("Total permutation: "+permutation1.length);
console.log(permutation1);
//process.exit();
//*/





