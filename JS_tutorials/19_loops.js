let arr = [1,2,3,4,5,6,7,8,9,10]
console.log((arr.length))
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
}

console.log("-------------------")

let c = 0
while(c<10){
    console.log(c++)
}

console.log("-------------------")

const ar = [1,2,3,4,5]
for(const num of ar) // for-of loop
{
    console.log(num)
}

console.log("-------------")

const obj = { 
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    kt : "kotlin"
}
// looping or iterating in objects using " for-in " loop
for (const key in obj) {
    console.log(`${key} shortcut is for obj[key]`)
}

console.log("------------")

const languages =  ["java","c++","python"]

for (const key in languages) {
    console.log(languages[key])
}

console.log("------------")

// for-each loop
const countries = ["india","usa","mexico","england"]
countries.forEach((item,index,arr)=>{
    console.log(item," ",index," ",arr)}
)

console.log("------------")

// array of objects
const myObj = [
    {
        email:"shuv@gmail.com",
        name : "Shuv"
    },
    {
        email:"caroline@gmail.com",
        name:"caroline"
    },
    {
        email:"shruti@gmail.com",
        name : "Shruti"
    }  
]
// here item stores the reference of each objects in array
myObj.forEach((item)=>{
    console.log(item.email," email id is of ",item.name)
})
