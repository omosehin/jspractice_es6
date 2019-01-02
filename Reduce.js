console.log(`              ...............
                   REDUCE
              ...............`);
var maxCallback2 = (max, cur) => Math.max(max, cur);
var ass = [{ x: 22 }, { x: 42 }];
var kick = ass.map(el => el.x).reduce(maxCallback2, -Infinity);
console.log(kick);

//sum all the value in an array
var sumNo = [0, 1, 2, 3, 4];
var totalsum = sumNo.reduce(function(
  accumulator,
  currentValue,
  currentIndex,
  array
) {
  return accumulator + currentValue;
},
0);
console.log(totalsum);

//Arrow function
var totalSum = sumNo.reduce((acc, curval, curIndex, array) => acc + curval, 0);
console.log(totalSum);

//Sum of value in an Object

//If you were to provide an initial value as the second argument to reduce(), the result would look like this:
var all = [0, 1, 2, 3, 4].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 10);
console.log(all); //20

//Sum of values in an object array
/*
                    To sum up values contained in an
                    array of objects you must supply
                    an initial value so that each item
                     passes through your function.
*/
var initialValue = 0;
var Num = [{ x: 1 }, { x: 2 }, { x: 3 }];
var sumAll = Num.reduce((acc, curval) => acc + curval.x, initialValue);
console.log(sumAll); //6

//Flatten an array of arrays
var flattened = [[0, 1], [2, 3], [4, 5]];
var flattenArray = flattened.reduce((acc, curVal) => acc.concat(curVal), []);
console.log(flattenArray); //[ 0, 1, 2, 3, 4, 5 ]

//Counting instances of values in an object
var names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
var countedNames = names.reduce(function(allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

console.log(countedNames);

var arr = [1, 2, 3, 4];
var sum = [];
for (var i = 0; i < arr.length; i++) {
  sum.push(arr[i]);
}
console.log(sum);

// how would you sum up the population of every country except China?
let data = [
  {
    country: "China",
    vav: 1409517397
  },
  {
    country: "India",
    vav: 1339180127
  },
  {
    country: "USA",
    vav: 324459463
  },
  {
    country: "Indonesia",
    vav: 263991379
  }
];
let sumx = data.reduce((acc, val) => {
  return val.country == "China" ? acc : acc + val.vav;
}, 0);
console.log(sumx);
