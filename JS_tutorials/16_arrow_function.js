const user = {
    username : "SHUV",
    email : "shuv@gmail.com", 
    college : "VIT",
    welcome_message : function(){
        console.log(`${this.username}, welcome to JS`) // this refers to the current object i.e user with values inside the scope 
        console.log(this)
    } 
}
user.welcome_message()
user.username = "NEY"
console.log(this) // this will now refer to global scope object whcih is empty

// ARROW FUNCTIONS
/* Syntax - 1
const sum = (a,b) => {
    return (a+b) // explicit return keyword used
}
console.log(sum(2,3))
*/
/* Syntax-2
const sum = (a,b) => (a+b) // implicit return
console.log(sum(2,3))
*/

// const function_name = (parameters) => ({ object i.e key:value pair })
const sum = (a,b) => ({name:"SHUV"}) // function has 2 parameters but object is returned
console.log(sum(2,3))
