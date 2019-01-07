
/**
* @description Program for demonstrating orderdlist using linklist
* @author      Sheetal Chaudhari
* @since       30/12/2018
**/

"use strict"
//var utility=require('../utility/utility');
var prompt = require('prompt-sync')();
var utility =require('./utilityLinkedList.js');
var fs=require('fs');

function LinkedList()
{
    var number = fs.readFileSync('number.txt');
    number = number.toString().split(" ");
    number.sort();

    var list = new utility();
    console.log("The contents of the list are ==> "+number);

    var res =  prompt("Enter the text to search: ");
    for(var i=0;i<number.length;i++)
    {
        list.add(number[i]);
    }

    var result = list.indexOf(res);

    if(result == -1)
    {
        console.log("Element not found!!");
        list.add(res);
    }
    else
    {
        console.log("Element found!!");      
        list.removeElement(res);
    }
        list.sortList();
        res = list.printList();
        list.sortList();
        fs.writeFile('number.txt',res,function(){console.log('done')})
        console.log("Updated list is ==> ");
        console.log(res);
}
LinkedList();





	
