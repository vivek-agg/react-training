/*
1. Write a function that returns an array from a given string
wrap(“package”) // result should be [“package”]
*/

(name => console.log([name]))("viv");

/*
2. Write a function that takes an array of string and returns plain string
unwrap([“package”]) // result should be “package”
*/
(([name]) => console.log(name))(["viv"]);
