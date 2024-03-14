function one()
{
    const username = "SHUV"
    function two()
    {
        const website = "youtube"
        console.log(username)   
    }
    // console.log(website) // website cannot be used since out-of-scope access
    two() //can be called from here since inside scope of accessibility
}
one()
// two() //cannot be called from here since out-of-scope access
          // two() is inside scope of one() 

if(true)
{
    const username = "SHUV"
    if(username == "SHUV")
    {
        const website = "youtube"
        console.log(username+website)
    }
    
}          
// hoisting happening, JS compiler will take addone function
// decleration block above console.log(addone)
console.log(addone(2))
function addone(num){
    return num+1
}

// hoisting not possible
console.log(addTwo(2))
const addTwo = function(num){
    return num+2
}