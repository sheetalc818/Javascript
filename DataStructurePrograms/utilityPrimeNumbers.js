
module.exports = 
{

    checkPrime : function(min1,max1) 
    {  
    
        //evaluate the size of the array
        let size = (Math.floor(max1/100) + 1);  

        //evaluate the number of arrays
        let range = Math.floor(min1/100); 
        let arr1 = [];
        min = min1;
    
        //to check if min is zero and max is greater than 100
        if((min1 == 0) && (max1 >= 100)) 
        {
            max = 100;
           // max = 99;
        }

        //to check if min is zero and max is lesser than 100
        else if( max1 <= 100) 
        {
            max  = max1;
        }
        else 
        {
            //if min is not equal to 100 
            max = ((range+1)*100)-1; 
        }
    
        for(let index = range+1 ; index <= size;index++) 
        { 
            if( (max-min) < 100 && max <= max1) 
            {
                let prime = new Array();
                for(let i = min;i <= max;i++) 
                {  
                    //loop to check for prime numbers
                    let count = 0;
                    for(let j = 1;j <= i;j++) 
                    {
                       if(i % j == 0) 
                       {
                            count++;
                       }
                    }
                    if(count <= 2) 
                    {
                        prime.push(i);
                    }
                } 
                arr1.push(prime);
        
                //loop to determine reinitialize min and max
                if(max1 - max < 100) 
                { 
                    range = Math.floor(min/100);
                    min = (min + ((range+1)*100)-min);
                    max = max1-1;
                }
                else 
                {
                    range = Math.floor(min/100);
                    min = (min + ((range+1)*100)-min);
                    max = max + 100;
                }
            }      
        }
        console.log('\n Prime Numbers in the given range are :')
        console.log(arr1);
    }
}