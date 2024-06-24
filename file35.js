//optional chaining   ?.

const user = {
    firstName:"harshit",
     address:{houseNumber:'1234'}  //nested object 

}
console.log(user?.firstName)
console.log(user.address)  // adrress  is a object  {houseNumber :'1234'}
console.log(user?.address?.houseNumber) 
// in case of optional chaining it will give undefined 
// if it not present ottherwise throw error

 
