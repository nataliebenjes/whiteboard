const counterFunction = () => {
  let counter = 0;
  return () => {
    counter ++;
    return counter;
  }
}

const incrementer = counterFunction()