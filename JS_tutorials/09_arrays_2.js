const arr1 = ["UCLA","STANFORD","RUTGERS","PRINCETON","CMU","MIT"]
const arr2 = ["CALIFORNIA","SAN DIEGO","NJ","PT","ATL","BOSTON"]

arr1.push(arr2)
console.log(arr1)

arr1.concat(arr2)
console.log(arr1)

const arr = [2,4,6,[8,12,10],[24,30,[40,60]]]

const real_arr =  arr.flat(Infinity)
console.log("array = ",real_arr)
