//intro to arrays :
// **  arrays are collection of items or  ordered collection of items **
// ** arrays are mutable means it will change original array  ** 
//array is reference type  :: means object so array is object 
//how to create arrays

let fruits = ["apple","mangoes","grapes"];
console.log(fruits);
console.log(fruits[0]) //apple
fruits[1] = "kiwi"
console.log(fruits); //['apple', 'kiwi', 'grapes']

let mixed = [1,2,2.3,"string",null,undefined];
console.log(mixed)

let numbrs = [1,2,3,4]
console.log(numbrs)

console.log(typeof fruits )  // **** object ****
// to check wheather it is actual array or not so we use isArray method  
console.log(Array.isArray(fruits))   //true s
// array indexing 


