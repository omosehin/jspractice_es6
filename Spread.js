console.log("...................spread and rest...............");
function foov(x, y, z) {
  console.log(x, y, z);
}
foov(...[1, 2, 3]); // 1 2 3

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