//map method
const numbers =[3,4,5,6]
// const square = function(number){
//      return number * number 
//     // console.log(number * number)  // it will  return only yvalue 3
//                                                                    //4 
// }                                                                   //5 like this 
// and in the line 10 it will return [undefined,undefined,undefined]
// so use return like  4th line 
// const squareNumber = numbers.map(square);
// console.log(squareNumber);                            

// another way directly pass function in the map 
const squareNumber  = numbers.map((number)=>{
    return number * number 
})
console.log(squareNumber)    // output   [9, 16, 25, 36]


const users=[
    {firstname:"harshit",age:23},
    {firstname:"mohit",age:33},
    {firstname:"nitish",age:53},
    {firstname:"garint",age:50}
]


const firstName = users.map((user)=>{
    return user.firstname
})
console.log(firstName)

