
//Callback function
function sayhello(){
    console.log("hello");
}

function add(num1,num2,callback){
    console.log(num1+num2);
    callback();
}

let a=10;
let b=23;

add(a,b,sayhello);


// function greet(name, callback) {
//     setTimeout(() => {
//       callback("Hello, " + name);
//     }, 3000);
//   }
  
//   function Pet(greeting) {
//     console.log(greeting);
//   }
  
//   greet("Ram", Pet);