'use strict';

const requestURL = 'https://jsonplaceholder.typicode.com/users';

const xhr = new XMLHttpRequest();
xhr.responseType = 'json';

xhr.open('GET', requestURL);

xhr.onload = () => {
  if (xhr.status >= 400 ) {
    console.error(xhr.response);
  } else {
    console.log(xhr.response);
  }
}

xhr.onerror = () => {
  console.log(xhr.response);
}

xhr.send();