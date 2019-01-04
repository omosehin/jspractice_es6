/*
'this' variable is a variable every execution context gets
it is stored in the execution context object
.REGULAR funtion call: this keywords points at the global object.
(the window object in the browser) default
.METHOD CALL: this points to the object that is calling the method

this keyword is not assigned a value until a function where it is defined is actually called

*/
// console.log (this); // {} global

// calculateAge (1985);

// function calculateAge(year){
//     console.log(2016-year);
//     console.log(this); //global //regular function call
// }

var john={
    name:'John',
    yearOfBirth:1990,
    calculateAge: function(){  //calculate is a method
        console.log(this);
        console.log(2016-this.yearOfBirth); //26
       /* function innerFunction(){ //regular function
            console.log(this); //back to the global window 
        }
        innerFunction();*/
    }
}
john.calculateAge()  //method call
                    //this keyword refers to the object
                    
/*
this is only assigned a value when there is a method call in an object
RULE: When a regular function code happens the default object is the window object
the function inside the method will point to the window object
*/

var mike={
    name:'Mike',
    yearOfBirth:1984
};
//to use the method of john fro minke we use methos borrowing
mike.calculateAge=john.calculateAge;
mike.calculateAge();