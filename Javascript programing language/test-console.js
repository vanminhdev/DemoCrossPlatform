const a = {
    p1: 1,
    p2: 3,
    p3: "abc"
};

const b = {
    p2: 2.5,
    p4: {
        p41: "abc"
    }
};

console.table([a, b]);
console.table({a, b});
console.error(a);

const errorMsg = 'the # is not even';
for (let number = 2; number <= 5; number++) {
  console.log(`the # is ${number}`);
  console.assert(number % 2 === 0, { number, errorMsg });
}
// output:
// the # is 2
// the # is 3
// Assertion failed: {number: 3, errorMsg: "the # is not even"}
// the # is 4
// the # is 5
// Assertion failed: {number: 5, errorMsg: "the # is not even"}