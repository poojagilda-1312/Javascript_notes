//let and const block scope 
// var function scope 
let firstname = "garima"
function myApp(){

    if(true){
        let firstname = "harshit"
        console.log(firstname)
    }
    console.log(firstname)
}

myApp()

//default parameters

function addTwo(a,b=6){
    return a+b  
}
const ans  = addTwo(2)
console.log(ans)

//rest parameters

function myfunc(a,b,...c){
    console.log(a) //1
    console.log(b) //2
    console.log(c)  //3 4 5 6
}
myfunc(1,2,3,4,5,6,)

function add(...numbers){
    let total = 0 ; 
    for(let number of numbers){
      total = total + number 
    }
    return total
}
console.log(add(1,2,3,4,5,6))



//parameter  destructuring 
//object 
// react 

const person = {
    firstname: "harshit",
    gender :'male'
}
// function getDetails (obj){
// console.log(obj.firstname)
// console.log(obj.gender)
// }
// getDetails(person)
function getDetails ({firstname,gender}){
    console.log(firstname)
    console.log(gender)
    }
    getDetails(person)
    

