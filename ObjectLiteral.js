//If you need to define a property that is the same 
//name as a lexical identifier, you can shorten it from x: x to x

var x = 2, y=3,
o={
    x:x,
    y:y
};

var x = 2, y = 3,
o = {
x,
y
};

var o = {
    x: function() {
    // ..
    },
    y: function() {
    // ..
    }
    }
    //And as of ES6:
    var o = {
    x() {
    // ..
    },
    y() {
    // ..
    }
    }
    