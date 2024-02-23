function numberGenerator() {
 
    var num = 1;
    function checkNumber() { 
      console.log(num);
    }
    num++;
    return checkNumber;
  }
  
  var number = numberGenerator();
  number(); 


//   *******************************************************************
// function greet() {
//     let name = 'John';
//     function displayName() {
//         return 'Hi' + ' ' + name;
//     }
//     return displayName;
// }

// const g1 = greet();
// console.log(g1); 
// console.log(g1()); 


// function along with his lexical scope bundle together to form closure