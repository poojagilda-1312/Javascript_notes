//difference between dot bracker notations
const key ="email";

const person = {
    name : 'harshit',
    age : 23,
    "person hobbies" :["guitar","sleeping"]
}  

// console.log(person.person hobbies) // error
console.log(person["person hobbies"])
console.log(person)

// how to add key in object
person[key] = "harshit@gmail.com"
console.log(person)

// how to iterate object '

const person1 = {
    name : 'harshit',
    age : 23,
    "person hobbies" :["guitar","sleeping"]
}  
// for in 

for(let key in person1){
    console.log(key)
    console.log(person[key])  
}
//object.keys
console.log(Object.keys(person1))

