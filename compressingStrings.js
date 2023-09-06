//iterate through the input string

function compressString(inputString) {
  let compressedString = "";
  let count = 1;
  for (let i = 0; i < input.length; i++)
  //check to see if you have two consec letters
    if (inputString[i] === inputString(i + 1)) {
      //if yes, increase count
      count++;
    } else {
      if (count === 1) {
        //there havent been any consecutive counts so far, so you don't need to include any number
        compressedString.push(inputString[i]);

      } else {
        //there has been one consecutive number before, but not this go around, so you do need to record the count
        compressString.push(count.toString(), inputString[i]);
      }
      //letters are already recorded, time to reset the count
      count = 1;

    }
    return compressedString;
}

function compressRecursive(string, index) {
  if (index === string.length){
    return '';
  }
  let count = 1;
  for (let i = index + 1;)

}