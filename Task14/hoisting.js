// basicllay hoisting means it execute before the actual code initalize .
// suppose we print before the delcaration or inistialization.
// Hoisting is JavaScript's default behavior of moving declarations to the top.
//It doesn't work on any other programming language.


getname();
console.log(x);

var x=18;
function getname(){
    console.log("Hello world");
}

x=23;
console.log(x);
var x;