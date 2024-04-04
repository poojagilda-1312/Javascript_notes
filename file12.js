// use const for creating array 

//heap memory   "apple","grapes"]
const fruits = ["apple","grapes"]   ///0 * 11 address
fruits.push("banana")
console.log(fruits);


//for of loop in array 
//loop means iterate krna array ko 
const names = ["apple","kiwi","jam"] 
for(let name of names){
    console.log(name)
}
for (let index in names){
    console.log(index) // 0,1,2
    console.log(names[index]) //   "apple","kiwi","jam"
}

