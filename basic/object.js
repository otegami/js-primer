// const obj = {
//   key: "value"
// }

// const color = {
//   red: "red",
//   green: "green",
//   blue: "blue",
// };

// const obj = new Object();
// console.log(obj);

// const languages = {
//   ja: "日本語",
//   en: "英語",
// };

// const { ja, en } = languages;
// console.log(ja);
// console.log(en);

// const key = "key-string";
// const obj = {
//   [key]: "value"
// };

// function changeProperty(obj) {
//   obj.key = "value";
// }

// const obj = {};
// changeProperty(obj);
// console.log(obj);

// delete obj.key;
// console.log(obj);

// "use strict";

// const object = Object.freeze({key: "value"});
// object.key = "value";

// const obj = { key: undefined };
// if ("key" in obj) {
//   console.log("`key`プロパティは存在する");
// }
// console.log(obj.hasOwnProperty("key"));

// const obj = {
//   a: {
//     b: "obj の a プロパティの b　プロパティ"    
//   }
// };

// console.log(obj?.a?.b);
// console.log(obj?.notFound?.notFound);
// console.log(obj?.a);

// const languages = {
//   ja: {
//     hello: "こんにちは！"
//   },
//   en: {
//     hello: "Hello"
//   }
// };

// const langJapanese = "ja"
// const langKorea    = "ko"
// const messageKey   = "hello"

// console.log(languages?.[langJapanese]?.[messageKey]);
// console.log(languages?.[langKorea]?.[messageKey]);

// const obj = {};
// const symbolKey1 = Symbol("シンボル1");
// const symbolKey2 = Symbol("シンボル2");

// obj[symbolKey1] = "1";
// obj[symbolKey2] = "2";

// console.log(obj);
// console.log(obj[symbolKey1]);
// console.log(obj[symbolKey2]);

// const obj = {
//   "one":   1,
//   "two":   2,
//   "three": 3,
// }
// console.log(obj.keys);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// const keys = Object.keys(obj);
// keys.forEach(key => {
//   console.log(key);
// });

// const objectA = { a: "a" };
// const objectB = { b: "b" };
// const merged = Object.assign({}, objectA, objectB);
// console.log(merged);

// const shallowClone = obj => {
//   return Object.assign({}, obj);
// };

// const obj = {
//   level: 1,
//   nest: {
//     level: 2
//   },
// };

// const cloneObj = shallowClone(obj);
// console.log(cloneObj.nest === obj.nest);
// // console.log(cloneObj);
// 引数の`obj`を浅く複製したオブジェクトを返す
