
/*
This is called an anonymous function expression, because function()
… has no name identifier on it. Function expressions can be anonymous,
but function declarations cannot omit the name—that would
be illegal JS grammar.
*/
//Anonymous Function
setTimeout(function(){
    console.log('I have waited')
},1000);

//inline function expression
setTimeout( function timeoutHandler(){ // <-- Look, I have a
    // name!
    console.log( "I waited 1 second!" );
    }, 1000 );
//IIFE

/*
Now that we have a function as an expression by virtue of wrapping
it in a ( ) pair, we can execute that function by adding another () on
the end, like (function foo(){ .. })(). The first enclosing ( ) pair
makes the function an expression, and the second () executes the
function.
*/
var a = 2;
(function foo(){
var a = 3;
console.log( a ); // 3
})();
console.log( a ); // 2


for (let i=0; i<10; i++) {
    console.log( i );
    }

console.log(l);
var l=2;

function calculateAge(yearOfBirth){
    var age =2016-yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
console.log(ageJohn); //26


//function can call another function by a variable call   

function yearsUntilRetirement(name,year){
    var age = calculateAge(year);
    var retirement = 65 -age;
    retirement >0 ?
        console.log(name + ' retires in ' + retirement + ' years.' ):
   console.log(name + ' has already retired'); //47
    

}
//A function does not always  has to return anything
yearsUntilRetirement('John',1998);  //John retires in 47 years.
yearsUntilRetirement('Mary',1948);  //Maryhas already retired

//function statement
//Just perform an action
 function some(par){
     //code
 }

 
//function expression
//An expression produces a value and an outcome
var some=function some(par){
    //code
}

//do something 
if(x ===5){
    //do something
}
