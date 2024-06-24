//FIRST CLASS FUNCTION 
// FUNCTION EXPRESSION
var b = function (param1){
    console.log(param1)
    
}
b(function (){

})      //  passing function as anonymonus or passing function as value 


var c = function(params2){
    console.log(params2)
}
function xyz(){
    
}
c(xyz)   //passing another function inside funtion 

var d  = function(){
    return function xyz(){

    }
}
console.log(d())   // returning anonymonus function from function 
