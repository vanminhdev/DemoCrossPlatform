function fetchData(url, cbSuccess, cbError) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => cbSuccess(data))
    .catch((error) => cbError(error));
}

function handleData(data) {
    console.log(data.map(item => item.title));
    //console.log("Fetched data:", data);
}

function handleError(error) {
    console.log("error:", error);
}

const apiUrl = "https://jsonplaceholder.typicode.com/posts";
fetchData(apiUrl, handleData, handleError);
