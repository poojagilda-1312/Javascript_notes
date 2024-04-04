//computed properties
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

const obj2 ={
    [key1] :value1,
    [key2] :value2
}
console.log(obj2)  //{objkey1: 'myvalue1', objkey2: 'myvalue2'}