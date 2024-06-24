const obj1 ={
    key1:'value1',
    key2:'value2'
}
const obj2 = Object.create(obj1)
console.log(obj2) // {} empty object return 
obj2.key3 ='value3'
obj1.key2= 'unique' // high priority ,means it will check in its object first then it will go to the obj1
console.log(obj2)    //output
// {key3: 'value3'}
// key3
// : 
// "value3"
// [[Prototype]]
// : 
// Object
// key1
// : 
// "value1"
// key2
// : 
// "unique"

//__proto__
// official ecamscript documentation 
//[[prototype]] 
// [[prototype]] , __proto__ both are same in the browser

// obj2 is giving obj1 in proto
