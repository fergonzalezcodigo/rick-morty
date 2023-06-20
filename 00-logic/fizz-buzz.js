const fizzBuzz = (num) => {
  const array = []
  for (let index = 1; index <= num; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      array.push("Fizz buzz");
    } else if (index % 3 === 0 ) {
      array.push("Fizz");0
    } else if (index % 5 === 0 ) {
      array.push("Buzz");
    } else {
      array.push(index)
    }
  }
  return array
};
