// //callback function   or high order function 
//  function myfunc(callback){
//     console.log("hello i am function ")
//     callback('pooja')
//     console.log(callback)s
//     console.log('hello world')

// }
// function myfunc2(name){
//     console.log("inside my  func 2 ")
// console.log(name)
// }
// // myfunc([1,2,3,4])  here a value can be anything like string , array, object suppose we pass  function 
// myfunc(myfunc2)





// function returning function  

// function func(){
//     // return "aavfv"   // string
//     // return [1,2,4]   //array
//     // return {name: "pooja"}   //object 
     
//     function hello(){
//         // console.log("hello world")
//         return "hello"
//     }
//     return hello
// }
// const ans  = func()  //ans variable ek function bn gya hai 
// console.log(ans() )  //hello 


//or   function returning function // high order function 

function func(){
    return  function hello(){
        return "hello"
    }
}

const ans  = func()   
console.log(ans() ) 




