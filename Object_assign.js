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
The obj variable is a container for the new object initialized. The
 copy variable is pointing to the same object and is a reference to that object. So basically
 this { a: 1, b: 2, } object is saying: There are now two ways to gain access 
 to me. You have to pass through the obj variable or the copy variable either 
 ways you still get to me and anything you do to me via these ways (gateways) will affect me.
*/

console.log(`.................Copy Reference................`);

let objb ={
a:1,
b:2
}
let copyb=objb;
objb.a=5;
console.log(copyb.a);

console.log(`.................The Naive Way of Copying Objects................`);
/*
INHERENT ISSUES
1.objCopy object has a new Object.prototype method different from the mainObj object prototype method, which is not what we want. We want an exact copy of the original object.
2.Property descriptors are not copied. A "writable" descriptor with value set to be false will be true in the objCopy object.
3.The code above only copies enumerable properties of mainObj.
4.If one of the properties in the original object is an object itself, then it will be shared between the copy and the original making their respective properties point to the same object.
*/
function copys(mainObj) {
    let objCopy = {}; // objCopy will store a copy of the mainObj
    let key;
  
    for (key in mainObj) {
      objCopy[key] = mainObj[key]; // copies each property to the objCopy object
    }
    return objCopy;
  }
  
  const mainObj = {
    a: 2,
    b: 5,
    c: {
      x: 7,
      y: 4,
    },
  }
  
  console.log(copys(mainObj));


  //Shallow Copying Objects

 /*
The Object.assign() method is used to copy the values of all
enumerable own properties from one or more source objects to a target object. 
*/

let objc = {
    a: 1,
    b: 2,
  };
  let objCopy = Object.assign({}, objc);
  console.log(objCopy); //{ a: 1, b: 2 } Well, this does the job so far. We have made a copy of obj. Let's see if immutability exist
  objCopy.b = 89;
  console.log(objCopy); //{ a: 1, b: 89 } This implies that we have successfully created a copy of the source object without any references to it.
  console.log(objCopy); //{ a: 1, b: 2 }
  
  //pitfall of object.assign()

  let objr = {
    a: 1,
    b: {
      c: 2,
    },
  }
  let newObj = Object.assign({}, objr);
  console.log(newObj); // { a: 1, b: { c: 2} }
  
  obj.a = 10;
  console.log(objr); // { a: 10, b: { c: 2} }
  console.log(newObj); // { a: 1, b: { c: 2} }
  
  newObj.a = 20;
  console.log(objr); // { a: 10, b: { c: 2} }
  console.log(newObj); // { a: 20, b: { c: 2} }
  
  newObj.b.c = 30;
  console.log(objr); // { a: 10, b: { c: 30} }
  console.log(newObj); // { a: 20, b: { c: 30} }
  
  // Note: newObj.b.c = 30; Why is obj.b.c = 30?

  /*
  Well, that is a pitfall of Object.assign(). Object.assign
  only makes shallow copies. Both newObj.b and obj.b share
  the same reference to the object because of individual
  copies were not made, instead a reference to the object
  was copied. Any change made to any of the object's property
  applies to all references using the object. How can we fix
  this? Continue reading... we have a fix in the next section.
  
  Note: Properties on the prototype chain and non-enumerable 
  properties cannot be copied. See here:
  */
 let someObj = {
    a: 2,
  }
  
  let objz = Object.create(someObj, { 
    b: {
      value: 2,  
    },
    c: {
      value: 3,
      enumerable: true,  
    },
  });
  
  let objCopy3 = Object.assign({}, objz);
  console.log(objCopy3); // { c: 3 }

  /*
1.someObj is on obj's prototype chain so it wouldn't be copied.
2.property b is a non-enumerable property.
3.property c has an enumerable property descriptor allowing it to be enumerable. That's why it was copied.
  */

console.log(`                ................
                Deep Copying Objects
                ..................`);
/*
A deep copy will duplicate every object it encounters. The copy
and the original object will not share anything, so it will be
a copy of the original. Here's the fix to the problem we encountered using Object.assign()
*/
//Using JSON.parse(JSON.stringify(object));
//Now newObj.b has a copy and not a reference!
//This is a way to deep copy objects.

let objbc = { 
    a: 1,
    b: { 
      c: 2,
    },
  }
  
  let newObjd = JSON.parse(JSON.stringify(objbc));
  
  objbc.b.c = 20;
  console.log(objbc); // { a: 1, b: { c: 20 } } IMMUTABLE
  console.log(newObjd); // { a: 1, b: { c: 2 } } (New Object Intact!)

  //Unfortunately, this method can't be used to copy user-defined object methods. See below.

  console.log(`                ................
                Deep Copying Objects:Copying Object methods
                ..................`);
                let objs = {
                    name: 'scotch.io',
                    exec: function exec() {
                      return true;
                    },
                  }
                  
                  let method1 = Object.assign({}, objs);
                  let method2 = JSON.parse(JSON.stringify(objs));
                  
                  console.log(method1); //Object.assign({}, obj)
                  /* result
                  {
                    exec: function exec() {
                      return true;
                    },
                    name: "scotch.io"
                  }
                  */
                  
                  console.log(method2); // JSON.parse(JSON.stringify(obj))
                  /* result
                  {
                    name: "scotch.io"
                  }
                  */
//The result shows that Object.assign() can be used to copy methods while JSON.parse(JSON.stringify(obj)) can't be used.

console.log(`                ................
Deep Copying Objects:Copying Circular Objects
..................`);
//Circular objects are objects that have properties referencing themselves.

let objf={
    a:'a',
    b:{
        c:'c',
        d:'d',
    },
}

objf.c = objf.b;
objf.e = objf.a;
objf.b.c = objf.c;
objf.b.d = objf.b;
objf.b.e = objf.b.c;
console.log(objf.e);

//let newObjaa = JSON.parse(JSON.stringify(objf));
let newObjab = Object.assign({}, objf);


console.log(newObj);  //ERROR  JSON.parse(JSON.stringify(obj)) clearly doesn't work for circular objects.
console.log(newObjab);  // Object.assign() works fine for shallow copying circular objects but wouldn't work for deep copying.




console.log(`                ................
Using Spread Elements ( ... )
..................`);
/*
ES6 already has rest elements for array destructuring assignment and spread elements
 for array literals implemented. Take a look at spread element implementation on an array here:
*/

const array = [
    "a",
    "c",
    "d", {
      four: 4
    },
  ];
  const newArray = [...array];
  console.log(newArray);
  // Result 
  // ["a", "c", "d", { four: 4 }]

  //Spread properties in object initializers copies own enumerable properties from a source object onto the target object.
  let objh = {
    one: 1,
    two: 2,
  }
  
  let newObjf = { ...objh };
  console.log(newObjf)
  
  // { one: 1, two: 2 }