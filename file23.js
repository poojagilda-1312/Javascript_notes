//function inside function 

const app =()=>{
    const mufunc =()=>{
        console.log("hello forom myfunc")
    }
    console.log("inside app")
}
app()





//lexical scope 
function myApp(){
    const myVar = "value1"
    function myfunc(){
        const myVar = "value57"
        console.log("myfunc function calling",myVar)
    }
 
    console.log(myVar)
    myfunc()
}

myApp()



const myfunc2 = function(){}
const myfunc3 = ()=>{}