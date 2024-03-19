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

let userBooks = books.filter( (bk) => bk.genre == "fiction" )
console.log(userBooks)

userBooks = books.filter( (bk) => { return bk.publish >= 1950}) // when scope is opened return keyword is used.
console.log(userBooks)


// maps

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const sum = myNums.map( (index) => index+10)
// console.log("output = ",sum)

// map is used to change the elements inside an array with the operation given.
// filter is used to extract the elements that meet the condition given

const new_Nums = myNums.map( (num) => num*10).map( (num) => num + 20).filter( (num) =>  num % 6 == 0 ) 
console.log("output = ",new_Nums)

// Reduce

const  marks = [10,20,30,40,50]

const total_marks = marks.reduce( (acc, curr_val) => {
    console.log(`accumulator = ${acc} and current value = ${curr_val}`)
    return acc + curr_val
},0)

console.log(total_marks)

const shoppingCart = [
    {
        item : "maggi",
        price : 20
    },
    {
        item : "coffee",
        price : 350
    },
    {
        item : "soda",
        price : 70
    },
    {
        item : "biscuits",
        price : 40
    }
]

const priceTopay = shoppingCart.reduce( (acc,item) => acc + item.price,0 )

console.log("total price to pay = ",priceTopay)
