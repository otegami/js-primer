// const total = 42 + 42;
// console.log(total);

// const value = "値";
// console.log(value);

// const sentence = "I have \n free time to do anything \n now."
// console.log(sentence);

// const obj = {
//   "key": "value"
// };

// console.log(obj.key);
// console.log(obj["key"]);

// const str = new String("文字列");
// console.log(typeof str);
// console.log(str.length);

// const str = "文字列";
// console.log(typeof str);
// console.log(str.length);

// const value = undefined;
// if (value === null || value === undefined) {
//   console.log("value が null または undefined である場合の処理");
// }

// if (value == null) {
//   console.log("value が null または undefined である場合の処理");
// }

// const str = "森森木森森";
// if (str.indexOf("木") !== -1) {
//   console.log("気を見つけました");
// }

// if (~str.indexOf("木")) {
//   console.log("気を見つけました");
// }

// const array = [1, 2]
// const [a, b] = array;
// console.log(a);
// console.log(b);

// const a = array[0];
// const b = array[1];

// const obj = {
//   "key": "value"
// }
// const { key } = obj;
// console.log(key);

// function double(num) {
//   return num * 2;
// }
// console.log(double(10));

// function argumentsToArray(x, y) {
//   return [x, y]
// }

// console.log(argumentsToArray(1, 2));

// function echo(x = "デフォルト値") {
//   return x;
// }

// console.log(echo(1));
// console.log(echo());

function addPrefix(text, prefix) {
  const pre = prefix || "デフォルト";
  return pre + text;
}

console.log(addPrefix("文字列"));
console.log(addPrefix("文字列", "カスタム:"));

