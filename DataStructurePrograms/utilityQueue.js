
/**
* @description Program for demonstrating using queue
* @author      Sheetal Chaudhari
* @since       28/12/2018
**/

"use strict"

class Queue
{
    // Array is used to implement a Queue
    constructor()
    {
        this.items = [];
    }

    enqueue(element)
    {   
        // adding element to the queue
        this.items.push(element);
    }

    dequeue()
    {
        // removing element from the queue returns underflow when called on empty queue
        if(this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

    front()
    {
        // returns the Front element of the queue without removing it.
        if(this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }

    isEmpty()
    {
        // return true if the queue is empty.
        return this.items.length == 0;
    }

    printQueue()
    {
        //to print elements of the queue
        var str = "";
        for(var i = 0; i < this.items.length; i++)
            str += this.items[i] +" ";
        console.log(str);
        return str;
    }

    size()
    {
        //to find the size of the queue
        return this.items.length;
    }
}
module.exports = Queue
	
	
	
