// console.log(Object.prototype);

const obj = {};

console.log(obj.hasOwnProperty("toString"));
console.log("toString" in obj);

// 下記のような継承になっている
// Object < Object.prototype
// Array < Array.prototype < Object.prototype

const previousMap = Object.create(null)
const map = new Map();

console.log(previousMap);
console.log(map);
