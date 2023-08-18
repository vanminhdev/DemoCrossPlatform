// We start with an array of URLs
const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/comments",
];
let promises = urls.map((url) => fetch(url).then((r) => r.json()));
console.log(promises);

Promise.all(promises)
  .then((bodies) => {
    console.log(bodies[0]); //response của api đầu tiên tương ứng với chỉ số 0
    console.log(bodies[1]); //response của api thứ 2 tương ứng theo chỉ số 1
  })
  .catch((e) => console.error(e));
