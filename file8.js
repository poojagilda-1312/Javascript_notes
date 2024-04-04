//array  push pop
//array shift unshift
//** push & pop is fast as compared to shift and unshift  */ 
//** in shift & unshift it need to shift all the element  */

let fruits = ["apple","mango", "grapes"]
 console.log(fruits)  //'apple', 'mango', 'grapes']

//push  add the element in the last 
 
fruits.push("banana")
console.log(fruits)  //'apple', 'mango', 'grapes', 'banana']


//pop  remove the element from the last and return that element also 

console.log(fruits.pop())   // banana 
console.log(fruits)  //'apple', 'mango', 'grapes']


//unshift  : add the element in the starting 
 let colour  = ["red","green", "blue"]
colour.unshift("pink")
console.log(colour)  //) ['pink', 'red', 'green', 'blue']


//shift  : remove the element from the beginin 
 let removedColor = colour.shift()  
console.log(colour)  //['red', 'green', 'blue']
console.log(removedColor)  //pink 


