function foo(){
    return [1,2,3];
}

function bar(){
    return{
        w:4,
        r:5,
        d:6
    };
}

var [,w]=foo();
var{r,d}=bar();

console.log(w,r,d);

function f6({x=10}={},{y}={y:10}){
    console.log(x,y);
}
f6();

f6({},{});