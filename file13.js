// array destructring 
const myArray = ["value1", "value2","value3"]
// let myvar1 =  myArray[0];

// let myvar2 = myArray[1];
// console.log(myvar1);

// let [myvar1,myvar2] = myArray;
// console.log("value of myvar1 before",myvar1)
// myvar1= "value change "
// console.log("value of myvar1",myvar1)
// console.log("value of myvar2" , myvar2)

// const  [myvar3,myvar4] = myArray;
// console.log("value of myvar1 before",myvar3)
// myvar3= "value change "      // ****** errorrr is 'Assignment to constant variable'.
// console.log("value of myvar1",myvar3)
// console.log("value of myvar2" , myvar4)

// diiferent cases you encounter 
// const myArray  =["value1"]
// let [myvar1,myvar2,myvar3] = myArray
// console.log("value of " myvar2) //undefined 
// console.log("value of " myvar3) //undefined



// you want to store value2 in myvar2 how you will do that lets see
//phle bydefault values aati thi now hum index skip kr dege extra comma lga k 
const myArray1 = ["value1", "value2","value3" ,"value4","value5","value6"]
let [myvar11, ,myvar22] = myArray1;
console.log(myvar22)  // value3 

let [myvar1,myvar2,...myNewArray] = myArray1

console.log(myNewArray) // it will print all the remaining value ['value3', 'value4', 'value5', 'value6']




