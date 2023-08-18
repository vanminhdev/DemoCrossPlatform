const reverseString = str => {
//   return str.split('').reverse().join('');
  return [...str].reverse().join('');
}

const originalString = 'Hello, world!';
const reversedString = reverseString(originalString);
console.log(reversedString);
