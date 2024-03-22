

// generate a random color using its hex value

const randomColor = ()=>{
    const hex = "0123456789ABCDEF" // hexadecimal range - 0 to 9 then A to F
    let color = '#'
    for(let i=0;i<6;i++)
    {
        color = color + (Math.floor(Math.random() * 16)) // geenrate  random numbers between 1 to 16
    }
    return color
};
let intervalId
const startChangeColor = () => {
    
    
    const changeBgColor = () => {

        document.body.style.backgroundColor = randomColor()
        
    }
    if(!intervalId){
        tervalId = setInterval(changeBgColor,3000) // change background color automatically for an interval of 3 s onclicking start
    }
    
}

const stopChangeColor = () => {
   clearInterval(intervalId)
   intervalId = null
}

// document.getElementById("start").addEventListener("click",startChangeColor())
// document.getElementById("stop").addEventListener("click",stopChangeColor())


document.querySelector('#start').addEventListener('click',startChangeColor)
document.querySelector('#stop').addEventListener('click',stopChangeColor)