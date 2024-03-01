
// object creation
// key-value pairs

// you can pass a function, any values(int,boolean,string,etc) even another objects as a value to corresponding key
// keys are by defualt considered as "String" data type in JS
const JS_User = {
    name :()=>{
        console.log("SHUV")
    }
}; 
// JS_User.name()
console.log(JS_User.name())

const JS_User_2 = {
    email : "shuvradip.sarma2021@vitbhopal.ac.in"
}
JS_User_2.email = "shuv@gmail.com"
Object.freeze(JS_User_2) // no more changes in the object is allowed
JS_User_2.email = "shuv2025@gmail.com"
console.log(JS_User_2)


JS_User.greeting = function(){
    console.log(`Hey ${this.name()}!`)
    console.log(`Your Email id is ${JS_User_2.email}`) // 
}
JS_User.greeting()
console.log(JS_User.greeting)