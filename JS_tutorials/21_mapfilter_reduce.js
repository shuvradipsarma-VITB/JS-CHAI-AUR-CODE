const countries = ["india","usa","mexico","england"]
const values = countries.forEach((item)=>{
    console.log(item)
})
console.log(values)

console.log("-------")

const nums = [1,2,3,4,5,6,7,8,9,10]
// syntax - nums.filter(callback_function)
// nums.filter( (x) => contition) // here x is the index of array element(can be objects,values,functions,mixture of functions & objects,etc)
const newNums = nums.filter( (n)=>n>4 ) // returns the array of numbers > 4
/*
const newNums = nums.filter( (n)=>{
    return n>4 // if written n>4 within curly braces need to write return keyword to return
})
*/
console.log("output = ",newNums)

console.log("--------------")

// filter the arr with elements > 4 without filter method
const arr = []
arr.forEach( (n) => {
    if (n>4) {
        arr.push(n)
    }
})

console.log("-----------")
 
// array of objects
const books = [

    {
        title:"book 1",
        genre:"fiction",
        publish:1980
    },
    {
        title:"book 2",
        genre:"fiction",
        publish:1990
    },
    {
        title:"book 3",
        genre:"adventure",
        publish:1940
    },
    {
        title:"book 4",
        genre:"thriller",
        publish:2000
    }
]

const userBooks = books.filter( (bk) => bk.genre == "fiction" )
console.log(userBooks)


