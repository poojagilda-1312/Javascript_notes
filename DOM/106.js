//get multiple elements using getElements by class name 
// const navItems = document.getElementsByClassName("nav-item")  //html collection
//console.log(navItems)  // array like objects 
//array like objects  =---> indexing, length property
// console.log(typeof navItems[0])  //object


        
// for (let i = 0 ; i <navItems.length; i++){
//     console.log(navItems[i])
// }
const navItems = document.getElementsByTagName("a")
console.log(navItems) 
// for (let i = 0; i <nav.length;i++){
//     const navItem = nav[i]
//      navItem.style.backgroundColor= "#fff"
//      navItem.style.color =  "green"
//      navItem.style.fontWeight = "bold"
// }
for(let navItem of navItems){
         navItem.style.backgroundColor= "#fff"
         navItem.style.color =  "green"
         navItem.style.fontWeight = "bold"
}


// get multiple elements items using querySelectorAll
const navItems1 = document.querySelectorAll(".nav-item")
console.log(navItems1[1]) // node List 