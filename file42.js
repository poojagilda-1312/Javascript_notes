const userMethods={
    about :  function(){
        return `${this.firstName} is ${this.age} years` ;
    },
        is18: function(){
        return this.age>=18;
    },
    sing : function(){
        return   'tootn eriovr vrjvterv hn' ;
    }
    }
    function createUser(firstName,lastName,email,age,address,){
        const user = {}
        user.firstName=firstName,
        user.lastName =lastName,
        user.email= email,
        user.age= age,
        user.address = address,
       user.about= userMethods.about,
       user.is18 = userMethods.is18,
       user.sing= userMethods.sing
        return user;
    
    }
    const user1 = createUser("pooja","gilda","pooja@gmail.com",12,'patma gali ')
    console.log(user1.about())
    console.log(user1.sing())