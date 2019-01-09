
/***********************************************************************************
 *  @Purpose        : This programme is used to manage a list of Doctors associated 
 *                    with the Clinique.
 *  @file           : stock.js
 *  @author         : Sheetal Chaudhari
 *  @version        : 1.30.1
 *  @since          : 08-01-2019
 **********************************************************************************/

var prompt=require('prompt-sync')();

var fs=require('fs');

//reding the clinique.json file
fs.readFile('./clinique.json','utf-8', function (err, data) 
{
    if (err) throw err
    
    //The JSON.parse() method parses a string and returns a JavaScript object
    var clinique = JSON.parse(data);

    do
    { 
    console.log("****Menue******");
    console.log("1.ADD Appointment\n2.PRINTLIST\n3.SEARCH\n4.EXIT");

    var option=prompt('Enter the option:');

    switch(parseInt(option))
    {
         case 1://adding appointment of the patient
                 console.log("*Doctors Available*");
                 console.log(clinique.Doctors);    

                 //asking user to enter patient info
                 var Name=prompt('Patient Name: ');
                 var ID=parseInt(Math.random()*1000);
                 var mobNo=prompt('Mobile Number: ');
                 var Age=prompt('Age: ');
                 var Appointed_To=prompt('whose appointment u want: ');
                 
                 //pushing patient information into Patient
                       clinique.Patients.push(
                            {
                                "Name":Name,
                                "ID":ID,
                                "mobNo":mobNo,
                                "Age":Age,
                                "Appointed_To":Appointed_To
                            })
                console.log("Appointment Added Successfully...");

                //wrting file
                fs.writeFile('./clinique.json', JSON.stringify(clinique),'utf-8',function(err) {
                if (err) throw err})
                break;
        
         case 2:    //printing clinique object
                    console.log(clinique); 
                    break;
         
         case 3:  console.log("****SEARCH LIST******");
                  console.log("1.Doctor\n2.Patient");
                  var option2=prompt('Enter Option: ');
                      
                  //serching for doctor
                  if(option2==1)
                  { 
                        console.log("Serching by-->");
                        console.log("1.Search by Name\n2.Search by ID\n3.Search by Specialization\n4.Search by Availability"); 
                        var option3=prompt('Enter option: ');
                        
                        //search by name
                        if(option3==1)
                        {
                            var i = prompt('Name: ');
                        
                            for(var key in clinique.Doctors)
                            {
                                if(clinique.Doctors[key].Name==i)
                                {
                                    console.log("****Doctor Info****");
                                    console.log(clinique.Doctors[key]);
                                }
                            }
                        }
                        //search by ID
                        else if(option3==2)
                        {
                            var i = prompt('ID: ');
                            for(var key in clinique.Doctors)
                            {
                                if(clinique.Doctors[key].ID==i)
                                {
                                console.log("****Doctor's Info****");
                                console.log(clinique.Doctors[key]);
                                }
                            }
                        }
                        //search by specialization
                        else if(option3==3)
                        {
                            var i = prompt('Specialization: ');
                            for(var key in clinique.Doctors)
                            {
                                if(clinique.Doctors[key].Specialization==i)
                                {
                                    console.log("****Doctor's Info****");
                                    console.log(clinique.Doctors[key]);
                                }
                            }
                        }
                        //search by availability
                        else if(option3==4)
                        {
                            var i = prompt('Availability: ');
                            for(var key in clinique.Doctors)
                            {
                                if(clinique.Doctors[key].Availability==i)
                                {
                                    console.log("****Doctor's Info****");
                                    console.log(clinique.Doctors[key]);
                                }
                            }
                        }
                    }

                    //serching patient if option is 2
                    if(option2==2)
                    { 
                        console.log("Serching by-->");
                        console.log("1.Search by Name\n2.Search by ID\n3.Search by mobNo\n4.Search by Age"); 
                        var option4=prompt('Enter option: ');
                        
                        //1.Search by Name
                        if(option4==1)
                        {
                            var i = prompt('Name: ');
                            for(var key in clinique.Patients)
                            {
                                if(clinique.Patients[key].Name==i)
                                {
                                    console.log("****Patients Info****");
                                    console.log(clinique.Patients[key]);
                                }
                            }
                        }

                        //2.Search by ID
                        else if(option4==2)
                        {
                            var i = prompt('ID: ');
                            for(var key in clinique.Patients)
                            {
                                if(clinique.Patients[key].ID==i)
                                {
                                    console.log("****Patients Info****");
                                    console.log(clinique.Patients[key]);
                                }
                            }
                        }
                        //3.Search by mobNo
                        else if(option4==3)
                        {
                            var i = prompt('mobNo: ');
                            for(var key in clinique.Patients)
                            {
                                if(clinique.Patients[key].mobNo==i)
                                {
                                    console.log("****Patients Info****");
                                    console.log(clinique.Patients[key]);
                                }
                            }
                        }
                        //4.Search by Age
                        else if(option4==4)
                        {
                            var i = prompt('Age: ');
                            for(var key in clinique.Patients)
                            {
                                if(clinique.Patients[key].Age==i)
                                {
                                    console.log("****Patients Info****");
                                    console.log(clinique.Patients[key]);
                                }
                            }
                        }
                  }
            break;
            case 4:
                   // process.exit();
            break;
    }
    }while(option!=4);
})
