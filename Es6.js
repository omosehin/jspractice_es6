function Person() {
  this.age = 0;
  var self = this;

  setInterval(function growUp() {
    self.age++;
  }, 1000);
}
var p = new Person();

setInterval(() => {
  this.age++;
}, 1000);
var p = new Person();

console.log("///........................////");

var adder = {
  base: 1,

  add: function(a) {
    var f = v => v + this.base;
    return f(a);
  },

  addThruCall: function(a) {
    var f = v => v + this.base;
    var b = { base: 2 };
    return f.call(b, a);
  }
};
console.log(adder.add(1)); //2
console.log(adder.addThruCall(1)); //2

console.log("............No binding of argument................");
var arguments = [1, 2, 3];
var arr = () => arguments[0];
console.log(arr()); //1

function foo(n) {
  var f = () => arguments[0] + n;
  return f();
}
console.log(foo(2));

console.log("........... Arrow and Ternary Number.................");
var simple = a => (a > 15 ? 15 : a);

console.log(simple(1)); //1
console.log("....................YDKJ...................");

let a = 2;
if (a > 1) {
  let b = a * 3;
  console.log(b);
  for (let i = a; i <= b; i++) {
    let j = i + 10;
    console.log(j);
  }
  let c = a + b;
  console.log(c);
}

console.log("..................dead zone.............");
var funcs = [];
for (let i = 0; i < 5; i++) {
  funcs.push(function() {
    console.log(i);
  });
}
funcs[3]();

console.log(".............Const.............");

{
  const qw = [1, 2, 3];
  qw.push(4);
  console.log(qw); //[ 1, 2, 3, 4 ]
}



console.log("TEMPLATE LITERAL ES5=>ES6");
var name = "Bayo";
var greeting = "Hello " + name + "!";
console.log(greeting); //Hello Bayo! ES5

var greetings = `Hello ${name}!`;
console.log(greetings); //Hello Bayo!
console.log(typeof greetings); //string

console.log(
  "interpolated stringd literal are allow to split across multiple lines"
);
var text = `Now is the time
for all good men
to come to the aid 
of their country!`;
console.log(text);

function upper(s) {
  return s.toUpperCase();
}
var who = "reader";
var text = `A very ${upper("warm")} welcome
to all of you ${upper(`${who}s`)}!`;
console.log(text);

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

console.log(`              ...............
              FOR ..OF LOOPS
              ...............`);
console.log("for..in loops over the keys /indexes in the array");
var g = ["a", "b", "c", "d"];
for (var fex in g) {
  console.log(fex); // 0 1 2 3 4
}

console.log("for..of loops over values in a");

for (var val of g) {
  console.log(val); // "a" "b" "c" "d" "e"
}

console.log("for..of loops over values in a Pre-Es6");

k = Object.keys(g);
for (var val, i = 0; i < k.length; i++) {
  val = g[k[i]];
  console.log(val); // "a" "b" "c" "d" "e"
}
console.log("for..of loops over values in a primitive string");

for (var c of "hello") {
  console.log(c); // "h" "e" "l" "l" "o"
}

console.log(`              ...............
              SYMBOLS
              ...............`);
var sym = Symbol("some optional description");
console.log(typeof sym); //symbol
console.log(sym.toString()); //Symbol(some optionsl description)
