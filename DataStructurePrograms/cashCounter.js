"use strict"

var prompt = require('prompt-sync')();
var utility =require('./utilityQueue.js');

/**
 * @description Bank counter interpretation
 */

function Queue()
{
    /**
     * @param accountNum holds account number
     * @param queue is the object of queue class
     */

        var queue = new utility();
        var accountNum;
        let re = /[a-zA-Z]/g;
        console.log("Welcome to People's bank!!");
  
        var val = prompt("Please enter the number of customers: ");
        
    if(isNaN() && val.search(re)==-1)
    {
        for(var i=0;i<val;i++)
        {
            //sending customers in a queue
            queue.enqueue(i); 
        }
    
        console.log("The token number of people in the queue is ==> ");
        queue.printQueue();
    
        while(queue.size()>0)
        {
            var accountNum = prompt("Please enter your account number ( A value between 100 and 500 ): ");
            
            //to validate account number
            if(accountNum>=100 && accountNum<=500) 
            {
                console.log("Enter 1 for cash withdrawal and 2 for cash deposit: ");
                var choice = prompt("Please enter your choice: ");
                var amount = 5000, Balance,Balance1;
                
                //switch cases for withdrawal and deposit
                switch(choice) 
                {
                    case '1': var withdrawal = prompt("Enter the amount to withdraw: ");
                
                    if(withdrawal<amount)
                    {
                        console.log("The amount withdraw by the customer is "+withdrawal);
                        //calculate remaining balance in the bank account
                        Balance = Number(amount) - Number(withdrawal); 
                        console.log("Your account balance is: "+Balance);
                    }
                    else
                    {
                        console.log("Insufficient balance!!");
                    }
                    break;
           
                    case '2': var deposit = prompt("Enter the amount to deposit: ");
                              console.log("The amount deposited is "+deposit);
                              Balance1 = Number(amount) + Number(deposit);
                              console.log("Your account balance is: "+Balance1);
                              break;
                    default: console.log("Invalid choice!!");
                             break;
                }
            }
            else
            {
                console.log("Enter valid account number!!");
            }
            
            //exit customers from the queue
            queue.dequeue(); 
            console.log("The The token number of people remaining in the queue is ===> ")
            queue.printQueue();
        }
        
        //to check if the queue is balanced
        if(queue.size()==0) 
        {
            console.log("The queue is balanced!!");
        }
        else
        {
            console.log("The queue is not balanced!!")
        }
    }
    else
    {
        console.log("Invalid Input");
    }
}
Queue()
	

	
	
