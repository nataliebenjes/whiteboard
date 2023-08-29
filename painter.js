// END GOAL:
// > painter1.paints()
// "Paints green!"
// > painter2.paints()
// "Paints yellow!"
// > painter3.paints()
// "Paints red!"


//painter factory function
const painter = color => ({
    paints: () => `Paints ${color}`
})
//create painter objects with different color preferences
const painter1 = painter("green");
const painter2 = painter("yellow");
const painter3 = painter("red");
//call the paints() method on each painter object and log results
console.log(painter1.paints())
console.log(painter2.paints())
console.log(painter3.paints())