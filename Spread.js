
/* 
**Rest parameter: collects all remaining elements into an array.
**Spread operator: allows iterables( arrays / objects / strings )
to be expanded into single arguments/elements.

When ... is used in front of an array
it acts to “spread” it out into its individual values.
*/
console.log("...................Copying an array...............");
const arr = [1, 2, 3];
const arr2 = [...arr];

/*
This copies arr into arr2. Now we can do things on arr2 and 
any changes done to arr2 will not have any effect arr.
*/


console.log("...................spread and rest...............");
function foov(x, y, z) {
  console.log(x, y, z);
}
foov(...[1, 2, 3]); // 1 2 3

/*
... can be used to spread out/expand a value in other contexts
as well, such as inside another array declaration:
*/
console.log(".................spread and rest 1...............");

{
  var ab = [2, 3, 4];
  var b = [1, ...ab, 5];
  console.log(b); //[ 1, 2, 3, 4, 5 ]
}

console.log(`                ................
Pass elements of an array to a function as separate arguments..................`);

function add(a,b,c){
    return a+b+c;
}
const dd = [1,2,3,5];
console.log(add(...dd)); //11

console.log("......REST 2 Gather a set of values together into an array...");

function fooy(x, y, ...z) {
  console.log(x, y, z);
}
fooy(1, 2, 3, 4, 5); //1 2 [ 3, 4, 5 ]
console.log("................... rest 3...............");

function foow(...args) {
  console.log(args);
}
foow(1, 2, 3, 4, 5); //[ 1, 2, 3, 4, 5 ]

console.log(".REST 4 ...args is called rest parameter.....");

{
  function foob(...args) {
    args.shift();
    console.log(args);
  }
  foob(4, 5, 6, 7, 8, 9); // [ 5, 6, 7, 8, 9 ]
}


/*It copies own enumerable properties from a provided object onto a new object.
Shallow-cloning (excluding prototype) or merging of objects is now possible
using a shorter syntax than Object.assign()*/

var obj1={foo:'bar',x:42};
var obj2={foo:'baz',y:13};
var mergedObj={...obj1, ...obj2};
console.log(mergedObj);  //{ foo: 'baz', x: 42, y: 13 }

console.log(`                ................
rest parameters
..................`);


function add(x, y) {
    return x + y;
  }
  
  add(1, 2, 3, 4, 5); // returns 3

  /*
  The above function call returns 3, this is because in 
  Javascript it is possible to call a function with any 
  number of arguments.However, only the fist two arguments will be counted.
  */
 function add(...args) {
    let result = 0;
  
    for (let arg of args) result += arg;
  
    return result
  }
  
  add(1) // returns 1
  add(1,2) // returns 3
  add(1, 2, 3, 4, 5) // returns 15

  /* 
  Note: Rest parameters have to be at the last argument. This is because
   it collects all remaining/ excess arguments into an array. So having a
   function definition like this does not make sense and it errors out. :
  */
 //function abc(a, ...b, c) {
 
   // return;  //throws error
 // }
/*
We can separately define the first arguments, and the rest
 of the arguments in the function call (no matter how many they are)
will be collected into an array by the rest parameter.
*/
function xyz(x, y, ...z) {
    console.log(x, ' ', y); // hey hello
  
    console.log(z); // ["wassup", "goodmorning", "hi", "howdy"]
    console.log(z[0]); // wassup
    console.log(z.length); // 4
  }
  
  xyz("hey", "hello", "wassup", "goodmorning", "hi", "howdy");

  /*
  Note: Unlike rest parameters you can use the 
  spread operator as the first argument. So if you wanted
  to add an element as the last element in your array you cna do this:
  */

 const str = 'joykare';
 console.log([...str]); //[ 'j', 'o', 'y', 'k', 'a', 'r', 'e' ]
