// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi", 7, 53]

// Output: [7, 9, "hi", 12, 53]

function removeDuplicates(input) {
  newArray = [];
  for(i = 0; input.length; i ++) {
    if (newArray.indexOf(input[i]) === -1)
    newArray.push(input[i]);
  }
return newArray;
}

//solved recusrsively

function removeDuplicatesRecusrively(input, index = 0) {
  if (index === input.length) {
    return input[index];
  }
  const rest = removeDuplicatesRecusrively(input, index + 1);
  if (rest.indexOf(input[i]=== -1){
    return input[i], ...rest
  })
}
