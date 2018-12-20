console.log(`
................The syntax for map is :..................
var newArray = myArray.map(function)`);

console.log("..............Arrow function and arrow............");
var materials = ["Hydrogen", "carbon", "Lithium", "Berium"];
var material = materials.map(material => material.length);
console.log(material); //[ 8, 6, 7, 6 ]

var drinks = ["coffee", "tea", "whiskey"];
var coldDrinks = drinks.map(function(drink) {
  return "iced " + drink;
});
console.log(coldDrinks);

var coldDrinks = drinks.map(drink => {
  return "iced " + drink;
});
console.log(coldDrinks);

var numbers = [1, 4, 9];
var doubles = numbers.map(num => {
  return num * 2;
});
console.log(doubles);

var Arrayd = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 }
];
var refomattedArray = Arrayd.map(obj => {
  var robj = {};
  robj[obj.key] = obj.value;
  console.log(obj.value);
  return robj;
});
console.log(refomattedArray);
