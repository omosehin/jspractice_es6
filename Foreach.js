//The forEach() method executes a provided function once for each array element.
console.log(`              ...............
                  FOREACH
              ...............`);
var arraya = ["a", "b", "c"];
arraya.forEach(element => {
  console.log(element);
});
//Syntax
/*arr.forEach(function callback(currentValue[, index[, array]]) {
    //your iterator
}[, thisArg]); */

//Converting a for loop to forEach
var items = ["items1", "items2", "items3"];
var copyItem = [];
// for (let i = 0; i < items.length; i++) {
//   copyItem.push(items[i]);
// }
// console.log(copyItem);

//using foreach
items.forEach(item => {
  copyItem.push(item);
});
console.log(copyItem); //[ 'items1', 'items2', 'items3' ]

//Printing the contents of an array
function logArrayElements(element, index, array) {
  var log = "a[" + index + "]=" + element;
  console.log(log);
}
[2, 5, , 9].forEach(logArrayElements);

function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function(array) {
  array.forEach(entry => {
    this.sum += entry;
    ++this.count;
  });
};
const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count);

obj.sum;

var words = ["one", "two", "three", "four"];
words.forEach(word => {
  console.log(word);
  if (word === "two") {
    words.shift();
  }
});

var vowels = ["a", "e", "i", "o", "u"];
vowels.forEach((vowel, index, array)=> {
  console.log(vowel, index);
});
