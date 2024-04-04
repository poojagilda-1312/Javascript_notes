//trim() , toUpperCase , toLowerCase(), slice 

// to remove spaces we use trim method 
let firstName = "   harshit    ";

console.log(firstName.length) //14
firstName.trim()
console.log(firstName.length)  //14 

let newString = firstName.trim()
console.log(newString.length) // 7 


//toUpperCase  toLowerCase() both work in same way 

firstName.toUpperCase()  // this method will not change bcz string is immutable 
console.log(firstName)  //  harshit     
// so we need to do this 
//1
firstName = firstName.toUpperCase()
console.log(firstName)
// 2
console.log(firstName.toUpperCase()) // HARSHIT 


//slice method 
//start index
// end index 
let newString1 = "pooja"
console.log( newString1.slice(0,3))  //poo  
console.log(newString1.slice(1)) //ooja
                  //0        1          2        3       4
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);    // ['Orange', 'Lemon']
console.log(citrus) 

// The slice() method returns selected elements in an array, as a new array.

// The slice() method selects from a given start, up to a (not inclusive) given end.

// The slice() method does not change the original array.












