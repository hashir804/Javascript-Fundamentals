//Three types of variables
//1. var:old way
//ES6
//scope: var
//functionally/locally+global scope


var x=10 //global scope
function test(){
    var y=20 //functionally scope
}

console.log(x)

var pop = "hi js";
function rel(){
    var top= "hello js";
    console.log(top);
}

rel(); //calling function
console.log(pop);


var browser = "chrome";
var browser = "firefox"; //redeclaration is allowded in javasccript,it will print the latest value
browser= "safari"; //reassigning the value+ dont declare the variable again
console.log(browser);


var g;
console.log(g); //undefined
g="hello world";
console.log(g); //hello world


//isssue with var keyword

var flag = "hey naveen";
var t1 =4;
if (t1>3){
    var flag = "hey hashir";
    console.log(flag);
}
console.log(flag);

//let
//scope: block level scope
// { } - block
let m = "hey naveen";
let time = 4;
if (time>3){
    let m = "hey hashir";
    console.log(m);
}
console.log(m);


//
let len =4;
//let len =5; //error (redeclaration is not allowed in let)
len =6; //reassigning the value

console.log(len);

const days =7;
days = 10;  //error (reassigning the value is not allowed in const)  
console.log(100*days);


