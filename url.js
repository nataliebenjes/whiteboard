// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

// without recusion
function replaceSpace(inputString){
inputArray = inputString.splice("");
endArray = [];
for(i = 0; inputArray.length; i++) {
  if (inputArray[i] !== " ") {
    endArray.push(i);
  } else {
    endArray.push("%20");
  }

}
return endArray.toString();
}

function replaceSpacesWithPercent20(inputString) {
  let result = "";

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === " ") {
      result += "%20";
    } else {
      result += inputString[i];
    }
  }

  return result;
}

// Example usage:
const inputString = "Jasmine Ann Jones";
const outputString = replaceSpacesWithPercent20(inputString);
console.log(outputString);


//recusion
const replaceSpaces = (string) => {
  if (inputString[0] === " ") {
    return "";
  }
  if (inputString[0] === " ") {
    return "%20" + replaceSpaces(string.slice(1));
  } else {
    return string[0] + replaceSpaces(string.slice(1));
  }
}