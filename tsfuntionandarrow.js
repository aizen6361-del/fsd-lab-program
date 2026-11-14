"use strict";
function greet(name) {
    return "Hello from Regular function -" + name;
}
console.log(greet("anprisidi"));
console.log("-------------------------");
const greetArrow = (name) => {
    return "Hello from Arrow function -" + name;
};
console.log(greetArrow("anprisidi"));
