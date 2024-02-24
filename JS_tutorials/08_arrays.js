// Arrays in Java are resizable and can
// contain values of different data types

const myArray = [2,4,"SHUV"]

console.log(myArray[2])

const arr = new Array(2,4,6,8)

// array methods

arr.push(4)
arr.pop()
console.log(arr)
console.log(arr.includes(4))
console.log(arr.indexOf(2))

const st = arr.join() // arr is converted to string with comma separated
console.log(st)

// slice(start_index, end_index) donot alter the changes in the original array
// splice(start_index, end_index) alter the changes in the original array

console.log("A = ",arr)
console.log(arr.slice(1,3))


const new_arr = arr.splice(1,3) // new_arr stores the elements from 1,2,3
console.log("B = ",arr) // print the arr by removing elements at indices 1,2,3
console.log(new_arr) // print out elements at indices 1,2,3

