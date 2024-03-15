

const map = new Map() //stores in unique key-value pairs
map.set('IN','India')
map.set('USA','United States of America')
console.log(map)
// iterate in maps using " for-of " loop
for (const key of map) {
    console.log(key )
}

for (const [key,value] of map) {
     console.log(key,":-",value)
}

// cannot iterate in objects like the below way
/*
const myObject = {
    "team1":"PSG", //key-value pairs in object
    "team2":"FCB",
    "team3":"City"
}
for (const [key,value] of myObject) {
    console.log(key,":-",value)
}
*/

