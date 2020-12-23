// let x = 0;
// console.log(`ループ開始前の x の値: ${x}`);

// while (x < 10) {
//   console.log(x);
//   x += 1;
// }
// console.log(`ループ終了後の x の値: ${x}`);

// let total = 0;
// for (let i = 0; i < 10; i++) {
//   total += i + 1
// }
// console.log(total);

// function sum(numbers) {
//   let total = 0;
//   for (let i = 0; i < numbers.length; i ++) {
//     total += numbers[i];
//   }
//   return total;
// }
// console.log(sum([1, 2, 3, 4, 5]));

// const array = [1, 2, 3];
// array.forEach(currentValue => {
//   console.log(currentValue);
// });

// function sum(numbers) {
//   let total = 0;
//   numbers.forEach(num => {
//     total += num;
//   });
//   return total;
// }

// console.log(sum([1, 2, 3, 4, 5]));

// const numbers = [1, 5, 10, 15, 20];

// let isEvenIncluded = false;
// for (let i = 0; i < numbers.length; i++) {
//   const num = numbers[i];
//   if (num % 2 === 0) {
//     isEvenIncluded = true;
//     break;
//   }
// }
// console.log(isEvenIncluded);

// function isEven(num) {
//   return num % 2 === 0;
// }

// function isEvenIncluded(numbers) {
//   numbers.forEach(currenValue => {
//     if (isEven(currenValue)) {
//       return true;
//     }
//   })
// }
// const array = [1, 2, 3, 4, 5];
// console.log(isEvenIncluded(array));

// const array = [1 ,2 ,3, 4, 5];
// const isPassed = array.some(currenValue => {
// });

// function isEven(num) {
//   return num % 2 === 0;
// }
// const numbers = [1, 5, 10, 15, 20];
// console.log(numbers.some(isEven));

// function isEven(num) {
//   return num % 2 === 0;
// }

// function filterEven(numbers) {
//   const results = [];
//   for (let i = 0; i < numbers.length; i++) {
//     const num = numbers[i];
//     if (!isEven(num)) {
//       continue;
//     }
//     results.push(num);
//   }
//   return results;
// }

// const array = [1, 5, 10, 15, 20];
// console.log(filterEven(array));

// function isEven(num) {
//   return num % 2 === 0;
// }

// const array = [1, 5, 10, 15, 20];
// console.log(array.filter(isEven));

// const obj = {
//   "a": 1,
//   "b": 2,
//   "c": 3,
// }

// for (const key in obj) {
//   const value = obj[key];
//   console.log(`key:${key}, value:${value}`);
// }

// const array = [1, 2, 3];
// for (const value of array) {
//   console.log(value);
// }

// const str = "吉野家";
// for (const value of str) {
//   console.log(value);
// }

// function sum(numbers) {
//   return numbers.reduce((total, num) => {
//     return total + num;
//   }, 0);
// }

// console.log(sum([1, 2, 3, 4, 5]));

// const name = "名前";
// const obj = {
//   name
// };
// console.log(obj);

// const myLang = "ja";
// console.log(languages[myLang]);


// const ja = languages.ja;
// const en = languages.en;

// const languages = {
//   ja: "日本語",
//   en: "英語",
// };  

// const { ja, en } = languages;

// console.log(ja);
// console.log(en);

// languages.chinese = "中国語"
// console.log(languages);

// const key = "key-string";
// const obj = {
//   [key]: "value"
// };
// console.log(obj[key]);
// console.log(obj);

// const obj = {
//   key1: "value1",
//   key2: "value2",
// };
// delete obj.key1;
// console.log(obj);

// const widget = {
//   window: {
//     title: "ウィジットのタイトル"
//   }
// };
// console.log(widget.window);
// console.log(widget.window.title);

// const obj = { value: undefined };
// if ("value" in obj) {
//   console.log(`${obj}プロパティは存在する`);
// }

// function printWidgetTitle(widget) {
//   const title = widget?.window?.title ?? "未定義";
//   console.log(`ウィジェットのタイトルは${title}です`);
// }

// printWidgetTitle({
//   window: {
//     title: "Book Viewer"
//   }
// });

// const languages = {
//   ja: {
//     hello: "こんにちは!"
//   },
//   en: {
//     hello: "Hello!"
//   }
// };
// const langJapanese = "ja";
// const langKorean = "ko";
// const messageKey = "hello";

// console.log(languages?.[langJapanese]?.[messageKey]);
// console.log(languages?.[langKorean]?.[messageKey]);

// const obj = { key: "value" };
// console.log(obj.toString());

// const customObject = {
//   toString() {
//     return "custom value";
//   }
// };
// console.log(String(customObject));


// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// const obj = {
//   one: 1,
//   two: 2,
//   three: 3
// };

// const keys = Object.keys(obj);
// keys.forEach(key => {
//   console.log(key);
// });

// const objectA = { a: "a" };
// const objectB = { b: "b" };
// const merged = Object.assign({}, objectA, objectB);
// console.log(merged);

// const obj = { a: "a" };
// const cloneObj = shallowClone(obj);
// console.log(cloneObj);
// console.log(obj === cloneObj);

// const obj = {
//   level: 1,
//   nest: {
//     level: 2
//   },
// };

// const cloneObj = shallowClone(obj);
// console.log(cloneObj.nest === obj.nest);

// const shallowClone = (obj) => {
//   return Object.assign({}, obj);
// };

// function deepClone(obj) {
//   const newObj = shallowClone(obj);
//   Object.keys(newObj)
//         .filter(k => typeof newObj[k] === "object")
//         .forEach(k => newObj[k] = deepClone(newObj[k]));
//   return newObj;
// }

// const obj = {
//   level: 1,
//   nest: {
//     level: 2
//   }
// };

// const cloneObj = deepClone(obj);
// console.log(cloneObj.nest === obj.nest);

// console.log(typeof Object.prototype.toString);

// const obj = {
//   "key": "value"
// };

// console.log(obj.toString === Object.prototype.toString);

// console.log(obj.toString());

// const customObject = {
//   toString() {
//     return "custom value";
//   }
// };

// console.log(customObject.toStrinng());

// const obj = {};
// console.log(obj.hasOwnProperty("toString"));
// console.log("toString" in obj);

// const obj = Object.create(Object.prototype.hasOwnProperty);

// const Array = function() {};
// Array.prototype = Object.create(Objcet.prototype);

// const array = Object.create(Array.prototype);
// console.log(array.hasOwnProperty === Object.prototype.hasOwnProperty);

// const obj = {};
// console.log(obj["toString"]);

// const mapLike = Object.create(null);
// console.log(mapLike["toString"]);

// const map = new Map();
// console.log(map.has("toString"));

// const emptyArray = [];
// const numbers = [1, 2, 3];

// const matrix = [
//   ["a", "b"],
//   ["c", "d"]
// ];

// console.log(matrix[0][0]);

// const array = ["one", "two", "three"];

// console.log(array.length);
// console.log(array[array.length - 1]);

// const sparseArray = [1, , 3];
// console.log(sparseArray.length);
// console.log(sparseArray[1]);
// console.log(sparseArray);

// const obj = {};
// const array = [];

// console.log(Array.isArray(obj));
// console.log(Array.isArray(array));

// console.log(typeof array);
// const typedArray = new Int8Array(8);
// console.log(Array.isArray(typedArray));

// const array = ["one", "two", "three"];
// const [first, second, third] = array;

// console.log(first);
// console.log(second);
// console.log(third);

// const denseArray = [1, undefined, 3];
// const sparseArray = [1, , 3];
// console.log(denseArray.hasOwnProperty(1));
// console.log(sparseArray.hasOwnProperty(1));

// const array = ["Java", "JavaScript", "Ruby"];
// const indexOfJS = array.indexOf("JavaScript");

// console.log(indexOfJS);
// console.log(array[indexOfJS]);

// const obj = { key: "value" };
// const array = ["A", "B", obj];

// console.log(array.indexOf({ key: "value" }));
// console.log(array);
// console.log(array.indexOf(obj));

// const colors = [
//   { "color": "red" },
//   { "color": "green" },
//   { "color": "blue" }
// ];

// const indexOfBlue = colors.findIndex(
//   (obj) => {
//     return obj.color === "blue";
//   }
// );

// console.log(indexOfBlue);
// console.log(colors[indexOfBlue]);

// const array = ["A", "B", "C", "D", "E"];

// console.log(array.slice(1, 4));
// console.log(array.slice(1));
// console.log(array.slice(-1));

// const indexOfJS = array.indexOf("JavaScript");

// const array = ["Java", "JavaScript", "Ruby"];

// if (array.includes("JavaScript")) {
//   console.log("配列に JavaScript が含まれている");
// }

// const colors = [
//   { "color": "red" },
//   { "color": "green" },
//   { "color": "blue" }
// ];

// const isIncludedBlueColor = colors.some((obj) => {
//   return obj.color === "blue";
// });

// console.log(isIncludedBlueColor)

// const array = ["A", "B", "C"];
// array.push("D");

// console.log(array);

// const myArray = ["A", "B", "C"];
// const copiedArray = myArray.slice();

// myArray.push("D");

// console.log(myArray);
// console.log(copiedArray);
// console.log(copiedArray == myArray);

// function removeAtIndex(array, index) {
//   const copiedArray = array.slice();
//   copiedArray.splice(index, 1);
//   return copiedArray;
// }

// const array = ["A", "B", "C"];

// const newArray = removeAtIndex(array, 1);
// console.log(newArray);
// console.log(array);

// const array = [1, 2, 3];
// array.forEach((currentValue, index, array) => {
//   console.log(currentValue, index, array);
// });

// function myFunc() {
//   console.log(arguments[0]);
//   console.log(typeof arguments.forEach);
// }

// myFunc("a", "b", "c");

// const array = ["a"].concat("b").concat("c");
// console.log(array);

// const str = "This book is \"js-primer\"";
// console.log(str);

const name = "JavaScript";
console.log("Hello " + name + "!");
