//some method 
// some() returns true if any array element meets a
//  condition, while every() checks if all elements do. Neither modifies the original array
const numbers = [3,5,8,9]
// kya ek bhi number esa hai jo even hai 
//true

const ans  = numbers.some((number)=> number %2 ===0)
console.log(ans)  // true 

const userCart= [
    {productId:1 ,productName: "mobile",price:10},
    {productId:2,productName:"dress",price:150},
    {productId:3,productName:"dress",price:4}
 ]


 const value  =  userCart.some((cart)=> cart.price> 1000)
 console.log(value)   


 // fill method 
 // value:Required.The value to fill in.,
//   start : Optional. The start index (position).Default is 0.
//  end :Optional. The stop index (position) default is array length 
//  The fill() method fills specified elements in an array with a value.

// The fill() method overwrites the original array.

// Start and end position can be specified. If not, all elements will be filled.
 const myArray = new Array(10).fill(-10)
 console.log(myArray)   //[-10, -10, -10, -10, -10, -10, -10, -10, -10, -10]

 const arr = [1,2,3,4,5,6,7,8]
 arr.fill(6,2,4)
 console.log(arr)  // [1, 2, 6, 6, 5, 6, 7, 8]