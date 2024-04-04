//how to clone array 
let array1 = ["item1","item2"]
// let array2 = array1
// console.log(array1 ===array2)   //   true 

// let array2 =   ["item1","item2"]
// console.log(array1 === array2) //false

// 1st way to clone is slice method
// let array2 = array1.slice(0)
// console.log(array2)
//how to concatenate array 

// let array2 = [].concat(array1)
// console.log(array2)

//new way is to use spread operator 

let newArray = ["item6","item7"]
let array22 = [...array1]
let array21 = [...array1,...newArray]   
let array2 = [...array1,"item2","item3","item4"]  // to add more items in spread operator 
console.log(array21)
console.log(array2)










