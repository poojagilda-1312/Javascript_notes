//clone  using object.assign

// memory 
const obj ={
    key1: "value1",
    key2: "value2"

}
// const obj1 = obj
console.log(obj)  // {key1: 'value1', key2: 'value2'}

// console.log(obj1)   // {key1: 'value1', key2: 'value2'}
obj.key3 = "value3"

console.log(obj)
// console.log(obj1) // to avoid copying of new kkey we can use spread operator 
const obj1 = {...obj}   // using spread operator 
console.log(obj1)

const obj3 = Object.assign({key4:"value4"},obj)
console.log(obj3)

