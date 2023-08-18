function stepOne(callback) {
  setTimeout(() => {
    console.log("Step 1 completed");
    callback();
  }, 1000);
}

function stepTwo(callback) {
  setTimeout(() => {
    console.log("Step 2 completed");
    callback();
  }, 1500);
}

function stepThree(callback) {
  setTimeout(() => {
    console.log("Step 3 completed");
    callback();
  }, 1200);
}

function startProcess() {
  console.log("Starting process...");
  stepOne(() => {
    stepTwo(() => {
      stepThree(() => {
        console.log("Process completed");
      });
    });
  });
}

startProcess();
