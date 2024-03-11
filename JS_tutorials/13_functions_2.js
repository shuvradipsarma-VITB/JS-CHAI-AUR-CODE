
function addCartPrice(...num) // rest operator( " ... ") - includesvalues in an array
{
    return num
}
console.log(addCartPrice(100,200,300,400))

function addCartPrice(val1,val2,...num) // rest operator( " ... ") - includesvalues in an array
{
    return num
}
console.log(addCartPrice(100,200,300,400)) // val1 = 100, val2 = 200 and rest values will be stored in an array 

const user = {
    name : "Shuv",
    email : "shuv@gmail.com"
}
function handleObject(anyObject) // anyObject is a parameter which can be of any type
{
    console.log(`User name is ${anyObject.name} and email is ${anyObject.email}`)
}
handleObject(user)