/*if and else
------------------------------
if (age<20){
    console('John is a teenager');
}
else if (age>= 20 && age < 30){
    console.log('John is a man');
}
else{
    console.log('John is a man.');
}
-----------------------------------
*/
/*
 switch statement
--------------------------------------- 
var job = "";     var ="cop" does the samething,we make it empty variable bcos of the prompt function
job = prompt("What does john do");
switch (job) {
    case "teacher":
        console.log("John teaches kids.");
        break;
    case "driver":
        console.log("John drives a cab in Lagos");
        break;
    case "cop":
        console.log("John helps fight.");
        break;
    default:
        console.log("John has something");
}
----------------------------------------------- 
*/
/*
var johnHeight = 17;
var johnAge = 76;
var AkinHeight = 15;
var AkinAge = 78;
var johnWins = johnHeight - AkinHeight;
var AkinWins = AkinHeight - johnHeight;
if (johnHeight > AkinHeight) {
    console.log
        ('John wins by ' + johnWins);
}
else if (AkinHeight > johnHeight) {
    console.log
        ('Akin wins by ' + AkinWins);
}
*/

/*Challege 1
    var Johnage = 16;
var Johnheight = 20;
 
var Seunage = 16;
var Seunheight = 60;

var Lanreage = 90;
var Lanreheight = 60;

var sumjohn = Johnage + Johnheight;
var sumseun = Seunage + Seunheight;
var sumlanre = Lanreage + Lanreheight;


 
if (sumjohn > sumseun){
console.log("John is wins by " + sumjohn + " points");
}
else if (sumseun > sumjohn){
console.log("Seun is wins " + sumseun + " points");
}
else if (sumjohn === sumseun ) {
console.log("draw");
} 
if (sumlanre >sumjohn && sumlanre >sumseun){
    console.log("Yes Lanre leads " + sumlanre + " points");
}
else if(sumseun >sumjohn && sumseun >sumlanre){
    console.log("Seun leads " + sumSeun + " points");
}
else if(sumjohn >sumseun && sumjohn >sumlanre){
    console.log("John leads " + sumJohn + " points");
}
else {
    console.log("no winner");
}*/

//Challenge 2

//isEven function
//return true if even
//return false if not even
/*function isEven(num){
   if(num % 2 === 0) {
       return true;
   }
   else{
       return false
   }
}
*/
//another method
/*function isEven(num) {
    return (num % 0 === 2)
}*/
//isEven(4) ====> true
//isEven (5) ====> false

//function to check factorial
/*function factorial(num){
    //declare variable to a result
    var result =1;
    for(var i=1; i<=num; i++){
     result = i * result
           // OR
       // result *= i;
    }
    return result;
}*/
// OR
/*function factorial(num){
    if (num ===0 ){
        return 1;
    }
    var result = num
for (var i =num-1; i >= 1; i--){
     result =i * result 
}
return result;
}*/

//changing character using function

/* function kebabToSnake(str){
     //replace all - with _
 var newStr = str.replace(/-/g ,"_");
 return newStr; 
 } */

//ARRAY
//  --------------------------
/* indexOf('') => This is use to output
                 indicated array*/
// john = ['John', 'Smith', 1998, 'teacher', false];
//console.log(john.indexOf('Smith'));
//==>1
/*we can use indexOf
to find if certain
element is in an Array of not */
// if (john.indexOf('designer') === -1) {
//     console.log('John is not a teacher');
// }
//===>John is not a teacher

/* -1 means false when use with
    === in indexOf
    1 means true
*/
//--------------------------------------------
// O*B*J*E*C*T
/*
----------------------------------------
To create a new object use new Object();*/
//var xyz = new Object();
//FOR LOOP
//To loop through an array
//var names = ['John', 'Akin', 'Seyi', 'Tosin'];
/*for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
==>>>John Akin Seyi Tosin
To loop with reversing the array
*/
/*
for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}
*/
/*for (var i = 1; i <= 5; i++) {
    console.log(i);
    if (i === 3) {
        break;
    }
}
for (var i = 1; i <= 5; i++) {
  
    if (i === 3) {
        continue;
    }
    console.log(i);
}*/

/*var byage=[1998,1937,1983,1988,1955];
var newage =[];

for(var i=0; i<byage.length; i++){

}*/

/*
----------------------------------------------------------------------------------------
                             //First Class Functions
-----------------------------------------------------------------------------------------
var years = [1990, 1965, 1937, 2005, 1998];
//arr is the year array 
//fn is the function which does the calculation
//What is inside the curly braces{} is what the function does
function arrayCalc(arr, fn) {
    //We will loop through an array an return a result
    //Create an empty new array which is the one we going to fill
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        //Inside loop we will create a function that we can pass into this function
        //Push something into the empty array
        //What are going to push into the array? it will be the result or fn Function
        //Then pas the current element of the array into the function
        arrRes.push(fn(arr[i]));
    }
    return arrRes;

}
//Let write our fn function that can be later used
//We wiil write a function that does a single task,Such function will be called "callback" function
//CallBack Functions are function we passed into function and then call them back
//Function to calculateAge ----->callback function
function calculateAge(el) {
    return 2016 - el;
}
var ages = arrayCalc(years, calculateAge);
console.log(ages);

//Function to determine if someone is of FULLAGE
function isFullAge(el) {
    return el >= 18;
}
var FullAges = arrayCalc(ages, isFullAge);
console.log(FullAges);
//Function to calculate maximum heart rate (that is the highest rate 
//measured in beats per minute that a person can reach when exercising)
//It is calculated based on the age of the person

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    }
    else {
        return -1;
    }
}
var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
------------------------------------------------------------------------------------------
*/

/*
                    ----------------------------------
//                      FUNCTION RETURNING FUNCTION
                    ----------------------------------
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');

        }
    }
    else if (job === 'teacher') {
        return function (name) {
            console.log('What subject did you teach, ' + name + '?');

        }
    }
    else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do?');

        }
    }
}
var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

//alternative
interviewQuestion('teacher')('Seyi');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Akin');
*/

/*
----------------------------------------------------------------
// IMMEDIATE INVOKED FUNCTION EXPRESSION (for variable privacy)
----------------------------------------------------------------

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

//alternative is to use IIFE
(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();
//we can not pass the varible outside
// the score because it is private
//We can also pass argument into the
//IIFE so that we can extend our function

(function(goodluck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
})(5);
//we can only call IIFE once
*/

/*function rotate(arr, d, n) {
    var v = 1
    while (v <= d)
        for (var x = 0; x < n; x++) {
            let temp = arr[0];
            for (var i = 0; i <= arr.length - 1; i++) {
                if (i > 0) {
                    arr[i - 1] = arr[i]

                }
                arr[arr.length - 1] = temp;
            }
            v++
        }
    console.log(arr);
}
rotate([1, 2, 3, 4, 5, 6], 2, 4); */

/*function palindrome(arr) {
    var len = arr.length
    for (var i = 0; i < len / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
palindrome('jesus');*/

/*
function combine() {
    var value1 = [21, 43, 1003];
    var value2 = [-5, -10, 23];
    var concatArray = value1.concat(value2);
    console.log(concatArray);
}
combine();
*/
/*function lockArr(a, b) {
    newArr = [];
    i, l = Math.max(a.length, b.length)
    for (var i = 0; i < l; i++) {
        if (i <= a.length - 1) {
            newArr.push(a[i])
        }
        if (i <= b.length - 1) {
            newArr.push(b[i])
        }
    }
    console.log(newArr)
}
lockArr([1, 2, 3, 4], [8, 7, 9, 5, 7]);

/*
//  ES6 Array
var ages = [12, 17, 8, 21, 14, 11];
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/

//LINKED LIST

/*
const list = {
    head: {
        data: "ade",
        next: {
            data: "wale",
            next: null
        }
    }
}
*/

/*
-----------------------------------------------------------
Linked list (how to add an Element to the head dynamically)
------------------------------------------------------------
*/

// const string = new String();
// let head = { data: string, next: null };
// function insert(value) {
//   let tmp = { data: string, next: null };
//   tmp.data = value;
//   tmp.next = null;

//   tmp.next = head.next;
//   head.next = tmp;
// }
// function contain(val) {}
// function remove(val){
//    if (!itr.)
// }
// insert("mango");
// insert("pear");
// insert("pawpaw");
// insert("cashew");
// insert("date");

// /*
// // log out data
// let itr = head;
// while (itr != null) {
//     console.log(itr);
//     itr = itr.next;
// }
// */
// function remove(val) {
//     let prev = null;
//     let itr = head;
//     if (itr != null && itr.data == val) {
//         head = itr.next;
//         return;
//     }
//     while (itr != null && itr.data != val) {
//         prev = itr;
//         itr = itr.next;
//     }
//     if (itr == null) {
//         return;
//     }
//     prev.next = itr.next;
// }
// remove("mango");
// console.log(head);

// function foo(obj) {
//     with (obj) {
//         a = 2;
//     }
// }
// var o1 = {
//     a: 3
// };
// var o2 = {
//     b: 3
// };
// foo(o1);

// //console.log(a);
// console.log(o1.a);

// const person = {
//     isHuman: false,
// };

// ////////////////////
// let obj = {};

// let key = prompt("What's the key?", "__proto__");
// obj[key] = "some value";

// console.log(obj[key]);
// function Student(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Student.prototype.say = function() {
//   console.log("Name is " + this.name);
// };

// function Circle(radius, pie) {
//   this.radius = radius;
//   this.pie = 3.14;
// }

// Circle.prototype.calculateArea = function() {
//   var area = this.pie * this.radius * this.radius;
//   console.log(`The area is ` + area);
// };
// Circle.prototype.calculateCircumference = function() {
//   var Circum = 2 * this.pie * this.radius;
//   console.log(`The circumference is ` + Circum);
// };

// var circle = new Circle(5);
// circle.calculateArea();
// circle.calculateCircumference();

// var array = [2, 3, 7, 43, 91];
// var odd = 0;
// for (var i = 0; i < array.length; i++) {
//   odd = array[i];
//   console.log(odd);
// }
//////////////////////////////////////////////////////
// var array = [2, 8, 3, 7, 43, 91];
// function findOdd(array) {
//   var odds = [];
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       odds.push(array[i]);
//     }
//   }
//   odds.reverse();
//   return odds;
// }
// console.log(findOdd(array));
//////////////////////////////////////////////////////
//var Vehicle = {
//   type: "General",
//   display: function() {
//     console.log(this.type);
//   }
// };
// var Car = Object.create(Vehicle);
// Car.type = "Car";
// Car.display();
// Vehicle.display();
//////////////////////////
// var map = new Map();
// var map = [[1, 2], [2, 3]];
// var exist = map.get(1);
//console.log("exist");

//................Arrow function...................\\
console.log("....................ES5 this......................");
//...constructor Person........//
function Person(name) {
  this.name = name;
}
Person.prototype.myFriends5 = function(friends) {
  var self = this;
  var arr = friends.map(function(el) {
    return self.name + " is friends with " + el;
  });
  console.log(arr);
};
var friends = ["Bob", "Jane", "Mark"];
new Person("John").myFriends5(friends);

console.log("....................ES5 bind......................");

function Person(name) {
  this.name = name;
}
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(
    function(el) {
      return this.name + " is friends with " + el;
    }.bind(this)
  );
  console.log(arr);
};

var friends = ["Bob", "Jane", "Mark"];
new Person("John").myFriends5(friends);

console.log("....................ES6 Arrow Function................");
function Person(name) {
  this.name = name;
}
Person.prototype.myFriends6 = function(friends) {
  var arr = friends.map(el => `${this.name}   is friends with  + ${el}`);
  console.log(arr);
};

var friends = ["Bob", "Jane", "Mark"];
new Person("Mike").myFriends6(friends);
