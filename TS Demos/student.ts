import {Person} from './person'

class Student extends Person { 
    qualification:string;
    constructor(fullName:string,gender:string,
       email:string, qual:string)
     {   //invoke base class constructor
                 super(fullName,gender,email);
                 this.qualification=qual;
 
      }
     ListDetails():void { 
       console.log("Name -  :   "+this.fullName);
       console.log("Gender -  :   "+this.gender);
       console.log("Email -  :   "+this.email);
       console.log("qualification -  :   "+this.qualification);
       } 
     }
 
     var stuObj = new Student("Sasha","female","sara@hi.com","Mtech"); 
 stuObj.ListDetails();