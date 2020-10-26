// function echo(x = "デフォルト値") {
//   return x;
// }

// console.log(echo(1));
// console.log(echo());

// function addPrefix(text, prefix) {
//   const pre = prefix || "デフォルト:";
//   return pre + text;
// }

// console.log(addPrefix("文字列"));
// console.log(addPrefix("文字列", "カスタム:"));

// console.log(addPrefix("文字列", ""));
// console.log(addPrefix("文字列", "カスタム:"));

// JavaScript で falsy になる値は下記の値です。
// [false, undefined, null, 0, 0n, NaN, ""]

// function addPrefix(text, prefix = "デフォルト") {
//   return prefix + text;
// }

// console.log(addPrefix("文字列", ""));

// function addPrefix(text, prefix) {
//   const pre = prefix ?? "デフォルト:";
//   return pre + text;
// }

// console.log(addPrefix("文字列"));
// console.log(addPrefix("文字列", ""));
// console.log(addPrefix("文字列", "カスタム:"));

// function add(x, y) {
//   return x + y;
// }

// console.log(add(1, 3));
// console.log(add(1, 3, 5));

// const max = Math.max(1, 3, 10, 20);
// console.log(max);

// function fn(...args) {
//   console.log(args)
// }

// fn("a", "b", "c");

// function fn(arg1, ...restArgs) {
//   console.log(arg1);
//   console.log(restArgs);
// }

// fn("a", "b", "c");

// 定義したとき function(...args) => 与えられたものが配列になる
// 引数に使われた時 fn(...args) => 分割されて代入される

// function fn(x, y, z) {
//   console.log(x);
//   console.log(y);
//   console.log(z);
// }

// const array = [1, 2, 3];
// fn(...array);

// function fn() {
//   console.log(arguments[0]);
//   console.log(arguments[1]);
//   console.log(arguments[2]);
// }

// fn("a", "b", "c");

// function printUserId(user) {
//   console.log(user.id);
// }

// const user = {
//   id: 42
// };

// printUserId(user);

// const user = {
//   id: 42
// };

// const { name } = user;
// console.log(name);

// function printUserId({ id }) {
//   console.log(id);
// }

// printUserId(user);

// function print([first, second]) {
//   console.log(first);
//   console.log(second);
// }

// const array = [1, 2];
// print(array);

// function fn() {
//   console.log("fn が呼び出されました");
// }

// const myFunc = fn;
// myFunc();

// const factorial = function innerFact(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * innerFact(n-1);
// };

// console.log(factorial(3));

// const array = [1, 2, 3];

// const doubleArray = array.map(function(value) {
//   return value * 2;
// });

// console.log(doubleArray);

// const array = [1, 2, 3];
// const doubleArray = array.map(value => value * 2);

// console.log(doubleArray);

// function fn(x) {
//   return `最後の関数 x: ${x}`;
// }

// function fn(x, y) {
//   return `最後の関数 x: ${x}. y: ${y}`;
// }

// console.log(fn(2, 10));

// const array = [1, 2, 3];
// const output = (value) => {
//   console.log(value);
// };
// array.forEach(output);

// const array = [1, 2, 3];
// array.forEach((value) => {
//   console.log(value);
// });

// const obj = {
//   method1: function() {
//   },
//   method2: () => {
//   }
// };

// const obj = {
//   method: function() {
//     return "This is method.";
//   }
// };

// console.log(obj.method());

const obj = {
  method() {
    return "this is method";
  }
};
console.log(obj.method());
