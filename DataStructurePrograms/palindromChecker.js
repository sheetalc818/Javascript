var Utility = require('../utility/utility');
var dqNew = require('./utilityDequePali');

function palindromeChecker() 
{
    var deque = new dqNew.deque;
    let re = /[0-9]/g;
    console.log("Enter a string to check palindrome ");
    try 
    {
        var st = Utility.inputread();
        if (st == "") throw "Empty string found";
        if (isNaN(st)&& st.search(re)==-1) 
        {
            console.log("String required , Number found");
        }
        else
        {
            console.log("");
            if (deque.checkPalindrome(st)) 
            {
                console.log(st + " is a palindrome");
            }
            else 
            {
                console.log(st + " is not a palindrome");
            }
        }
    } 
    catch (err) {  console.log("Error: " + err);}
}
palindromeChecker();