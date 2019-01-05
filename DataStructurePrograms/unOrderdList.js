"use strict"

var prompt = require('prompt-sync')();
var utility =require('./utilityLinkedList.js');
var fs=require('fs');

function LinkedList()
{
    var array=[];
    var dataTwo = fs.readFileSync('data.txt');
    dataTwo = dataTwo.toString().split(" ");
   // dataTwo.sort();

    var list = new utility();
    console.log("The contents of the list are ==> "+dataTwo)
    

    var text =  prompt("Enter the text to search: ");
    for(var i=0;i<dataTwo.length;i++)
    {
        list.add(dataTwo[i]);
    }

    var result = list.indexOf(text);

    if(result == -1)
    {
        console.log("Element not found!!");
        list.add(text);
    }
    else
    {
        console.log("Element found!!");       
        list.removeElement(text);
    }

    array = list.printList();
    list.sortList();
    fs.writeFile('data2.txt', array , function(){console.log('done')});
    console.log("Updated list is ==> ");
    list.printList();
   
}
LinkedList();



	

	
