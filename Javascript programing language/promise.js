// Define the fetch function using a callback
function fetchData(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
}

// Callback function to handle the fetched data
function handleData(error, data) {
  if (error) {
    console.error('An error occurred:', error);
  } else {
    console.log('Fetched data:', data);
  }
}

// Usage: Call the fetchData function with the URL and callback
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
fetchData(apiUrl, handleData);
