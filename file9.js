//primitive vs reference  data  type 
// The main difference lies in how they store data. Primitive types store the actual value directly
//in the stack,  
//  making them memory-efficient and faster to access. Reference types store memory addresses in the stack, 
// and store data in the heap enabling them to reference complex objects and share data across 
// different program parts
//primitive type 
let num1 = 6;
let num2 = num1;
console.log("value is num1 is ", num1)  //6

console.log("value is num2 is ", num2)   //6
num1++;

// after incrementing value 
console.log("value is num1 is ", num1)   //7

console.log("value is num2 is ", num2)    //6

//reference type 
//array 
let array1 = ["items1","items2"] ;
let array2 = array1;
console.log("array1",array1)    
console.log("array2", array2)
array1.push("items3")
//after pushing element to array1
console.log("array1",array1)
console.log("array2", array2)