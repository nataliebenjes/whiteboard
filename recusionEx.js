let counter = 0
for (let i = 0; i < 3 ; i++ ) {
  counter += 1
}

//same function written recusively

const incrementCounter = (counter) => {
  if (counter >= 3) {
    if (counter >= 3) {
      return counter;
    }else {
      consol.log(counter)
      return incrementCounter(counter + 1);
    }
    }
  }

  incrementCounter(0);


function recurse() {
  // function code
  recurse();
  //function code
}

//program to count down number to 1

function countDown(number) {
  //display the number
  console.log(number);
  const newNumber = number - 1;

  // base case
  if (newNumber > 0) {
    countDown(newNumber);
    
  }
}