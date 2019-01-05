
    var r1=require('../utility/utility.js');
    var r2=r1.userInput();
    
    r2.question("Enter value for month ",function(m)
    {
        r2.question("Enter value for date ",function(d)
        {
            r2.question("Enter value for year ",function(y)
            {
                r1.dayOfWeek(m,d,y);
                process.exit();
            })
        })
    })
   
    
    
    
    
    
