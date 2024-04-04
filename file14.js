//objects  reference type 
//array are good but not sufficient
//for real world data 
//objects store key value pairs 
//objects dont have index
//how to create objects 
//key ko hum properties bhi bolte hai 
const person = {
    name : 'harshit',
    age : 23,
    hobbies :["guitar","sleeping"]
}   //object literals 
// how to access data from objects 
//dot operator
console.log(person.name) // harshit
console.log(person)
//square bracket 
console.log(person["name"])
//how to add key value pair to objects 

person.gender = "male";
person["gender"] ="male"

