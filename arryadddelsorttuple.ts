// Write a TypeScript array element
// for adding, deleting and sort
// using tuple method

// array_TupleExample.ts
// Tuple with numbers
let myTuple: [number, number, number, number] = [30, 10, 50, 20];
console.log("Original Tuple:", myTuple);
// Converting tuple to array for operations
let arr: number[] = [...myTuple];
// Adding element (push)
arr.push(40);
console.log("After push(40):", arr);
// Deleting element (pop)
let removed = arr.pop();
console.log("After Pop():", arr, "| Removed element:", removed);
// Sorting array
arr.sort((a, b) => a - b);
console.log("After sort():", arr);
// Converting back to tuple (with fixed length)
let newTuple: [number, number, number, number] = [arr[0], arr[1], arr[2], arr[3]];
console.log("New Tuple (first 4 sorted values):", newTuple);