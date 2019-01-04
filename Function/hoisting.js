
console.log ('...........Hosting Function............')
calculateAge(1965);
function calculateAge(year){
    console.log(2016-year);  //51
}
//Function declaration can be hoisted

//Function Expression
//hoisting does not work for function expression
// retiment(1965)
var retiment = function(year){
    console.log(65-(2016-year)); //TypeError: retiment is not a function

}

//variables
//variable that dont have a value will be undefined
console.log(age); //undefined
var age =32;
console.log(age); //32

function foo(){
    console.log(age); //undefined
    var age = 65;
    console.log(age); // 65
    
}
foo();
console.log(age);  //32 global excution context