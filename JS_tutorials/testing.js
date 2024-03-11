var greet = function () { 
    console.log("Welcome to GeeksforGeeks!"); 
}; 
  
greet(); 

var teams = ["PSG","FCB","RMA","MCI","CHE","LIV","ARS"]
for(var i = 0;i<teams.length;i++)
{
    console.log(teams[i]+" ")
}
var users = {
    stud1:{ name1 : "SHUV", age1:20},
    stud2:{ name2 : "NEY", age2:31}
}
console.log(users.name1)
console.log(users.age1)

console.log("------------------")

console.log([1,2] == [1,2]) 

console.log("------------------")


const str = "hi i am shuv";

var result = "";

for (let i = 0; i < str.length; i++) {
    // Capitalize the first character of the current word
    if (i == 0 || str[i - 1] == " ") // when 'i' is at 1st character of each words in string
    {
        result += str[i].toUpperCase();
    } 
    else 
    {
        result += str[i];
    }
}

console.log(result); // Output: "Hi I Am Shuv"


