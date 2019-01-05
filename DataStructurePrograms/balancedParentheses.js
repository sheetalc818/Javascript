//https://www.geeksforgeeks.org/implementation-stack-javascript/

"use strict"
var prompt = require('prompt-sync')();
var utility =require('./utilityStackParenthesis.js');
//var fs=require('fs');

/**
 * @description programe to balance input and output brackets
 */

function Stack()
{
    let re = /[a-zA-Z]/g;

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