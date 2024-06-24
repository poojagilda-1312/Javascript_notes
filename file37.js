//call apply  bind  

function hello(){
    console.log("hello world")
}

hello.call()// hello world 


const user1 = {
    firstName : 'harshit',
    age :12,
    about : function(hobby,favMusician){
        console.log(this.firstName,this.age,hobby,favMusician)
    }
}
const user2 = {
    firstName : 'mohit',
    age :128,
  
}
user1.about.call()  // undefined undefined
user1.about.call(user2,'guitar','mozrat')



//or 
 function about(hobby,favMusician){
    console.log(this.firstName,this.age,hobby,favMusician)
}

const user3 = {
    firstName : 'harshit',
    age :12,
  
}
const user4 = {
    firstName : 'mohit',
    age :128,
  
}

const user5 = {
    firstName : 'mpoojt',
    age :1568,
  
}

about.call(user4,'singing','arijit')

//apply  here we pass in array 
about.apply(user3,["guiter","bach"])



//bind 
const func = about.bind(user5,"guitar","bach")


func();


































