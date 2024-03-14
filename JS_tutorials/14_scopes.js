
// using "let" keyword decleration - based on the 
// scope level decleration i.e block-scoped
// or global-scoped, 

let a = 300 // global scoped variable
var c = 400
if(true){
    let a = 10 // a block-scope variable
    const b = 20 // b block-scope varible
    var c = 30 // c global variable
    console.log("blocked scope a = ",a)
}
//since scoped variable cannot be accessed outside
console.log("global scoped a = ",a)  // prints the value of global scoped a
// console.log(b)
console.log(c) // can be accesses