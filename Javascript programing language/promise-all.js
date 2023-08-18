// We start with an array of URLs
const urls = [
  "https://jsonplaceholder.typicode.com/posts"
];
let promises = urls.map((url) => fetch(url).then((r) => r.json()));

Promise.all(promises)
  .then((bodies) => {
    /* do something*/
  })
  .catch((e) => console.error(e));
