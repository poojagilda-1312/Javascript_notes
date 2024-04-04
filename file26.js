// important array methods

//foreach
// The forEach method is also used to loop through arrays, but it uses a function 
//differently than the classic "for loop".

// The forEach method passes a callback function for each element of an array together
//  //with the following parameters:
//  Current Value (required) - The value of the current array element
// Index (optional) - The current element's index number
// Array (optional) - The array object to which the current elment
// numbers.forEach((number, index) => {
//     console.log('Index: ' + index + ' Value: ' + number);
// });



const numbers  = [12,42,53,64]
// function multiplyBy2(number,index){
//     console.log(`index is ${index} number is ${number} `)


// }
// numbers.forEach(multiplyBy2)
//dirctly passing callback function 
numbers.forEach(function (number,index){
    console.log(`index is ${index} number is ${number} `)
})

// in the question u need to print the username of every user 
const users=[
    {firstname:"harshit",age:23},
    {firstname:"mohit",age:33},
    {firstname:"nitish",age:53},
    {firstname:"garint",age:50}
]

users.forEach(function(user){
console.log(user.firstname)
})
users.forEach((user)=>console.log(user.firstname))
//alternative is for of loop 

for(let user of users){
    console.log(user.firstname)
}