/* Write a function request which when called with parameter as shown below prints url and method value */

/* request({url: 'http://www.google.com', method: 'GET' }); */

function request({ url, method }) {
  console.log(url, "\n", method);
}

request({ url: "http://www.google.com", method: "GET" });
