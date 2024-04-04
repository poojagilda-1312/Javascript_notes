//let keyword 
//declare variable with let keyword 

let firstName = 'mohit';

// let firstName = 'rohit';
// we cant declare again using let keyword 

console.log(firstName);  // Uncaught SyntaxError: Identifier 'firstName' has already been declared


// but we can do this 
firstName = 'rohit'
console.log(firstName)  // rohit 
