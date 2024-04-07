//filter method 

const numbers = [1,2,5,6,7];
const evenNumber = numbers.filter((number)=>{
    return number % 2 === 0
})
  console.log(evenNumber);    //   [2, 6]

 //reduce method  :array methods
//basic example 
const  num = [1,2,3,4]
//aim sum of all the numbers in array 
 const sum =  num.reduce((accumulator,currentvalue)=>{
    return accumulator + currentvalue; 
},100)
//here we can also pass intial value 
console.log(sum)

// accumulator , currentvalue , return 
// 1                2             3
// 3                3             6
// 6                4             10 


//realworld example
 const userCart= [
    {productId:1 ,productName: "mobile",price:12000},
    {productId:2,productName:"dress",price:15677},
    {productId:3,productName:"dress",price:156787}
 ]
 
 const totalValue= userCart.reduce((totalPrice,currentPrice)=>{
    return   totalPrice + currentPrice.price
 },0)
 console.log(totalValue)  

