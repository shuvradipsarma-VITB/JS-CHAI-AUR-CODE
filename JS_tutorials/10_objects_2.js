const user = new Object() // singleton object only one instance
const user2 = {} // multiple instances possible
console.log(user)

console.log(user2)

//In JavaScript, objects are dynamic data structures that can have properties added to them at runtime. 
//When you define an object using the object literal syntax {}, you can add properties to it dynamically, 
//even if those properties have not been declared beforehand.

user2.email = "shuv@gmail.com"
user2.isLoggedIn = "true"

console.log(user2)

// nesting inside objects are possible by adding another object as value to a key

const regularUser = {
    email:"shuv@gmail.com",
    fullName: {
        userName:{
            first:"Shuvradip",
            last:"Sarma"
        }
    }   
}
console.log("email id = ",regularUser.email)

console.log("-----------------------")

console.log("first name is =",regularUser.fullName.userName.first)

// another way to adding objects inside an object

const obj1 = {x: 10, y:20}
const obj2 ={z:40,w:60}

const obj3 = Object.assign(obj1,obj2)
// const obj3 = {obj1,obj2}
console.log(obj3)


// array of objects

const users3 = [
    {
        regNo:"21BCE10487",
        email:"shuv@gmail.com"
    },
    {
        regNo:"21BCE10240",
        email:"raj@gmail.com"
    },
    {
        regNo:"21BCE11020",
        email:"shaym@gmail.com"
    },
    {
        regNo:"21BCE10486",
        email:"sakshi@gmail.com"
    },
]

console.log(users3[1].email) // object at index 1 we are referring
console.log("-----------------------")
console.log(users3)
console.log("-----------------------")
console.log(Object.keys(users3))
console.log("-----------------------")
console.log(Object.values(users3))
console.log("-----------------------")
console.log(Object.entries(users3))