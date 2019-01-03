//pre-ES6
var name='kyle';
var greeting ='Hello ' + name + '!';

console.log(greeting); //Hello Kyle
console.log(typeof greeting ); //string

//ES6
var name = "Kyle";
var greeting = `Hello ${name}!`;
console.log( greeting ); // "Hello Kyle!"
console.log( typeof greeting ); // "string"

/*
One really nice benefit of interpolated string
literals is they are allowed to split across multiple lines
*/

var text =
`Now is the time for all good men
to come to the aid of their
country!`;
console.log( text );
// Now is the time for all good men
// to come to the aid of their
// country!

function upper(s) {
    return s.toUpperCase();
    }
    var who = "reader"
    var text =
    `A very ${upper( "warm" )} welcome
    to all of you ${upper( `${who}s` )}!`;
    console.log( text );
    // A very WARM welcome
    // to all of you READERS!

    
