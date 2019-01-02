/*

Objects are the fundamental blocks of JavaScript. An object is a 
collection of properties, and a property is an association between
 a key (or name) and a value. Almost all objects in JavaScript are instances of Object which sits on the top of the prototype chain.
The object.assign method is used to copy the values of enumerable own
properties from one or more source onjects to a target object.It will
return the target object
The Object.assign() method only copies enumerable and own 
properties from a source object to a target object.
*/

//Cloning an object
const object1={
    a:1,
    b:2,
    c:3
};
const object2 = Object.assign({c:4,d:5},object1);
console.log(object2);  //{ c: 3, d: 5, a: 1, b: 2 }
console.log(object2.c,object2.d); //3 5

var obj ={a:1};
var copy = Object.assign({},obj);
console.log(copy); //{ a: 1 }

/*
For deep cloning, we need to use other alternatives because 
Object.assign() copies property values. If the source value 
is a reference to an object, it only copies that reference value.
*/

function test() {
    'use strict';
  
    let obj1 = { a: 0 , b: { c: 0}};
    let obj2 = Object.assign({}, obj1);
    console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}
    
    obj1.a = 1;
    console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
    console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}
    
    obj2.a = 2;
    console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
    console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 0}}
    
    obj2.b.c = 3;
    console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 3}}
    console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 3}}
    
    console.log('..........Deep Clone...............');

    obj1 = { a: 0 , b: { c: 0}};
    let obj3 = JSON.parse(JSON.stringify(obj1));
    obj1.a = 4;
    obj1.b.c = 4;
    console.log(JSON.stringify(obj3)); // { a: 0, b: { c: 0}}
  }
  
  test();

  console.log('................Merging objects..................');
  var o1={a:1};
  var o2={b:2};
  var o3={c:3};

  var obj = Object.assign(o1,o2,o3);
  console.log(obj) //{ a: 1, b: 2, c: 3 }
  console.log(o1); // { a: 1, b: 2, c: 3 }target object itself is changed
  console.log(o2);
  console.log(o3);

  console.log('................Merging objects with same properties.................');
  var o1a = { a: 1, b: 1, c: 1 };
  var o2b = { b: 2, c: 2 };
  var o3c = { c: 3 };
  
  var objv = Object.assign({}, o1a, o2b, o3c);
  console.log(objv); // { a: 1, b: 2, c: 3 }

  console.log(`.................Properties on the prototype chain and
                non-enumerable properties cannot be copied................`);

                var obj = Object.create({ foo: 1 }, { // foo is on obj's prototype chain.
                bar: {
                  value: 2 ,
            
                   // bar is a non-enumerable property.
                },
                baz: {
                  value: 3,
                  enumerable: true  // baz is an own enumerable property.
                }
              });
              
              var copy = Object.assign({}, obj);
              console.log(copy); // { baz: 3 }

 console.log(`.................Primitives will be wrapped to objects................`);

var v1 = 'abc';
var v2 = true;
var v3 = 10;
var v4 = Symbol('foo');

var obj = Object.assign({}, v1, null, v2, undefined, v3, v4); 
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(obj); // { "0": "a", "1": "b", "2": "c" }

/*
the assignment operator doesn't create a copy of an object,
it only assigns a reference to it, let's look at the following code:
*/

console.log(`.................Copy Reference................`);

let objb ={
a:1,
b:2
}
let copyb=objb;
objb.a=5;
console.log(copyb.a);