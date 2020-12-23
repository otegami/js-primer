// const emptyArray = [];
// const numbers = [1, 2, 3];
// const matrix = [
//   ["a", "b"],
//   ["c", "d"],
// ];

// console.log(matrix[0][1]);

// const array = ["one", "two", "thre"];
// console.log(array.length);

// const array = [];
// const obj = {};

// console.log(Array.isArray(obj));
// console.log(Array.isArray(array));
// console.log(typeof array);

// const array = ["one", "two", "three"];
// const [first, two, three] = array;

// console.log(first);
// console.log(two);
// console.log(three);

// const array = ["Java", "JavaScript", "Ruby"];
// const indexOfJs = array.indexOf("JavaScript");

// console.log(indexOfJs);
// console.log(array[indexOfJs]);
// console.log(array.indexOf("JS"));

// const obj = { key: "value" };
// const array = ["A", "B", obj];

// console.log(array.indexOf(obj));

// const colors = [
//   { "color": "red" },
//   { "color": "green" },
//   { "color": "blue" }
// ];

// const indexOfBlue = colors.findIndex( obj => {
//   return obj.color === "blue";
// });
// console.log(indexOfBlue);

// const blueColor = colors.find(obj => {
//   return obj.color === "blue";
// });
// console.log(blueColor);

// const array = ["A", "B", "C", "D", "E"];
// console.log(array.slice(1, 4));
// console.log(array.slice());

// const array = ["Java", "JavaScript", "Ruby"];

// if (array.includes("JavaScript")) {
//   console.log("配列に JavaScript が含まれている");
// }

// const colors = [
//   { "color": "red" },
//   { "color": "green" },
//   { "color": "blue" },
// ];

// const isIncludedBlueColor = colors.some( obj => {
//   return obj.color === "blue";
// });

// console.log(isIncludedBlueColor);

// const array = ["A", "B", "C"];
// const newArray = array.concat(["D", "E"]);
// console.log(newArray);

// const newArray = ["X", "Y", "Z", ...array];
// console.log(newArray);

// const array = [[["A"], "B"], "C"];
// console.log(array.flat());
// console.log(array.flat(2));
// console.log(array.flat(Infinity));

// const array = ["A", "B", "C"];
// const newArray = [ "b", "c" ]
// console.log(array.splice(1, 1, ...newArray));
// console.log(array);
// const spliceArray = array.splice(1, 2);
// console.log(spliceArray);

const array = [1, 2, 3];
// array.length = 5;
// console.log(array);

array.forEach((currentValue, index, array) => {
  console.log(currentValue, index, array);
});

const newArray = array.map((currentValue, index, array) => {
  return currentValue * 10;
});
console.log(newArray);

const filterArray = array.filter((currentValue, index, array) => {
  return currentValue % 2 == 0;
});
console.log(filterArray);

const reduceArray = array.reduce((accumulator, currentValue, index, array) => {
  return accumulator + currentValue;
}, 0);
console.log(reduceArray);
