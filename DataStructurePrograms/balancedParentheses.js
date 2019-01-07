//https://www.geeksforgeeks.org/implementation-stack-javascript/
/**
* @description Program for Paranthesis Balancing using Stack 
* @author      Sheetal Chaudhari
* @since       27/12/2018
**/

"use strict"
var prompt = require('prompt-sync')();
var utility =require('./utilityStackParenthesis.js');
//var fs=require('fs');

/**
 * @description programe to balance input and output brackets
 */

function Stack()
{
    //regular expression
    let re = /[a-zA-Z]/g;

    //asking user to enter expression
    var expr = prompt("Please enter an expression: ");
    var stack = new utility();
    var count = 0 , flag =0, a=0;

    if(isNaN() && expr.search(re)==-1)
    {
    //loop to iterate array
    for (var i=0; i<expr.length; i++) 
    {
        if (expr[i]=='(') 
        {
            // Push the element in the stack push when opening brackets are found
            stack.push('('); 
            count ++;
        }
        else if(expr[i]==')')
        {
            //pop element if closing brackets are found
            stack.pop(); 
            flag++;
        }
    }

    //checking balanced condition
    if(count == flag)
    {
        console.log(' The expression is Balanced ' );
    }
    else
    {
        console.log(" The expression is UnBalanced ");
    }
}
}
Stack();