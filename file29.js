//sort method 
const numbers = [5,9 ,1200,400,3000]
const ans= numbers.sort()
console.log(ans)


// remaining 


// find method 
 const myArray =[ "hello","cat","dog","lion"];
//  function isLength(string){
//     return  string.length== 3;
//  }

//console.log( isLength("dog"))
// with the help of callback it will the string length of 3 
// const ans1  = myArray.find(isLength)  


// console.log(ans1)
const ans1 = myArray.find((val)=>{
    return val.length == 3
})
console.log(ans1)   //cat 

const users= [
    {userID:1,userName: "pooja"},
    {userID:2,userName:"karan"},
    {userID:3,userName: "rohit"},
    {userID:4,userName:"dev"},

]

const myUser = users.find((user)=>{
    return user.userID===3
})
console.log(myUser) // {userID:3,userName: "rohit"}

// every method 
const values = [3,5,8,9]
const isEven = values.every((value)=>{
return value %2 === 0 
})
console.log(isEven)  // false, otherwise true in case when 7 is not present 


// real based example 
const userCart= [
    {productId:1 ,productName: "mobile",price:10},
    {productId:2,productName:"dress",price:15900},
    {productId:3,productName:"dress",price:4}
 ]
 const cart = userCart.every((product)=>   product.price <10000)
console.log(cart)   // it will check for evry product any failes then return false in that case 
