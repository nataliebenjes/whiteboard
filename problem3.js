// The throw() function should determine the distance and speed a battle robot can throw a spear. This function should be unary, so you will need to use currying.

// Next, add the throw() function to multiple battle robots. A result might look something like this:

// > battleRobot1.throw();
// "The battle robot throws the spear ${100} yards at ${200} miles per hour!"

// result:
// battleRobot1.throw();
// "The battle robot throws the spear 100 yards at 200 miles per hour!"

function throws (yards) {
  return function(mph) {
    return `The battle robot throws the spear ${yards} yards at ${mph} miles per hour!`
  }
}

const battleRobot1 = {
  throws: throws(100)(200)
}

console.log(battleRobot1.throws())

