// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true
// NESTED LOOP
function checkIfUnique(inputString) {
  for(let i = 0; i< inputString.length; i ++) {
    for (let j = i + 1; j < input.length; j++) {
      if (inputString[i] === inputString[j]){
        return false;
      }
    }
  }
}

function areAllCharactersUniqueRecursively(inputString, currentIndex = 0) {
  if (inputString.slice(currentIndex + 1).includes(inputString[currentIndex])){
    return false;
  }
  return areAllCharactersUniqueRecursively(inputString, currentIndex + 1)
}
