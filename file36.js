//method  
//if there is function inside object then it is called method
//function iside object
// we use this to acces value
//this vo object hai jo object is funciton ko call kr rha hai
const person ={
    firstName :'pooja',
    age: 8,
    about : function(){
        console.log(this)   //{firstName: 'pooja', age: 8, about: ƒ}
        console.log(`person name is ${this.firstName} and age is ${this.age} `)
    }
}

// how to access this method
person.about()// 

