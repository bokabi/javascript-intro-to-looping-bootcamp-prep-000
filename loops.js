function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1){
      array.unshift("I am 1 strange loop.");
    }
    else {
    //  array[i] = `I am ${i} strange loops`;

    array.unshift(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return "done";
}




function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
  }

  do {
    array.shift(array.length);
  }
  while (array.length > 0 && maybeTrue());
  return array;
}