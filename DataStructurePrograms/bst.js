/**
* @description Program for Binary Search Tree 
* @author      Sheetal Chaudhari
* @since       27/12/2018
**/
var readline = require('readline-sync');

module.exports = 
{

    binarySearchTree() 
    {
        let re = /[a-zA-Z]/g;
        var arr = [];

        //asking user for input
        var number = readline.question("Enter the total number of test cases");

        //checking for proper input
        if(isNaN() && number.search(re)==-1)
        {
            console.log("Enter your integers");
            for (var i = 0; i < number; i++) 
            {
                arr[i] = readline.question(' ');
            }
            console.log(arr);
        }
        else
        {
            console.log("Invalid Input, enter a valid number!");
        }

        var first,second;
        var len=arr.length;

        for (var j = 0; j < len; j++) 
        {
            //calculating binary trees possible from nodes(Cn = (2n)!/(n+1)!*n!)
            var first =  (this.factorial(2*Number(arr[j])));
            var second = Number((this.factorial(Number(arr[j]) + 1)) * (this.factorial(Number(arr[j]))));
            var result = Math.floor((first / second));
            console.log("The total number of Node required for "+arr[j]+" is "+result);
       }
       

    },

    //calculating factorial 
    factorial(num) 
    {
        if(num>0)
        {
        if (num == 0 || num == 1) 
        {
            return 1;
        }
        return num*this.factorial(num-1);
    }
    }
}

