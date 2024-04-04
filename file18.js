//object destructuring
const band = {
    bandName : "led zepellian",
    famousSong : "stairway to heaven"
}

// const bandName1 = band.bandName
// const famousSong = band.famousSong
// console.log(bandName1, famousSong) //led zepellian stairway to heaven

//shortcut above   4 line code is converted into  1 line u can access easily with variable name also   
//  const {bandName,famousSong} = band
// console.log(bandName)     //led zepellian 
//  bandName = "queen"  
//  console.log(bandName)   //Assignment to constant variable

//  let  {bandName,famousSong} = band
//  bandName = "queen"  
//  console.log(bandName)  //it will not give error  


 const band1 = {
    bandName : "led zepellian",
    famousSong : "stairway to heaven"
}
// if i want to give it other name so  we use colon 
// const {bandName:newNAme ,famousSong} = band1
// console.log(newNAme)


const band2 = {
    bandName : "led zepellian",
    famousSong : "stairway to heaven",
    year : 1989,
    anotherFamous : "kasmir"
}

const {bandName,famousSong, ...restProps } = band2
console.log(restProps)    // object will come  //{year: 1989, anotherFamous: 'kasmir'}


 