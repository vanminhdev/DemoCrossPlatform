// fetch(documentURL) // Make an HTTP request
//   .then((response) => response.json()) // Ask for the JSON body of the response
//   .then((document) => {
//     // When we get the parsed JSON
//     return render(document); // display the document to the user
//   })
//   .then((rendered) => {
//     // When we get the rendered document
//     cacheInDatabase(rendered); // cache it in the local database.
//   })
//   .catch((error) => handle(error)) // Handle any errors that occur
//   .finally(() => {
//     console.log("always run");
//   });

// fetch("/api/user/profile").then((response) => {
//   // When the promise resolves, we have status and headers
//   if (
//     response.ok &&
//     response.headers.get("Content-Type") === "application/json"
//   ) {
//     // What can we do here? We don't actually have the response body yet.
//   }
// });

// // We start with an array of URLs
// const urls = [/* zero or more URLs here */];
// // And convert it to an array of Promise objects
// let promises = urls.map((url) => fetch(url)
//     .then((r) => r.text()));
// // Now get a Promise to run all those Promises in parallel
// Promise.all(promises)
//     .then((bodies) => { /* do something with the array of strings */ })
//     .catch((e) => console.error(e));

// function getJSON(url) {
//     return fetch(url).then((response) => response.json());
// }

// function getHighScore() {
//   return getJSON("/api/user/profile").then((profile) => profile.highScore);
// }

function wait(duration) {
  // Create and return a new Promise
  return new Promise((resolve, reject) => {
    // These control the Promise
    // If the argument is invalid, reject the Promise
    if (duration < 0) {
      reject(new Error("Time travel not yet implemented"));
    }
    // Otherwise, wait asynchronously and then resolve the Promise.
    // setTimeout will invoke resolve() with no arguments, which means
    // that the Promise will fulfill with the undefinedvalue.
    console.log('start');
    setTimeout(resolve, duration);
  });
}

wait(1000).then(() => {
    console.log('run');
}).then;