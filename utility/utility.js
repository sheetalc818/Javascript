

//Encapsulated code can be utilized in other files.

var read=require('readline-sync');
//var show=require('util');
module.exports =
{
        userInput: function () 
        {
            var r1 = require('readline');
            var prompt = r1.createInterface(process.stdin, process.stdout);
            return prompt;
        },
/*********************************Replacing string**************************************/

        /**
          * Aim: program for Replacing string with user input string
          * @author Sheetal Chaudhari
          * @version 1.29.1
          * @since 18/12/2018
          */

        replace: function (ans) 
        {
            var str = 'Hello sheetal, How are you?';
            var n = ans.length;
            console.log("length is " + n);
            if (n >= 3) {
                var msg = str.replace("sheetal", ans);
                console.log(msg);
            }
            else {
                console.log("length is less than 3");
            }
        },


/************************************FlipCoin****************************************/

        /**
          * Aim: Program for calculating percentage of head and tail(FlipCoin)
          * @author Sheetal Chaudhari
          * @version 1.29.1
          * @since 18/12/2018
          */
        flipCoin(flip) {
            var head = 0;
            var tail = 0;
            var n = flip;
            var i;
            for (i = 0; i < n; i++) 
            {
                if (Math.random() < 0.5) 
                {
                    tail++;
                    console.log('tail');
                }
                else 
                {
                    head++;
                    console.log('head');
                }
            }

            var PercentageHead = (head / n) * 100;
            console.log('Percentage of head= ', PercentageHead);

            var PercentageTail = (tail / n) * 100;
            console.log('Percentage of tail= ', PercentageTail);
        },
        
/*************************************Leap Year****************************************/

        /**
          * Aim: Program for cheking Whether the entered year is leap year or not
          * @author Sheetal Chaudhari
          * @version 1.29.1
          * @since 20/12/2018
          */

        leapYear: function (year) 
        {
            var y = year.length;
            if (y == 4) 
            {
                if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) 
                {
                    console.log("year is a leap year");
                }
                else 
                {
                    console.log("year is not a leap year");
                }
            }
            else 
            {
                console.log("please enter a valid year");
            }
        },

/**********************************power of 2******************************************/

        /**
          * Aim: Program for calculating power of 2
          * @author Sheetal Chaudhari
          * @version 1.29.1
          * @since 20/12/2018
          */

        power: function (n) {
            if (n < 31) {
                for (i = 1; i <= n; i++) {
                    var result = Math.pow(2, i);
                }
                console.log("power of number is " + result);
            }
            else {
                console.log("invalid input")
            }
        },

/******************************harmonic Number****************************************/

        /**
          * Aim: Program for calculating the harmonic number
          * @author Sheetal Chaudhari
          * @version 1.29.1
          * @since 21/12/2018
          */

        harmonic: function (n) {
            var i;
            var sum = 0;
            if (n != 0) {
                for (i = 1; i <= n; i++) {
                    console.log("1/" + i);
                    sum += 1 / i;
                }
                console.log("sum is ->" + sum);
            }
            else {
                console.log("Invalid input!");
            }
        },

/************************************Prime factor*************************************/
        /**
          * Aim: Program for calculating a prime factor of a given number
          * @author Sheetal Chaudhari
          * @version 1.29.1
          * @since 21/12/2018
          */
        primeFact: function (n) 
        {
            //integer = 300;
            var array = [];
            //check if divisor is prime
            for (i = 2; i < n / 2; i++) 
            {
                if (n % i == 0) 
                {
                    for (var j = 2; j <= i / 2; j++) 
                    {
                        if (i % j == 0)
                            var isPrime = false;
                        else
                            var isPrime = true;
                    }    //if divisor is prime
                    if (isPrime == true) 
                    {
                        //divide integer by prime factor & factor store in array primeArray
                        n /= i;
                        array.push(i);
                    }
                }
            }
            for (var k = 0; k < array.length; k++) 
            {
                console.log(array[k]);
            }
        },

/***********************************gambler****************************************/

        /**
          * Aim: Program for demonstrating gambler logic
          * @author Sheetal Chaudhari
          * @version 1.29.1
          * @since 21/12/2018
          */

        gambler: function (stake, goal, trials) 
        {
            var bets = 0; // total number of bets made
            var wins = 0; // total number of games won
            // repeat trials times
            for (var t = 0; t < trials; t++) 
            {
                // do one gambler's ruin simulation
                var cash = stake;
                while (cash > 0 && cash < goal) 
                {
                    bets++;
                    if (Math.random() < 0.5) 
                    {
                        cash++; // win $1
                    }
                    else {
                        cash--; // lose $1
                    }
                }
                if (cash == goal) 
                {
                    wins++; // did gambler go achieve desired goal?
                }
            }
            // print results
            console.log(wins + " wins of " + trials);

            var ps = 100.0 * wins;
            var b = ps / trials;
            console.log("Percent of games won = " + 100.0 * wins / trials);

            var d = 1.0 * bets;
            var s = d / trials;
            console.log("Avg # bets = " + 1.0 * bets / trials);
        },
        
/*********************************coupon without duplication*********************************/

        /**
          * Aim: Program for getting a random coupon number without duplication
          * @author Sheetal Chaudhari
          * @version 1.29.1
          * @since 21/12/2018
          */
        coupon: function (n) 
        {
            var min = 1;
            var max = n;
            var count = 0
            var j = 0
            var size = 0;
            var arr = new Array(n);
            while (size < n) 
            {
                var x = (Math.round(Math.random() * (max - min)) + min);
                count = 0
                for (var i = 0; i < arr.length; i++) 
                {
                    if (arr[i] == x || x < 0) 
                    {
                        count++;
                        break;
                    }
                }
                if (count == 0) 
                {
                    arr[j++] = x;
                    size++;
                }
            }
            for (var i = 0; i < arr.length; i++) 
            {
                console.log(arr[i])
            }
        },

/***************************************Array*********************************************/

        /**
          * Aim: Program for taking a array elemets from user and print it on console
          * @author Sheetal Chaudhari
          * @version 1.29.1
          * @since 21/12/2018
          */

        printIntegerArray(arr, start, size) 
        {
            //var util = require('util');
            var i = start, j = size;
            // To print Integer 2D array
            for (i = 0; i < arr.length; i++) 
            {
                for (j = 0; j < arr.length; j++)
                {
                    util.print(arr[i][j] + '  ');
                }
                console.log();
            }
        },

        printDoubleArray(arr, start, size) 
        {
            // var util = require('util');
            var i = start, j = size;
            // To print Integer 2D array
            for (i = 0; i < arr.length; i++) 
            {
                for (j = 0; j < arr.length; j++) 
                {
                    util.print(arr[i][j] + '  ');
                }
                console.log();
            }
        },

/**********************************sum of 3 digits*****************************************/

        /**
          * Aim: program   with   cubic   running   time.   Read   in   N   integers   and   
          * counts   the number   of   triples   that   sum   to   exactly   0
          * @author Sheetal Chaudhari
          * @version 1.29.1
          * @since 21/12/2018
          */
        triples(array, N) 
        {
            var Count = 0;
            for (var i = 0; i < N - 2; i++) 
            {
                for (var j = i + 1; j < N - 1; j++) 
                {
                    for (var k = j + 1; j < N; j++)
                    {
                        if (array[i] + array[j] + array[k] === 0) 
                        {
                            Count++;
                            console.log("triplet are: " + array[i] + "," + array[j] + "," + array[k]);
                        }
                    }
                }
            }
        },

/*********************************Euclidean distance*******************************************/

        /**
         * Aim: write a Program for calculating Euclidean distance between(0,0) and (x2,y2) 
         * @author Sheetal Chaudhari
         * @version 1.29.1
         * @since 
         */

        points: function (x2, y2) 
        {
            var x1 = 0;
            var y1 = 0;

            console.log("X1 is " + x1);
            console.log("Y1 is " + y1);

            var xs = (x2 - x1);
            var ys = (y2 - y1);

            xs *= xs;
            ys *= ys;

            var distance = Math.sqrt(xs + ys);
            console.log("Result is =>" + distance);

        },
/***************************permutation of a String**********************************/
        
/**
         * Aim:Write   static   functions   to   return   all   permutation   of   a   String   using   
         * iterative   method   and Recursion   method.   Check   if   the   arrays   returned   by   
         * two   string   functions   are   equal.
         * @author Sheetal Chaudhari
         * @version 1.29.1
         * @since 22/12/2018
         */
        permutation(str) 
        {
            var len = str.length;
            var str2 = " ";
            recursion(str2, str);

            function recursion(str2, str) 
            {
                if (str.length == 0) 
                {
                    console.log(str2);
                    str2 = " ";
                }
                for (var i = 0; i < str.length; i++) 
                {
                    recursion(str2 + str.charAt(i), str.substring(0, i) + str.substring(i + 1, str.length));
                }
            }
        },
       
/***************************************Stopwatch Program***********************************/

        /**
        * Aim:Write a Stopwatch Program for measuring the time that elapses between the start and end 
        *     clicks
        * @author Sheetal Chaudhari
        * @version 1.29.1
        * @since 22/12/2018
        */

        time() 
        {
            var d = new Date();
            t = d.getTime()
            return t;
        },
        elapsedTime(start, stop) 
        {
            var elapsed = stop - start;
            return elapsed;

        },

/***********************************Quadratic Function****************************/
        /**
        * Aim: Program for Qudratic Function for calculating roots
        * @author Sheetal Chaudhari
        * @version 1.29.1
        * @since 22/12/2018
        */

        quadratic: function (a, b, c) {
            var root = Math.sqrt(b * b - 4 * a * c);
            var denom = 2 * a;

            var root1 = (-b + root / denom);
            var root2 = (-b - root / denom);

            console.log("1st root:" + root1);
            console.log("2nd root:" + root2);
        },

/********************************** WindChill*************************************/

        /**
        * Aim: Program for demonstrating logic for WindChill
        * @author Sheetal Chaudhari
        * @version 1.29.1
        * @since 22/12/2018
        */
        windChill: function (T, V) 
        {
            var T;
            var V;

            if (T <= 50 && (V < 120 || V > 3)) {
                var W = 35.74 + (0.6215 * T) + 0.4275 * T - 35.75 * Math.pow(V, 0.16);

                console.log("Temperature = " + T);
                console.log("Wind speed = " + V);
                console.log("Wind chill = " + W);

            }
            else {
                console.log("Value entered for T and V are Invalid for Formula!");
            }

        },

/**************************************************************************************/


                             //Algorithm Programs//


/*****************************anagram of two string*************************************/
/**
* Aim: Program for demonstrating logic for anagram of two string
* @author Sheetal Chaudhari
* @version 1.29.1
* @since 22/12/2018
*/
anagramSt: function (string1, string2) 
{
 //check if the given input is a string or not
 if(string1.toString().split('').join()>='a' && string1.toString().split('').join()<='z' || string2.toString().split('').join()>='A' && string2.toString().split('').join()<='Z')
{
    if(string1.toLowerCase().split('').sort().join('').trim()===string2.toLowerCase().split('').sort().join('').trim()) //check if the given strings are anagrams or not
    {
        console.log("String is an anagram!!");
    }
    else
    {
        console.log("String is not an anagram!!");
    }
}
else
{
        console.log("Please enter a valid string!!");
}
},

/************************************prime number*************************************/
/**
* @description Program for demonstrating logic for prime number
* @author Sheetal Chaudhari
* @version 1.29.1
* @since 23/12/2018
*/
primeNumber() 
{
            var primeNumbers = " ";
            for (var i = 1; i < 1000; i++) 
            {
                var counter = 0;
                for (var num = i; num >= 1; num--) 
                {
                    if (i % num == 0) 
                    {
                        counter += 1;
                    }
                }
                if (counter == 2) 
                {
                    //Appended the Prime number to the String
                    primeNumbers = primeNumbers + i + " ";
                }
            }
            console.log('')
            console.log("Prime numbers from 1 to 1000 are :");

            console.log(primeNumbers);
            
},
/**************************tempreture conversion**************************************/

        /**
        * Aim: Program for demonstrating logic for tempreture conversion
        * @author Sheetal Chaudhari
        * @version 1.29.1
        * @since 23/12/2018
        */

        tempreture: function (celsius, fahrenheit) 
        {
            //celsius to fahrenheit conversion

            var ctemp = celsius;
            var ctoFahr = ctemp * 9 / 5 + 32;
            var message = ctemp + '\xB0C is ' + ctoFahr + ' \xB0F.';//degree (°) is \xB0
            console.log(message);

            //fahrenheit to celsius conversion    
            var ftemp = fahrenheit;
            var ftoCel = (ftemp - 32) * 5 / 9;
            var message = ftemp + '\xB0F is ' + ftoCel + '\xB0C.';
            console.log(message);
        },

/*******************************make payments************************************/
        /**
        * Aim: Program for demonstrating logic for make payments
        * @author Sheetal Chaudhari
        * @version 1.29.1
        * @since 24/12/2018
        */
        monthlyPayment: function (principle, Percent, years) 
        {
            var payment, r, n;
            r = Percent / (12 * 100);
            n = 12 * years;
            payment = ((principle * r) / (1 - Math.pow((1 + r), (-n))));//formula to calculate payment
            console.log("The monthly payment is " + payment);
        },


/*************************day of week*****************************************************/

        /**
        * Aim: Program for demonstrating logic for day of week
        * @author Sheetal Chaudhari
        * @version 1.29.1
        * @since 25/12/2018
        */
        dayOfWeek(m, d, y) 
        {
            var y = parseInt(y);
            var m = parseInt(m);
            var d = parseInt(d);


            var y0 = y - Math.floor((14 - m) / 12);

            var x = y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400);

            var m0 = m + 12 * Math.floor((14 - m) / 12) - 2;

            var d0 = (d + x + Math.floor(31 * m0 / 12)) % 7;

            d0 = parseInt(d0);

            console.log(d0);

            switch (d0) 
            {
                case 0: console.log('Sunday');
                    break;
                case 1: console.log('Monday');
                    break;
                case 2: console.log('Tuesday');
                    break;
                case 3: console.log('Wednesday');
                    break;
                case 4: console.log('Thursday');
                    break;
                case 5: console.log('Friday');
                    break;
                case 6: console.log('Saturday');
                    break;
                default: break;
            }
            return d0;
        },

/*********************************Epsilon Number***************************************/

        /**
         * *@description Calculate the epsilon number
           *@param number holds the input to calculate epsilon number
           *@author Sheetal Chaudhari
           *@version 1.29.1
           *@since 26/12/2018
         */

        sqrt(number) 
        {
            var string=number;
            if(string.toString().split('').join()>='a' && string.toString().split('').join()<='z')
            {
                            console.log("Enter number not a string!");
            }
            else
            {
            var c;
            var epsilon = 1e-15; // relative error tolerance
            var t = number; // estimate of the square root of c
            // repeatedly apply Newton update step until desired precision is achieved
            while (Math.abs(t - number / t) > epsilon * t) 
            {
                t = (number / t + t) / 2.0;
            }
            // print out the estimate of the square root of c
            console.log(t);
            }
        },

/***********************************vanding machine*******************************************/
/**
         * @description Calculate the vanding machine
         * @param number holds the input to calculate vanding machine
         * *@author Sheetal Chaudhari
         * *@version v1.30.0
         * *@since 24/12/2018
         */

        vendingMachine: function (amount) 
        {
            /**
            * @param amount holds the change to return
            */
            var count = 0;
            choice = 1;
            var arr = [1000, 500, 100, 50, 10, 5, 2, 1];
            for (i = 0; i < arr.length; i++) 
            {
                if (amount / arr[i] >= 1)//case 1 to print 1000 notes
                {
                    var result = Math.floor(amount / arr[i]);
                    console.log("Number of " + arr[i] + " rs note are : " + result);
                    amount = amount - result * arr[i];
                    count = count + result;
                }
            }
            if (amount > 0)
                this.vendingMachine(amount);
        },

/******************************insertion sort*****************************************/
/**
* @description Insertion sort
* @param arr holds the array strings to be passed to insertion sort
* @author Sheetal Chaudhari
* @since 26/12/2018
*/
insertionSort()
{
        
       var str="";
       var temp;
       var fileStream = require('fs');

       /*UTF stands for Unicode Transformation Format. The '8' means it uses 
       8-bit blocks to represent a character.*/
       var f = fileStream.readFileSync('insertionSortInt','utf8');
       console.log('integers are: ',(f));

       var arr=new Array();
       var n=f.length; 
       var arr = f;
       arr=f.split(",",n);  
        
        //check if the given elements are numbers

         if(arr.toString().split('').join()>='0' && arr.toString().split('').join()<='9') 
        {
            for (var i = 1 ; i < n; i++) 
            {
                for(var j = 0; j < i ;j++)
                { 
                    //check if the element is the first element and check if the
                    
                    if(arr[i]<arr[j]) 
                    {
                        //current element is lesser than the previous element
                        temp = arr[j];
                        arr[j]   = arr[i];
                        // swap the elements if condition satisfies
                        arr[i] = temp;
                    }
                }
            }
            console.log("The sorted array is: "+arr);
        }
        else
        {
            console.log("Please enter a Integer value!!");
        }
},

/**************************Binary Search for integers*****************************************/

/**
* @description Read the array from file and apply Binary Search for integers
* @param arr holds the array strings to be passed to insertion sort
* @author Sheetal Chaudhari
* @since 26/12/2018
*/

binarySearchOfInteger(number)
{
       //Read in a list of words from File
        
       var str="";
       var fileStream = require('fs');
       /*UTF stands for Unicode Transformation Format. The '8' means it uses 
       8-bit blocks to represent a character.*/
       var f = fileStream.readFileSync('integer','utf8');
       console.log('integers are: ',(f));
   
       var s = f;
       var length = f.length;
       var check = "";
       var arrOfStr = [];
       arrOfStr = s.split(",", length); 
       

        // search the word with binary search.
        
        var first = 0;
        var last = arrOfStr.length;
        var mid  =  (first + last)/2;
        
        //loop for search words upto mid point.
        
        
        for(var i = 0 ; i <= mid ; i++) 
        {
            if(number === arrOfStr[i]) 
            {
                check = arrOfStr[i];
            }
        }
        
        //loop for search word after mid point.
        
        for(var i = mid ; i < last ; i++) 
        {
            if(number === arrOfStr[i]) 
            {
                check = arrOfStr[i];
            }
        }
        
        if(number === check) 
        {
            console.log('yes, number is found');
        }
        else 
        {
            console.log('number is not found');
        }       
},

/*********************************bubble sort for string*********************************/

/**
 * @description Bubble sort for strings
 * @author Sheetal Chaudhari
 * @since 27/12/2018
 * @param arr holds the array strings to be passed to bubble sort
 */
    bubbleSortString:function()
    {
       
       var str="";
       var fileStream = require('fs');
       /*UTF stands for Unicode Transformation Format. The '8' means it uses 
       8-bit blocks to represent a character.*/
       var f = fileStream.readFileSync('string','utf8');
       console.log('strings are: ',(f));
       var n=f.length;
       var arr=f;
       arr=f.split(",",n);

        if(arr.toString().split('').join()>='a' && arr.toString().split('').join()<='z' || arr.toString().split('').join()>='A' && arr.toString().split('').join()<='Z')// check if the input is a string
        {
            var i,j;
            for(i=0;i<n-1;i++)
            {
                for(j=0;j<n;j++)
                {
                    if(arr[j]>arr[j+1])
                  {
                    var temp;
                    temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp; //swap elements if the condition satisfies
                  }
                }
            }
            console.log("The sorted array is: "+arr);
        }
        else
        {
            console.log("Please enter a string!!");
        }
    },

/**********************************To Binary*************************************************/
/**
 * @description Convert number decimal to binary
 * @author Sheetal Chaudhari
 * @since 27/12/2018
 * @param number holds the number to be converted to binary
*/

toBinary:function(number)
{
    var i;
    var arr=new Array(4);
    arr.push();
    if(number>0)
    {
        for(i=0;number>0;i++)
        {
            // find out if the number holds a reminder when divided by two and store it in an array
            arr[i]=Math.floor(number%2); 
            //update the value of number for the next iteration
            number = Math.floor(number/2); 
        }
        //reverse the array and print the output
        console.log(String(arr.reverse()).replace(/\,/g," ")); 
    }
    else
    {
       console.log("Please enter a positive number!!");
    }
},

/************************************Guess NUmber****************************************/
 /**
 * @description Guess the number
 * @author Sheetal Chaudhari
 * @since 27/12/2018
 * @param number holds the number to give a range in between which the player needs to choose a number
 */

isPower(num) 
{
    if (num == 0)
    return false;
    while (num != 1) 
    {
        if (num % 2 != 0) 
        {
            return false;
        }
        num = num / 2;
    }
    return true;
},

search(low, high) 
{
    var readline=require('readline-sync');

    if ((high - low) == 1) 
    {
    return low;
    }

    var mid = low + Math.floor((high - low) / 2);
    console.log("Is it less than " + mid + " ?");
    
    var ans = readline.question("If YES enter 1 else 0 ");
    console.log(ans);
    if (ans == '1') 
    {
    return this.search(low, mid);
    }
    else 
    {
    return this.search(mid, high);
    }
},

/***********************************PAP*******************************************/

/**
 * @description Take a range of 0 ­ 1000 Numbers and find the Prime numbers
 * @author Sheetal Chaudhari
 * @since 27/12/2018
 * @param start holds the starting range of prime numbers the user wants to retrieve
 * @param end holds the ending range of prime numbers the user wants to retrieve
 */

primeNumbers(start,end)
{
        var count,start,end,arr=[],s1=[],s2=[];
        if(start>0 && end<=1000) // checks for the range of numbers to be in between 0-1000
        {
          for(var i=start;i<=end;i++) //starts looping from the starting range of numbers given by the user
          {
              count=0;
              var curr=i;
              for(var j=1;j<=curr;j++) //looping condition to check for proper division of numbers
              {
                if(curr%j==0)
                {
                    count++; //increament count if the number is properly divisible
                }
              }
              if(count==2) //count will be equal to two if the number is a prime number
              {
                  arr.push(curr); //push the prime numbers into an array
              }
          }
            console.log("Prime numbers are:  " +arr);

            //call palindrome function to apply on prime number array
            var s1=this.palindrome(arr); 
            console.log(" ");
            console.log("The palindromes are: "+s1);

            //call anagram function to apply on palindrome number array
             this.anagram(arr); 
            //console.log("Prime palindrome anagrams are: "+s2);
        }
        else
        {
            console.log("Please enter a value between 0-1000");
        }
},    

 palindrome: function(arr)
{
    var array=[];
    //loop to traverse the entire array
    for(var i=0;i<arr.length;i++) 
    {
       //convert the array element into integer element
       var m1=''+parseInt(arr[i]); 

       // reverse the given string and compare it with the original string
       if(m1===m1.split("").reverse().join("")) 
       {    
           //push the palindrome numbers into a different array
           array.push(m1); 
       }
    }
    // returns the array consisting of prime palindromes
    return array; 
},

/*
*Two numbers are anagrams of each other if they can both be formed by rearranging 
*the same combination of digits
*/

anagram:function(arr)
{
     for(var i = 0; i <= arr.length; i++)
    {
        for(var j =i+1; j <= arr.length; j++)
        {
            var arr1=[];
            //parse each element and sort in ascending order 

            var s1 = "" + parseInt(arr[i]);
            var s2 = "" + parseInt(arr[j]);
           
            s1 = s1.split('').sort();       
            s2 = s2.split('').sort();    

            //joins the specified path string segments 
            if(s1.join() === s2.join())  
            {
                console.log("The two anagrams are : " + arr[i] + " , " + arr[j]);
                // stores the result in array arr1
                arr1.push(arr[i]); 
            }
        }
    }
},

/**************************Question To Find String Using Binary Search****************************/
/**
 * @description Question to find String Using Binary Searche
 * @author Sheetal Chaudhari
 * @since 27/12/2018
 * */

binarySearchOfString: function(string)
{
       //Read in a list of words from File
        
       var str="";
       var fileStream = require('fs');

       /*UTF stands for Unicode Transformation Format. The '8' means it uses 
       8-bit blocks to represent a character.*/
       var f = fileStream.readFileSync('string','utf8');
       console.log('strings are: ',(f));
   
       var s = f;
       var length = f.length;
       var check = "";
       var arrOfStr = [];
       arrOfStr = s.split(",", length); 
       

        // search the word with binary search.
        
        var first = 0;
        var last = arrOfStr.length;
        var mid  = (first + last)/2;
        
        //loop for search words upto mid point.
        
        
        for(var i = 0 ; i <= mid ; i++) 
        {
            if(string === arrOfStr[i]) 
            {
                check = arrOfStr[i];
            }
        }
        
        //loop for search word after mid point.
        
        for(var i = mid ; i < last ; i++) 
        {
            if(string === arrOfStr[i]) 
            {
                check = arrOfStr[i];
            }
        }
        
        if(string === check) 
        {
            console.log('yes, string is found');
        }
        else 
        {
            console.log('string is not found');
        }       
},

/*******************************Swap Nibble *******************************************/

/**
 * @description program to convert decimal number to binary number and Swap Nibble
 * @author Sheetal Chaudhari
 * @since 27/12/2018
 * */
 swapNibble(num) 
 {
    var str = "";
    if(num!=0)
    {
        while (num > 0.99) 
        {
            var a = Math.floor(num % 2);
            str = (a + str);
            num = num / 2;
        }
       console.log(str);
       //condition for checking 8 bit
       while (str.length < 8) 
      {
        str = '0' + str; // if not the add upto required bit.
      }
      //A nibble is a four-bit aggregation, or half an octet.
      console.log("nibble", str);

      var a = str.substring(0, 4); //First nibble
      var b = str.substring(4, 8); // second nibble

      console.log("first nibble", a);
      console.log("second nibble", b);

      var res = b + a; // swaping of nibbles
      console.log("after the nibble swap", res);
      var rs = this.binaryToDecimal(res); // call this method to get decimal value
      console.log(rs);
    }
    else
    {
        console.log("Enter valid decimal number");
    }
  },
    
/*
*@purpose:to convert the binary value to the decimal
*/
binaryToDecimal(res) 
{
    var sum = 0;
    for (let i = 0; i < res.length; i++) 
    {
        if (res[res.length - (i + 1)] === '1') 
        {
            sum = sum + 2 ** i;
        }
    }
    return sum;
    
},

/*******************************Bubble Sort for Integer***************************************/

 /**
* @description Program for Bubble sort for arrenging ineteger array
* @author Sheetal Chaudhari
* @since 27/12/2018
* @param arr holds the array strings to be passed to bubble sort
* 
*/

bubbleSortInt()
{
    var str="";
    var fileStream = require('fs');
    /*UTF stands for Unicode Transformation Format. The '8' means it uses 
    8-bit blocks to represent a character.*/
    var f = fileStream.readFileSync('bubbleSortInt','utf8');
    console.log('integers are: ',(f));
        
    var arr = new Array();
    var n= f.length;

    arr = f.split(",",n);
    //arr=f;
    console.log("Array length is" +n);
    var temp,stop;
    
    //check if the input is a number
    if(arr.toString().split('').join()>='0' && arr.toString().split('').join()<='9')
    {
        var i,j;
        for(i=0;i<n-1;i++)
        {
         for(j=0;j<n;j++)
         {
            if(arr[j]>arr[j+1])
            {
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp; //swap elements if the condition satisfies
            }
         }
        }
        console.log("The sorted array is: "+arr);
    }
    else
    {
        console.log("Please enter a Integer value!!");
    }
},
         
/***********************************Merge Sort********************************************/

/**
* @description Program for merge sort ,sorting a string
* @author Sheetal Chaudhari
* @since 27/12/2018
* @param res holds the array strings to be passed to mergeSort
*/

fileCall() 
{
    var fileStream = require('fs');
    var f = fileStream.readFileSync('File.txt', 'utf8');
    var arr = f.split(' ');
    return arr;
},

mergeSort(res) 
{
    var n = res.length;

    //if size is less than 2 return that.
    if (n < 2) 
    {
        return;
    }

    //call mid value
    var mid = Math.floor(n / 2);
    var left = [mid];
    var right = [n - mid];

    //store elements in left array which are present before the mid
    for (let i = 0; i < mid; i++) 
    {
        left[i] = res[i];
    }
    
    //store elements in left array which are present before the mid
    for (let j = mid; j < n; j++) 
    {
        right[j - mid] = res[j];
    }

    //call mergesort for left halve
    this.mergeSort(left);

    //call mergesort for left halve
    this.mergeSort(right);

    this.merge(left, right, res);
},

merge(arr, brr, crr) 
{
    var i = 0; var j = 0;
    var k = 0;

    //merge elements into crr[]
    while (i < arr.length && j < brr.length) 
    {
        if (arr[i] <= brr[j]) 
        {
            crr[k] = arr[i];
            i++;
        }
        else    
        {
            crr[k] = brr[j];
            j++;
        }
        k++;
    }

    // if arr[] is greater than brr[], push all arr[] into crr[]
    while (i < arr.length) 
    {
        crr[k] = arr[i];
        i++;
        k++;
    }

    // if arr[] is lesser than brr[], push all brr[] into crr[]
    while (j < brr.length) 
    {
        crr[k] = brr[j];
        j++;
        k++;
    }
    return crr;
},

/*********************************utility Class static method************************************/

/**
* @description Program for merge sort ,sorting a string
* @author Sheetal Chaudhari
* @since 27/12/2018
* @param res holds the array strings to be passed to mergeSort
*/

binarySearch(res, low, high, ele)
{
    var mid;
    while (high >= low) 
    {
        // calculate mid value
        mid = Math.floor(low + (high - low) / 2);
        // check mid with ele
        if (res[mid] == ele) 
        {
            return mid;
        }
        //check mid with ele
        if (res[mid] > ele) 
        {
            //assign decremented mid to high
            high = mid - 1;
        }
        else 
        {
        //assign inremented mid to low
            low = mid + 1;
        }
    }
    // if not found return -1
    return -1;
},


bubbleSort(res)
{
    // compare first and next elements in array and arrange
    for (let i = 0; i < res.length; i++) 
    {
        for (let j = i + 1; j < res.length; j++) 
        {
            if (res[i] > res[j]) 
            {
                var temp = res[i];
                res[i] = res[j];
                res[j] = temp;
            }
        }   
    }
    return res;
},
    
insertion(res)
{
    for (let i = 1; i < res.length; i++) 
    {
        var point = res[i];
        var j = i - 1;
        while (j >= 0 && res[j] > point) 
        {
            res[j + 1] = res[j];
            j = j - 1;
        }
        res[j + 1] = point;
    }
    return res;
},
   
bubbleString(str) 
{
    var ch = str;
    for (let i = 0; i < ch.length; i++) 
    {
        for (let j = 0; j < ch.length; j++) 
        {
            if (ch[j] > ch[j + 1]) 
            {
                var temp = ch[j];
                ch[j] = ch[j + 1];
                ch[j + 1] = temp;
            }
        }
    }
    return ch;
},

insertionString(str)
{
    var ch = str;
    for (let i = 0; i < ch.length; i++) 
    {
        var point = ch[i];
        var j = i - 1;
        while (j >= 0 && ch[j] > point) 
        {
            ch[j + 1] = ch[j];
            j = j - 1;
        }
        ch[j + 1] = point;
    }
    return ch;
},
    
binaryString(res, low, high, ele) 
{
    var mid;
    
    while (high >= low) 
    {
        mid = Math.floor(low + (high - low) / 2);
        if (res[mid] == ele) 
        {
            return mid;
        }
        else if (res[mid] > ele) 
        {
            high = mid - 1;
        }
        else 
        {
            low = mid + 1;
        }
    }
    return -1;
},

//time Elappsed function for calculating time required for all sorting algorithms

timeElapsed() 
{
    var arr = [];
    var start = 0, stop = 0;

    arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    start = this.getNanoSec();
    this.binarySearch(arr);
    stop = this.getNanoSec();
    var binarySearch = stop - start;
    console.log("Time required for binarySearch ", binarySearch, " nanosec");
    
    var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    start = this.getNanoSec();
    this.bubbleSort(arr);
    stop = this.getNanoSec();
    var bubbleSort = stop - start;
    console.log("Time required for bubbleSort ", bubbleSort, "nanosec");
    
    var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    start = this.getNanoSec();
    this.insertion(arr);
    stop = this.getNanoSec();
    var insertionSort = stop - start;
    console.log("Time required for insertionsort ", insertionSort, " nanoseconds");
    
    var arr = ["abc", "xyz", "bc", "bdc", "aaa"];
    start = this.getNanoSec();
    this.bubbleString(arr);
    stop = this.getNanoSec();
    var bubbleString = stop - start;
    console.log("Time required for bubblesort for String ", bubbleString, " nanosecond");

    var arr = ["abc", "xyz", "bc", "bdc", "aaa"];
    start = this.getNanoSec();
    this.insertionString(arr);
    stop = this.getNanoSec();
    var insertion = stop - start;
    console.log("Time required for insertion sort for String ", insertion, " nanosecond");
        
    var arr = ["abc", "xyz", "bc", "bdc", "aaa"];
    start = this.getNanoSec();
    this.binaryString(arr);
    stop = this.getNanoSec();
    var binary = stop - start;
    console.log("Time required for bubble sort for String ", binary, " nanosecond");
    
    // create the list and add all values and their type
    var masterList =

    [   { type: "binary search ", time: binarySearch }, 
        { type: "bubble sort ", time: bubbleSort },
        { type: "insertion sort ", time: insertionSort }, 
        { type: "binary for String ", time: binary }, 
        { type: "bubble for String ", time: bubbleString },
        { type: "insertion for String", time: insertion }
    ];
       
    //sort the list in decending order
    masterList.sort(function (a, b) { return b.time - a.time });
        
        console.log("the time in descending order is ");
        console.log("Time for " + masterList[0].type + " is " + masterList[0].time);
        console.log("Time for " + masterList[1].type + " is " + masterList[1].time);
        console.log("Time for " + masterList[2].type + " is " + masterList[2].time);
        console.log("Time for " + masterList[3].type + " is " + masterList[3].time);
        console.log("Time for " + masterList[4].type + " is " + masterList[4].time);
        console.log("Time for " + masterList[5].type + " is " + masterList[5].time);
        
        },
        
    // method to calculate the time in nanoseconds and value.
    getNanoSec() 
    {
        var hrTime = process.hrtime();
        return hrTime[0] * 1000000000 + hrTime[1];
    },

/*****************************************input read*********************************************/

inputread()
{
        var indices = read.question("");
        return indices;
    
},

/*********************************************************************************************/

                               
                            //Data Structure//


/******************************prime anagram*************************************************/


/**
 * @description program for checking prime numbers for anagrams 
 * @author Sheetal Chaudhari
 * @since 02/01/2019
 **/
findPrime(s1, s2) 
{
    var count = 0, flag = 0, k = 0;
    var prime = [];

    for (var i = s1; i <= s2; i++) 
    {
        for (var j = 2; j < i; j++) 
        {
            if (i % j == 0) 
            {
                flag = 0;
                count++;
                break;
            }
            else 
            {
                flag = 1;
            }
        }
        if (flag == 1) 
        {
            prime[k++] = i;
        }
    }
    return prime;
},

findAnaPrime(ii, jj) 
{
    var primes = this.findPrime(ii, jj);
    var n = primes.length;
    var anaPrimes = [];
    var h = 0;

    for (let i = 0; i < primes.length - 1; i++) 
    {
        for (let j = i + 1; j < primes.length - 1; j++) 
        {
            if (this.checkAnagram2(primes[i], primes[j])) 
            {
                anaPrimes[h++] = primes[i];
                anaPrimes[h++] = primes[j];
            }

        }
    }
    return anaPrimes;
},


checkAnagram2(str1, str2) 
{
    let unsortedStr1 = "" + str1;
    let unsortedStr2 = "" + str2;
    if (unsortedStr1.length != unsortedStr2.length) 
    {
        return false;
    }
    sortedStr1 = this.sort1(unsortedStr1);
    sortedStr2 = this.sort1(unsortedStr2);
    let b = this.check(sortedStr1, sortedStr2);
    
    if (b == true) 
    {
        return true;
    }
    else 
    {
        return false;
    }
},
    

sort1(str) 
{
    let ch = str.split('');
    for (let i = 0; i < str.length; i++) 
    {
        for (let j = i + 1; j < str.length; j++) 
        {
            if (ch[i] > ch[j]) 
            {
                let t = ch[i];
                ch[i] = ch[j];
                ch[j] = t;
            }
        }
    }
    var sortedStr = "";

    for (let i = 0; i < ch.length; i++) 
    {
        sortedStr += ch[i];
    }
    return sortedStr;
},

check(s1, s2) 
{
        for (let i = 0; i < s1.length; i++) 
        {
            if (s1.charAt(i) != s2.charAt(i)) 
            {
                return false;
            }
        }
    return true;
},
    

/***************************************calender******************************************/

/***
 * @description program for demonsrtating calender
 * @author Sheetal Chaudhari
 * @since 02/01/2019
 ***/

day( month, day, year) 
{
    let y = year - Math.floor((14 - month) / 12);
    let  x = Math.floor(y + y/4 - y/100 + y/400);
     let m = month + Math.floor(12 * ((14 - month) / 12) - 2);
     let d = Math.floor((day + x + (31*m)/12) % 7);
    return d;
},



days( month, day, year) 
{
    let y = year - Math.floor((14 - month) / 12);
    let  x = Math.floor(y + y/4 - y/100 + y/400);
     let m = month + Math.floor(12 * ((14 - month) / 12) - 2);
     let d = Math.floor((day + x + (31*m)/12) % 7);
    return d;
},

/******************************************************************************************/
}
