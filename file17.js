//spread operator  in array 
const arr = [..."abc"]
console.log(arr) //   ['a', 'b', 'c']
const arr1 = [..."123245677"]
console.log(arr1)  //['1', '2', '3', '2', '4', '5', '6', '7', '7']


//spread operator  in objects 
//how to create new object 
// giving same key twice so it will override the latest value 
// const obj1 = {
//     key1 : "value1",
//     key2 : "value2",
//     key1 : "repeating key "   // it will overide the value 
// }
// // console.log(obj1)

// const obj2 = {
//     key3 : "value3",
//     key4 : "value4",
// }

// const newObject = {
//     ...obj1, ...obj2
// }
// console.log(newObject)

//***** diff case ****
//in this case both obj having same key with diff value in case of spread operator it will override again 
// with value that is spreading last 
const obj1 = {
    key1 : "value1",
    key2 : "value2",
      // it will overide the value 
}
// console.log(obj1)

const obj2 = {
    key1 : "repeating key ",
    key3 : "value3",
    key4 : "value4",
}
 //how to create new object
const newObject = { ...obj1,...obj2}
console.log(newObject) 
 //{key1: 'repeating key ', key2: 'value2', key3: 'value3', key4: 'value4'}



// we can add key also in the new object 

const newObject1 = { ...obj1,...obj2, key69:"value45"}
console.log(newObject1) 
//{key1: 'repeating key ', key2: 'value2', key3: 'value3', key4: 'value4', key69: 'value45'}











