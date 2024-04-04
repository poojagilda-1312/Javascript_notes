//hoisting
// In case of function declaration it will give "hello world"
// hello();       
// function hello(){
//     console.log("hello world ")
// }

// in case of function expression and arrow function  it will give 
hello()      //  Cannot access 'hello' before initialization
const hello = function(){
    console.log("hello world")

}


