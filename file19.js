//object inside array 
// very useful  in real world application 

const users = [
    {userId: 1, firstName: 'harshit',gender: 'male'},
    {userId: 2, firstName: 'kiwi',gender: 'female'},
    {userId: 3, firstName: 'karan',gender: 'male'}]

    console.log(users)

    for(let user of users){
        // console.log(user )
        console.log(user.userId)
    }
