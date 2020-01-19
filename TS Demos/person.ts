export class Person { 
    //field 
    fullName:string;
    gender:string;
    email:string; 
     //constructor 
    constructor(fullName:string,gender:string,email:string)
     { 
       this.fullName = fullName; 
       this.gender=gender;
       this.email=email;
    }  
    //function 
    ListDetails():void 
    { 
       console.log("Name -  :   "+this.fullName);
       console.log("Gender -  :   "+this.gender);
       console.log("Email -  :   "+this.email);
    } 
   
 }
 
 var perObj = new Person("Sasha","female","sara@hi.com"); 
 perObj.ListDetails();
 