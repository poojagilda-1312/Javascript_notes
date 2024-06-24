const user1 ={
    firName:"oooja",
    age :3,
    about : function(){
        console.log(this)  //window ko represent krta hai
        console.log(this.firName,this.age)
    }
}
//dont do this mistake 
//const myFunc= user1.about
//myFunc()    //undefined undefined it means this name ki property available nhi hai
const myFunc =user1.about.bind(user1)
myFunc()   


//arrow function 
const user2 ={
    firName:"oooja",
    age :3,
    about : ()=>{
        console.log(this)  //window ko represent krta hai
        console.log(this.firName,this.age)  
    }
}
user2.about()   //undefined undefined

//arrow function me this nhi hota hai , vo  apne surrounding ka this hi leta hai 
//iska this user2 nhi hoga ek level up hoga mtlb window hoga 

// another way to write funciton directly 
const user3 ={
    firName:"oooja",
    age :3,
    about(){
        console.log(this.firName,this.age)  
    }
}

user3.about()  //ooja 3
