//for loop in array

let fruits= ["apple","banana","grapes"];

console.log(fruits.length)
let fruits2 = []
for(let i =0 ; i <=fruits.length -1 ; i++){
    fruits2.push(fruits[i].toUpperCase())
}
console.log(fruits2)   // ['APPLE', 'BANANA', 'GRAPES']

