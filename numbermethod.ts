export{}// NumberMethods.ts
let num: number = 123.456;

// Using Number Methods
console.log("Original number: ", num);
console.log("to Fixed (2): ", num.toFixed(2));
// Rounds to 2 decimal places

console.log("to Exponential (3): ", num.toExponential(3));
// Exponential notation

console.log("to Precision (4): ", num.toPrecision(4));
// Total digits

console.log("toString(): ", num.toString());
// Convert to String

console.log("valueOf(): ", num.valueOf());
// Returns primitive value

// Static methods from Number class
console.log("Number.isFinite(num): ", Number.isFinite(num));

console.log("Number.isInteger(num): ", Number.isInteger(num));

console.log("Number.parseInt('123.45'): ", Number.parseInt("123.45"));

console.log("Number.parseFloat('123.45'): ", Number.parseFloat("123.45"));

console.log("Number.isNaN(NaN): ", Number.isNaN(NaN));