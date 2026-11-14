// Program to demonstrate string methods

let str: string = "Hello TypeScript";

console.log("Original string :", str);

console.log("Trim :", str.trim());

console.log("Length :", str.length);

console.log("Uppercase :", str.toUpperCase());

console.log("Lower to case :", str.toLowerCase());

console.log("Character at index 1 :", str.charAt(1));

console.log("Substring (0,5) :", str.substring(0, 5));

console.log("Replace 'TypeScript' with 'World' :", str.replace("TypeScript", "World"));

console.log("Index of 'Type' :", str.indexOf("Type"));

console.log("Includes 'Hello' :", str.includes("Hello"));

console.log("Split string :", str.split(" "));