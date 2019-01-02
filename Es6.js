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



console.log(".......DESTRUCTURING on function ES5/ES6.......");

function foo() {
  return [1, 2, 3];
}
// var tmp = foo(),.........
//   z = tmp[0],           .
//   y = tmp[1],           ES5
//   x = tmp[2];............
var [z, y, x] = foo();
console.log(z, y, x); //1 2 3

console.log(".......DESTRUCTURING on OBJECT ES5/ES6.......");
function bar() {
  return {
    w: 4,
    r: 5,
    d: 6
  };
}

//.....................
// var tvy = bar(),   .
//   w = tvy.w,        ES5
//   r = tvy.r,       .
//   d = tvy.d;.........

//If the propertyname being matched is the same as the variable
//you want to declare, you can actually shorten the syntax:

//var { w: w, r: r, d: d } = bar();
var { w, r, d } = bar();
console.log(w, r, d); //4 5 6

console.log("........more examples........");
console.log;
var aa = 10,
  bb = 20;
var o = { x: aa, y: bb };
var { x: AA, y: BB } = o;
console.log(AA, BB); //10 20

console.log("...General assignment operation..");
var h, t, r, z, q, s;
[h, t, r] = foo();
console.log(h, t, r); //1 2 3
({ w: z, r: q, d: s } = bar());
console.log(z, q, s); //4 5 6
console.log("//...........valid Expression................//");
var i = {};
[i.a, i.b, i.c] = foo();
console.log(i.a, i.b, i.c); //1 2 3
({ w: i.w, r: i.r, d: i.d } = bar());
console.log(i.w, i.r, i.d); //4 5 6

console.log("//...........computed property expressions................//");
var which = "d",
  o = {};
({ [which]: o[which] } = bar());
console.log(o.d); //6

console.log("//General assignment to create object mappings//");

var o1 = { a: 1, b: 2, c: 9 },
  o2 = {};
({ a: o2.x, b: o2.y, c: o2.z } = o1);
console.log(o2.x, o2.y, o2.z); //1 2 9

console.log("Mapping an object to an array");
var k1 = { a: 1, b: 2, c: 3 },
  k2 = [];
({ a: k2[0], b: k2[1], c: k2[2] } = k1);
console.log(k2[0], k2[1], k2[2]); //1 2 3
console.log(k2); // [1, 2, 3]

console.log("Mapping an array into object");
var k3 = [1, 2, 3],
  k4 = {};
[k4.q, k4.w, k4.e] = k3;
console.log(k4.q, k4.w, k4.e); // 1 2 3

console.log("reorder array");
var a1 = [1, 2, 3],
  a2 = [];
[a2[2], a2[1], a2[0]] = a1;
console.log(a2); //[ 3, 2, 1 ]

console.log("Swap two variables");
//Swapping without traditional temporary variable

var x = 10,
  y = 20;
[y, x] = [x, y];
console.log(x, y); //20 10

console.log("Destructuring Assignment Expressions in object");
{
  var o = { a: 1, b: 2, c: 3 },
    v,
    j,
    d,
    p;
  p = { a: v, b: j, c: d } = o;
  console.log(v, j, d); //1 2 3
  console.log(p === o); //true
}
console.log("Destructuring Assignment Expressions in array");
{
  var o = [1, 2, 3],
    k,
    b,
    c,
    p;
  p = [k, b, c] = o;
  console.log(k, b, c); //1 ,2,3
  console.log(p === o); //true
}

console.log("Chaining destructuring assignment");

var o = { a: 1, b: 2, c: 3 },
  p = [4, 5, 6],
  m,
  b,
  c,
  x,
  y,
  z;

({ a: m } = { b, c } = o);
console.log(m, b, c); // 1 2 3

[x, y] = [z] = p;
console.log(x, y, z); //4 5 4

console.log(
  "array destructuring assignment and object destructuring assignment"
);
//you do not have to assign all
//the values that are present
var [, , b] = foo();
var { r: x, d: z } = bar();
console.log(b, x, z); //2 5 6

console.log("gather behaviour of Spread of array");
var n = [2, 3, 4];
var [b, ...c] = n;
console.log(b, c); //2 [ 3, 4 ]

console.log("Default Value Assignment");
var [m = 3, b = 6, c = 9, d = 12] = foo();
var { w = 5, r = 10, d = 15, l = 20 } = bar();

console.log(m, b, c, d); //1 2 3 6
console.log(w, r, d, l); //4 5 6 20

console.log("combine the default with the alternative assignment");
var { w, r, d, z: WW = 29 } = bar();
console.log(w, r, d, WW); //4 5 6 29

console.log("NESTED DESTRUCTURING");
var a1 = [1, [2, 3, 4], 5];
var o1 = { x: { y: { z: 6 } } };

var [q, [b, c, d], e] = a1;
var {
  x: {
    y: { z: w }
  }
} = o1;

console.log(q, b, c, d, e); //1 2 3 4 5
console.log(w); //6

console.log(
  "Nested destructuring can be a simple way to flatten out object namespaces."
);
var App = {
  model: {
    User: function() {}
  }
};
var {
  model: { User }
} = App;

console.log("Array Destructuring Parameters");
{
  function foo([x, y]) {
    console.log(x, y);
  }
  foo([1, 2]); //1 2
  foo([1]); //1 undefined
  foo([]); //undefined undefined
}

console.log("Object Destructuring Parameters");
{
  function foo({ x, y }) {
    console.log(x, y);
  }

  foo({ x: 1, y: 2 }); //1 2
  foo({ y: 42 }); //undefined 42
  foo({}); //undefined undefined
}

console.log(
  "Destructuring also mixes fine with other ES6 function parameter capabilities,"
);
function f3([x, y, ...z], ...w) {
  console.log(x, y, z, w);
}
f3([]); //undefined undefined[][]
f3([1, 2, 3, 4], 5, 6); //1 2 [ 3, 4 ] [ 5, 6 ]

console.log("OBJECT LITERALS Extension");
var x = 2,
  y = 3,
  o = {
    x: x,
    y: y
  };
//ES6
var x = 2,
  y = 3,
  o = {
    x,
    y
  };
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
