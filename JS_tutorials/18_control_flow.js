
// IF statements

const isUserLoggedIn = true
if(2 === '2') // === (strict equals) checks value and data type match both
            // == checks only value match
{
    console.log("executed")
}

/*
switch (key)  // key is month and value are month-number
{
    case value:
        
        break;
    case value:
        
        break;

    default:
        break;
}
*/

const month = 3 // March

switch (month)  // key is month and value are month-number
{
    case 1:
        console.log("jan")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("mar")
        break;
    case 4:
        console.log("apr")
        break;
    case 5:
        console.log("may")
        break;
    case 6:
        console.log("jun")
        break;
    case 7:
        console.log("july")
        break;

    default:
        console.log("wrong key")
        break;
}

