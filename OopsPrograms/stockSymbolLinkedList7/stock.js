/**
* @description Program for maintain the Stock Symbol Purchased or Sold in a Stack 
*              implemented using Linked List to indicate transactions done. 
* @author      Sheetal Chaudhari
* @since       06/01/2019
**/

"use strict"
var prompt = require('prompt-sync')();

//{}-new object
var EX = {};//if it already exists use its value else use the new object.

EX.StackNode = function()
{
	this.item = null;
	this.next = null;
}

EX.LinkedStack = function()
{
	var head = null;
	var size = null;

	/**
	 * Push function
	 * itereate through the list and then add the node to the last node in the list
	 */
    this.pushToStack = function(item)
    {
		var node = new EX.StackNode();
		node.item = item;
		node.next = null;

        if(size < 1 && head === null)
        {
			head = node;
			head.next = null;
			size = 1;
        }
        else
        {
			var current = head;
            while(current.next !== null)
            {
				current = current.next;
			}
			current.next = node;
			size += 1;
		}
	}

	/**
	 * Pop Function
	 * Iterate through the list and grab the last item and remove it from list
	 */
    this.popFromStack = function()
    {
		var current = head;
        if(size === 0)
        {
			return;
		}
        if(size === 1)
        {
			head = null;
			size = 0;
			return current;
		}
		var prev = current;  // 543
        while(current.next !== null)
        {
				prev = current;
				current = current.next;
		}
		prev.next = null;
		size -= 1;
        console.log(current);
        return current;
	}

	// Function to check if stack is empty
    this.isStackEmpty = function()
    {
		return (size < 1) ? true : false;
	}
}
