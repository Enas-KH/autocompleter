/*const fs = require('fs');
const path = require('path');*/

const {handleHomeRoute,handlePublic,searchArray}  = require('./app.js');

const router = (request, response) => {
  const fullUrl =request.url.split('?');
  const url = fullUrl[0];
  if (url === '/') {
   handleHomeRoute(request, response);
  } 
  else if(url==='/search'){
    const query= fullUrl[1].split('=');
    const si=query[1];
    console.log(query[0])
    console.log('search');
    searchArray(si, response);
  }
  else if (url.indexOf('public') !== -1) {
    handlePublic(request, response, url);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('<h1>404 file not found</h1>');
  }
};

module.exports = router;