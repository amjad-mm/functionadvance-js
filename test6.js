function makeCounter() {
  let count = 0;  // this variable lives inside

  return function() {
    count = count + 1;
    return count;
  };
}

const counter = makeCounter();
counter(); // → 1
