/***********************************************************************************
 *  @Purpose        : This programme is used to manage a list of Doctors associated 
 *                    with the Clinique.
 *  @file           : stock.js
 *  @author         : Sheetal Chaudhari
 *  @version        : 1.30.1
 *  @since          : 08-01-2019
 **********************************************************************************/

 var s = require('fs');
 var data= require('./clinique.json');
 var arrayOfObject = JSON.parse(data);

 console.log("Data from json file is "+arrayOfObject);
 var count;

 for(var i=0;i<=Patient.Name;i++)
 {
    count+=1;
 }

 if(count>=5)
 {
    console.log("Limit excceded");
 }
 else
 {

 }

 function search()
 {
     var search;
     serch=prompt("Enter Doctors detailed to search ");
     for(var i=0;i<=Doctor.lenght;i++)
     {
         if(search==Doctor[i].Name || search ==Doctor[i].Id || search == Doctor[i].specialization|| search == Doctor[i].Avaibility)
        {
            console.log("Doctor found!!");
        }
     }

     var search1;
     serch1=prompt("Enter Patient detailed to search ");
     for(var i=0;i<=Patient.lenght;i++)
     {
         if(search1==Patient[i].Name || search1 ==Patient[i].Id || search1 == Patient[i].MobileNo|| search1 == Patient[i].Avaibility)
        {
            console.log("Patient found!!");
        }
     }
 }

 function print()
 {

 }

 function appointment()
 {

 }
