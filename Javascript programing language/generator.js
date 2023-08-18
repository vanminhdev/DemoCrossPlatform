// A generator function that yields the set of one digit
function* oneDigitPrimes(a) {
  // Invoking this function does not run the code
  if (a == 2) {
    yield 2; // but just returns a generator object.Calling;
  }
  console.log('1');
  yield 3; // the next() method of that generator runs
  console.log('2');
  yield 5; // the code until a yield statement provides
  console.log('3');
  yield 7; // the return value for the next() method.
}
// When we invoke the generator function, we get a generator
let primes = oneDigitPrimes();
// A generator is an iterator object that iterates the yielded values
primes.next().value; // => 2
primes.next().value; // => 3
primes.next().value; // => 5
primes.next().value; // => 7
primes.next().done; // => true

// Generators have a Symbol.iterator method to make them iterable;
console.log(primes[Symbol.iterator]()); // => primes
// We can use generators like other iterable types
console.table([...oneDigitPrimes(2)]); // => [2,3,5,7]
let sum = 0;
for (let prime of oneDigitPrimes()) {
    console.log("prime", prime);
    sum += prime;
}
console.log(sum); // => 17
