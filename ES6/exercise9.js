/*
Open the developer tools on your favorite news site. Locate the first character of all headings,
and log the concatenation of the first characters.

https://en.wikipedia.org/wiki/JavaScript
*/

var arr = [...document.getElementsByClassName("mw-parser-output")];
let nodes = [...arr[0].getElementsByTagName("p")];
let text = "";
for (let node of nodes) {
  text += [...node.textContent][0];
}
