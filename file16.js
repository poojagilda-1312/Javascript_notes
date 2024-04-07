//computed properties

const obj12 = {
    name: "dillion",
    age: 1000,
      }
//   You can see that name and age are static keys. They do not come from anywhere 
//   – they are not computed (calculated). These keys are directly added to the object.
// property name that comes from an expression executed during runtime? 
// Such an expression can be a concatenation, function call, or a conditional expression, 
// to name a few.

// In such cases, you do not know the property name ahead of time. And this is where you use
//  the computed property names feature.

// To use computed values for property names, you use square brackets and pass the expression.
const key1 = "objkey1";
const key2 = "objkey2";
const value1 = "myvalue1"
const value2 = "myvalue2" 

const obj = {
    
}
obj[key1] = value1
obj[key2]= value2
console.log(obj)

const obj1 = {
    key1 :value1,
    key2:value2
}
console.log(obj1)  // {key1: 'myvalue1', key2: 'myvalue2'}
//this is the right way using square bracket 
const obj2 ={
    [key1] :value1,
    [key2] :value2
}
console.log(obj2)  //{objkey1: 'myvalue1', objkey2: 'myvalue2'}

// example using a conditional expression as a property name:

// const age = 10

// const key1 = "ageIsMoreThan5"
// const key2 = "ageIsMoreThan10"

// const obj = {
//   name: "dillion",
//   [age > 10 ? key2 : key1]: true       
// }

// console.log(obj)
// {
//   name: "dillion",
//   ageIsMoreThan5: true
// }

