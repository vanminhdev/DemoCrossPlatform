import readline from 'readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (answer) => {
  const number = parseFloat(answer);
  if (!isNaN(number)) {
    console.log(`You entered the number: ${number}`);
  } else {
    console.log("Invalid input. Please enter a valid number.");
  }
  rl.close();
});
