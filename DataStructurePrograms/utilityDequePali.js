
class deque 
{

    constructor() 
    {
        this.arr = new Array(20);
        this.front = -1;
        this.rear = -1;
        this.size = 20;
    }
    
    isEmpty() 
    {
        if (this.front == -1) 
        {
            return true;
        }
        return false;
    }
    
    isFull() 
    {
        if (this.front == 0 && this.rear == this.size - 1 || this.front == this.rear+1) 
        {
            return true;
        }
        return false;
    }
    
    addFront(item) 
    {
        if (this.isFull()) 
        {
            console.log("Queue overflowed");
            return;
        }
        if (this.isEmpty()) 
        {
            this.front = 0;
            this.rear = 0;
        } 
        else if(this.front == 0) 
        {
            this.front = this.arr.length - 1;
        } 
        else 
        {
            this.front = this.front - 1;
        }
        this.arr[this.front] = item;
    }
    
    addRear(item)
    {
    
        if(this.isEmpty())
        {
            this.front = 0;
            this.rear = 0;
        }
        else if(this.rear == this.size-1)
        {
            this.rear = 0;
        }
        else
        {
            this.rear = this.rear + 1;
        }
        this.arr[this.rear] = item;
    }
    
    getFront()
    {
        // check whether Deque is empty or not
        if (this.isEmpty())
        {
            console.log("Queue Underflowed");
            return -1 ;
        }
        return this.arr[this.front];
    }
    
    getRear()
    {
        // check whether Deque is empty or not
        if (this.isEmpty() || this.rear < 0)
        {
            console.log("Queue Underflowed");
            return -1 ;
        }
        return this.arr[this.rear];
    }
    
    deletefront()
    {
        // check whether Deque is empty or not
        if (this.isEmpty())
        {
            console.log("Queue Underflowed");
            return;
        }
        // Deque has only one element
        if (this.front == this.rear)
        {
            this.front = -1;
            this.rear = -1;
        }
        else
        // back to initial position
        if (this.front == this.capacity -1)
        {
            this.front = 0;
        }
        else
        {
            // increment front by '1' to remove current
            // front value from Deque
            front = this.front+1;
        }
    }

    /**
    * Method to delete rear element
    */
    deleterear()
    {
        // check whether Deque is empty or not
        if (isEmpty())
        {
            console.log("Queue Underflowed");
            return;
        }
        // Deque has only one element
        if (this.front == this.rear)
        {
            this.front = -1;
            this.rear = -1;
        }
        else if (this.rear == 0)
            this.rear = this.size-1;
        else
            this.rear = this.rear-1;
    }
    
    checkPalindrome(word)
    {
        for (let i = 0; i < word.length; i++) 
        {
            this.addRear(word.charAt(i));
        }
        while(this.front!=this.rear&&this.front<=this.rear)
        {
                if(this.getFront()!=this.getRear())
                {
                    return false;
                }
                this.front++;
                this.rear--;
        }
        return true;
    }
}
module.exports = { deque }