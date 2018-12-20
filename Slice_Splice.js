var arr = [23, 56, 87, 32, 75, 13, 45, 66];
var new_arr = arr.slice(4);
console.log(new_arr);

console.log(`              ...............
           SPLICE
              ...............`);
//Remove 0 (zero) elements from index 2, and insert "drum"
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2, 0, "drum");
console.log(myFish); //angel", "clown","drum","mandarin", "sturgeon"]

//Remove 1 element from index 3
{
  var myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
  var removedmandarin = myFish.splice(3, 1);
  console.log(removedmandarin);
} // 'mandarin'

//Remove 1 element from index 2, and insert "trumpet"
{
  var myFish = ["angel", "clown", "drum", "sturgeon"];
  var addtrumpet = myFish.splice(2, 1, "trumpet");
  console.log(myFish);
} //'angel', 'clown', 'trumpet', 'sturgeon'

//Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
{
  var myFish = ["angel", "clown", "trumpet", "sturgeon"];
  var removeFish = myFish.splice(0, 2, "parrot", "anemone", "blue");
  console.log(removeFish);
} //"angel", "clown"

{
  var myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
  var remove = myFish.splice(2, 2);
  console.log(remove); // "blue", "trumpet"
}

{
  var myFish = ["angel", "clown", "mandarin", "sturgeon"];
  var removef = myFish.splice(-2, 1);
  console.log(removef); //mandarin
}
{
  var myFish = ["angel", "clown", "mandarin", "sturgeon"];
  var remove = myFish.splice(2);
  console.log(remove);
}
