
function greeting()
{
    console.log("hello world")
}
// driver code
// greeting()

function add(a, b)
{
    return (a+b)
}
const result = add(2,3)
console.log("output = ",result)

function loginUser(username){
    if(username == undefined)
    {
        return `please enter a username` // string interpolation
    }
    return `${username},just logged in` // string interpolation
}
console.log(loginUser()) // lets say no value is passed


function loginUser(username = "Shuv") // default value as "Shuv" is passed as parameter
{
    if(!username) // username is false i.e donot exists
    {
        return `please enter a username` // string interpolation
    }
    return `${username},just logged in` // string interpolation
}
console.log(loginUser()) // lets say no value is passed