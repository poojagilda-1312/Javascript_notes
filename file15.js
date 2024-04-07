//difference between dot & bracket notations
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
console.log(Object.keys(person1))   //name age person hobbies

// Array objects
const arr = ["A", "B", "C"];
console.log(Object.keys(arr)); // ['0', '1', '2']

// array-like objects
const obj = { 65: "A", 66: "B", 67: "C" };
console.log(Object.keys(obj)); // ['65', '66', '67']