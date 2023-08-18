async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

// Usage: Call the fetchData function with the URL using async/await
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

(async () => {
  try {
    const fetchedData = await fetchData(apiUrl);
    //công việc tiếp theo
    console.log('Fetched data:', fetchedData);
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();
