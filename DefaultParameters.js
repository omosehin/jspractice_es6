//Default Parameter Values
function foo(x = 11, y = 31) {
    console.log( x + y );
    }
foo();
foo(5,6);
foo( 0, 42 ); // 42
foo( 5 ); // 36
foo( 5, undefined ); // 36 <-- `undefined` is missing
foo( 5, null ); // 5 <-- null coerces to `0`
foo( undefined, 6 ); // 17 <-- `undefined` is missing
foo( null, 6 ); // 6 <-- null coerces to `0`

//Default Value Expressions

function bar(val) {
    console.log( "bar called!" );
    return y + val;
    }
    function foo(x = y + 3, z = bar( x )) {
    console.log( x, z );
    }
    var y = 5;
    foo(); // "bar called"
    // 8 13
    foo( 10 ); // "bar called"
    // 10 15
    y = 6;
    foo( undefined, 10 ); // 9 10