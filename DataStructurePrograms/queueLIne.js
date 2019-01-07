
/**
* @description Program for demonstrating using queue
* @author      Sheetal Chaudhari
* @since       28/12/2018
**/

var show = require('util');

class Qnode
{
    constructor(key)
    {
        this.next = null;
        this.key = key;
    }
}
class QueuedLinkedList 
{
	constructor()
	{
		this.front = null;
		this.rear = null;
	}
	
	enque(key)
	{
		var temp = new Qnode(key);
		
		if(this.rear == null)
		{
			this.rear = this.front = temp;
			return;
		}
		
		this.rear.next = temp;
		this.rear = temp;
	}
	
	deque()
	{
		
		if(this.front == null)
		{
			return null;
		}
		
		var temp = this.front;
		this.front = this.front.next;
		
		if (this.front == null) 
		{
			 this.rear = null;
		}
	        return temp.key; 
	}
	
	display()
	{
		var t = this.front;
		
		while(t!=null)
		{
			show.print(t.key);
			if(t.next!=null)
				show.print(" --> ");
			t = t.next;
		}
		console.log("");
    }
    display2(){
        var t = this.front;
		
		while(t!=null)
		{
			show.print(t.key);
			if(t.next!=null)
				show.print("  ");
			t = t.next;
		}
        console.log();
        console.log();
    }

    displayCalender(d){
       
        var t = this.front;
        var t2 = this.front;
      
         var count = 0;
    
        while(t.key == " ")
        {
       show.print("   ");
       
       t = t.next;
        }
        while(t!=null)
        {   
            count++;
            show.print(" ", t.key);
         if(t.key < 10){
             show.print(" ");
         }
         

         if (((count + d) % 7 == 0) ) {
            console.log("");
        }
       t = t.next;
    }
    count = 0;
}
}
module.exports = {
QueuedLinkedList
}

   
