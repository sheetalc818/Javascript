/**
 * @purpose program for demonstrating queue and its various methods
 * @author  Sheetal Chaudhari
 * @since   05/01/2019
 */

// class node 
class Node 
{
    //constructore for initialisation purpose
    constructor(data, next = null) 
    {
        this.data = data,
        this.next = next
    }
}

//class queue
class Queue 
{
    constructor() 
    {
        this.tail = null;
        this.head = null;
    }

    //adding item to the queue
    enqueue(item) 
    {
        let node = new Node(item)
        if (!this.head) 
        {
            this.head = node
            this.tail = node
        } 
        else 
        {
            this.tail.next = node
            this.tail = node
        }
    }

    //removing items from the queue
    dequeue() 
    {
        if (!this.head) 
        {
            return 'No item'
        } 
        else 
        {
            let itemToPop = this.head
            this.head = this.head.next
            console.log(itemToPop);
            return itemToPop
        }
    }

    //for calculating lenght 
    len() 
    {
        let current, counter
        [current, counter] = [this.head, 0]
        while (current) 
        {
            counter++
            current = current.next
        }
        return counter;
    }

    //for getting first item of the queue
    peek() 
    {
        if (this.head) 
        {
            return this.head.data
        } 
        else 
        {
            return 'Empty'
        }
    }

    //checking for empty queue
    isEmpty() 
    {
        return this.len() < 1;
    }

    //printing queue
    printQ() 
    {
        var arr=[];
        var curr = this.head;
        while (curr) 
        {
           arr.push(curr.data);
            curr = curr.next;  
        }
        console.log(arr)
        return arr;
    }
}
module.exports = Queue;

	
