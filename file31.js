//splice method 
// if u want delt or insert in between array we use splice method
// start ,  delete , insert
// it will change original array 

const myArray= ['item1','item2','item3']
//delete

// const deletedItem  = myArray.splice(1,1)
// console.log(deletedItem)
console.log(myArray)
myArray.splice(2,0,'addeed')
// 2nd postion 0 no to be deleted add 'added' at 2nd index 
console.log(myArray)

myArray.splice(2,0,'addeed',"hduch")
console.log(myArray)