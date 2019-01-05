var show = require('util');

class Node
{

    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

class StackedLink
{

    constructor()
    {
        this.top = null;
    }

    push(item)
    {
         var temp = new Node();
         temp.data = item; 
         temp.next = this.top;
         this.top = temp;
    }

    pop()
    {
      
        if(this.top == null)
        {
            console.log("Stack Underflowed");
            return;
        }
        this.top = this.top.next;
    }

    isEmpty()
    {
        return this.top == null;
    }

    peek()
    {
        if(!this.isEmpty())
        {
            return this.top.data;
        }
        else
        {
            console.log("stack is empty");
            return -1;
        }
    }

    display()
    {
        if (this.top == null) 
        { 
            console.log("Stack Underflowed"); 
            return;
        } 
        else 
        { 
            var temp = this.top; 
            var show = "";
            while (temp != null) 
            { 
                 
                show = show + temp.data;
                if(temp.next!=null)
                {
                    show = show + "-->"
                }              
                temp = temp.next; 
            } 
            console.log(show);
        } 
    }

    displayReverse(top)
    {
       
      if(top == null)
      return;
    
        this.displayReverse(top.next);
        show.print(top.data);
        if(top.next!=top)
         show.print( "-->"); 
      
    }
    getHead()
    {
        return this.top;
    }
}

module.exports = {StackedLink}