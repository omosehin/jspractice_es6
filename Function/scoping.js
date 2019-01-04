/*Scoping answer the the question "where can we access a certain variable or function? 
The only way to create a new scope is to write a new function

Lexical scoping:a function that is lexically within another 
function gets access to the scope of the outter function
and get access to the variables and function that the parent defines
*/
/*
.....................................
var a= 'Hello';                     .>>>>>>Global Scope [VOGlobal]
first();                Global scope.  //function declaration is possible because of hoisting 
function first(){                   .
    var b = 'Hi'; ................................>>>>>>First() scope   [VO1] + [VOGlobal]               
    second();                       .            .dues to lexical scoping this scope has access to all the variable and function the parent scope(globla scope) defines
    function second(){  local scope .            .      
        var c = 'Hey'; .....................................
        console.log(a+b+c);         .            .         .
    }                               .            .         .>>>>>>>>second () scope
}                                   .            .         .Due to scoping the local scope can look up the  parent scope to get the variables needed.This is called the scope chain
............................................................scope chsin does not work backward i.e the global scope do not have access to variable b and c        
*/
var a= 'Hello';                    
first();               
function first(){                   
    var b = 'Hi';       
    second();                                     
    function second(){                            
        var c = 'Hey';
        console.log(a+b+c);   //Hello Hi Hey       
    }                              
}   

//Execution is the order for which function are called while scope chain thee order the code are written

var a ='Hello';
first();

function first(){
    var b= 'Hii';
    second();

    function second(){
        var c = 'Hey';
        third()  //has access to third function because of scoping chain
    }          
}

function third(){
    var d= 'John';
   // console.log(c);  //ReferenceError: c is not defined
                   // but throws error bcos they are not in the execution scope 
                  //is different from the scope chain   
console .log(a+d)  //hello John  //same scoping chain
}