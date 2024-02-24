


// Primitive data types are stored in Stack memory
// Non primitive data types are stored in Heap memory


// we get a copy of the varible used in stack memory
// we get a reference(address location) of the variable declared in heap memory

let name = "SHUV"
let anotherName = name
anotherName = "MICHAEL"

console.log(name)
console.log(anotherName)

let user_1 = {
    email : "shuvradip.sarma2021@vitbhopal.ac.in",
    college : "VIT bhopal"

}

let user_2 = user_1
user_2.email = "shuv@gmail.com"

// user_1 and user_2 both point to same heap space so get the same output
console.log(user_1.email)
console.log(user_2.email)

