console.log(
  `filter() creates a new array with
   elements that fall under a given 
   criteria from an existing array:`
);

console.log("The Syntax");
console.log(`var newArray = array.filter(function(item) {
  return condition;
});
`);
var numbers = [1, 3, 6, 8, 11];

var lucky = numbers.filter(function(number) {
  return number > 7;
});
console.log(lucky);

var lucky = numbers.filter(number => {
  return number < 8;
});
console.log(lucky);

var heroes = [
  { name: "Batman", franchise: "DC" },
  { name: "Ironman", franchise: "Marvel" },
  { name: "Thor", franchise: "Marvel" },
  { name: "Batman", franchise: "DC" }
];
var marvelHeroes = heroes.filter(function(hero) {
  return hero.franchise == "Marvel";
});
console.log(marvelHeroes);
