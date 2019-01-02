
/* 
When ... is used in front of an array
it acts to “spread” it out into its individual values.
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