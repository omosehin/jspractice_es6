
console.log(`              ...............
              ARROW FUNCTION
              ...............`);
var f1 = () => 12;
console.log(f1()); //12
var f2 = x => x * 2;
console.log(f2(3)); //6

var f3 = (x, y) => {
  var z = x * 2 + y;
  y++;
  x *= 3;
  console.log(x); //6
  console.log(y); //5
  console.log(z); //8
  return (x + y + z) / 2;
};
console.log(f3(2, 4)); //9.5


/*
Arrow function don't have there own key word,they use the this key word
of the function they are written in i.e they have a lexical this variable
*/

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

//   // The callback refers to the `self` variable of which
    // the value is the expected object.


function Personr(){
    var self=this;
    self.age=0;

    setInterval(function growUp(){
        self.age++;
    },1000);
}
var p = new Personr();

function Person(){
    this.age = 0;
  
    setInterval(() => {
      this.age++; // |this| properly refers to the Person object
    }, 1000);
  }
  
  var p = new Person();

  let max = (a, b) => a > b ? a : b;
