//nested destructuring 

const users = [
    {userId: 1, firstName: 'harshit',gender: 'male'},
    {userId: 2, firstName: 'kiwi',gender: 'female'},
    {userId: 3, firstName: 'karan',gender: 'male'}]

//diff object
    const [user1,user2,user3] = users
    console.log(user1)   //{userId: 1, firstName: 'harshit', gender: 'male'}

    const [{userId: newId,firstName},,{gender}] = users
    console.log(gender,newId,firstName)