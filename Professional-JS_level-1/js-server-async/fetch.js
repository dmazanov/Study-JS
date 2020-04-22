'use strict';

const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
  return fetch(url).then( response => {
    return response.json();
  });

}

// GET request
sendRequest('GET', requestURL)
   .then( data => console.log(data))
   .catch( err => console.log(err));


// Post request
const body = {
  name: 'Mark',
  age: 27
};

// sendRequest('POST', requestURL, body)
//   .then( data => console.log(data))
//   .catch( err => console.log(err));