'use strict';

var onError = function (message) {
  console.error(message);
};

var onSuccess = function (data) {
  var users = data;

  console.log(users);
};

var xhr = new XMLHttpRequest(); 
xhr.responseType = 'json';

xhr.addEventListener('load', function(){
  var error;
  switch (xhr.status) {
    case 200:
      onSuccess(xhr.response);
      break;

    case 400:
      error = 'Invalid request';
      break;
    case 401:
      error = 'User is not logged in';
      break;
    case 404:
      error = 'Nothing found';
      break;
      
    default:
      error = 'Response status: ' + xhr.status + ' ' + xhr.statusText;  
  }

  if (error) {
    onError(error);
  } 
});

xhr.addEventListener('error', function (){
  onError('Connection error occurred');
});

xhr.addEventListener('timeout', function (){
  onError('Request did not manage to be executed in ' + xhr.timeout + 'ms');
});

//default browser timeout 30000ms
// I can set timeout
xhr.timeout = 60000;


xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

xhr.send();
 