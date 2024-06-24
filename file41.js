    //synchronous programing vs asynchronous programing
    // synchronous programing 
        // console.log("script satrt")   //1 
        // for(let i =1; i<1000;i++){
        //     console.log("isside for loop ")   //2
        // }
        // console.log("script end")  //3

    //this is a blocking code ex like hume backend se data fetch krna hai tb tk vo data nhi aayega tb tk baki
    // ki website bhi load nhi hogi toh yeh blocking event bn jaega humare lie 

    // javascript is a synchronous programing single threaded language 
    //setTimeout
    console.log("script start")
    function hello(){
        console.log("hello world")
    }
    //setTimeout takes function as a inpput and time parametr
         setTimeout(hello,1000)    // 1 sec delay 
         console.log("script end")


const buckets=['coffe','chips','vegetables']
 //  promise k andr excutor function rhta hai 
const friedRice   =  new Promise((resolve,reject)=>{
if(buckets.includes("coffe")& buckets.includes("chips")){
    resolve("friedrice is ready") // method  value  can be string array object
}
else{
    reject("item is missing")
}
})
//produce
//consume
       friedRice.then((friedrice)=>{
       console.log(friedrice)
        },
        (error)=>{
console.log(error)
})

// another way to consume promise 
// friedRice.then((friedrice)=>{
//     console.log(friedrice)
// }).catch((err)=>{
//     console.log(err)

// })














