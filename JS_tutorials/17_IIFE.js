// Immediately Invoked Function Expressions(IIFE)

// ()()    // 1st () is function definition
          //  2nd () is function-execution call

// Syntax - 1
(function sum()
{
    console.log(2+3)
})(); // semicolon is used to tell IIFE to stop execution 

// Syntax - 2

( () => {
    console.log(2+3)
} )();

( (name) => {
    console.log(`name is ${name}`)
}) ("SHUV") // SHUV is passed as parameter value to name




