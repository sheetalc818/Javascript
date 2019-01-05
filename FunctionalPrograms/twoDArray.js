 
var r1=require('../utility/utility.js');
var prompts=r1.userInput();

var i, j; 

console.log("1. To print 2D Integer array \n"
        + "2. To print 2D Double Array \n"
        + "3. To print 2D Boolean Array");

    var cont, choice;

   prompts.question('Enter your choice :',(choice)=>
   {

        if(choice == 1)
        {
            var row=col=2,value=1;
            var arr = new Array();
                for(i=0;i<row;i++) 
                {   
                    arr[i]=new Array();         
                    for(j=0;j<col;j++)
                    {  
                        value += 1;
                        arr[i][j] = value;
                       
                    }
                
                }
            console.log('Elements added successfully are :');
            r1.printIntegerArray(arr,0,arr.length);
            process.exit();
        }
         
        else if(choice == 2)
        {
            var row=col=2,value=1.0;
            var arr = new Array();
                for(i=0;i<row;i++) 
                {   
                    arr[i]=new Array();         
                    for(j=0;j<col;j++)
                    {  
                        value += 1.5;
                        arr[i][j] = value;
                       
                    }
                
                }
            console.log('Elements added successfully are :');
            r1.printDoubleArray(arr,0,arr.length);
               process.exit(); 
        }
        

        else if(choice == 3)
        {
            var row=col=2;
            var arr = new Array();
                for(i=0;i<row;i++) 
                {   
                    arr[i]=new Array();         
                    for(j=0;j<col;j++)
                    {  
                       
                        if(i==j)
                        {
                            arr[i][j] = 'true';
                        }
                        else
                        {
                            arr[i][j] = 'false';
                        }
                    }
                }
            console.log('Elements added successfully are :');
            r1.printDoubleArray(arr,0,arr.length);
            process.exit(); 
        }
        else
        {
            console.log('Invalid Input.. Please Try Again..')
        }
              
});
    







