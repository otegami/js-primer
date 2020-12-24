// const str = "にわにはにわにわとりがいる";

// console.log(str.indexOf("にわ"));
// console.log(str.lastIndexOf("にわ"));
// console.log(str.indexOf("未知のキーワード"));

// const str = "JavaScript";
// const searchWord = "Script";
// const index = str.indexOf(searchWord);

// if (index !== -1) {
//   console.log(`${searchWord}が見つかりました`);
// } else {
//   console.log(`${searchWord}は見つかりませんでした`);
// }

// const str = "にわにはにわにわとりがいる";
// console.log(str.startsWith("にわ"));

// const str = "JavaScript";
// const searchWord = "Script";
// const index = str.indexOf(searchWord);

// console.log(index);

// const str = "ABC あいう DE えお";
// const alphabetsPattern = /[a-zA-Z]+/g;
// const result = str.matchAll(alphabetsPattern);
// for (const match of result) {
//   console.log(`match: "${match[0]}", index: ${match.index}, input: "${match.input}"`);
// }

// const pattern = /ES(\d+)/g;
// const matchesInterator = "ES2015, ES2016, ES2017".matchAll(pattern);

// for(const match of matchesInterator) {
//   console.log(`match: "${match[0]}", capture1: ${match[1]}, index: ${match.index}, input: "${match.input}"`);
// }

// const str = "文字列";
// const newStr = str.replace("文字", "");
// console.log(newStr);

// const str = "にわにはにわにわとりがいる";
// console.log(str.replace(/にわ/g, "niwa"));

// function toDateJa(dateString) {
//   return dateString.replace(/(\d{4})-(\d{2})-(\d{2})/, (all, year, month, day) => {
//     return `${year}年${month}月${day}日`;
//   })
// }

// console.log(toDateJa("本日ハ晴天ナリ"));
// console.log(toDateJa("私の誕生日は、1994-03-18です。"));

// function baseJoin(baseURL, pathname) {
//   const stripSlashBaseURL = baseURL.replace(/\/$/, "");
//   return stripSlashBaseURL + pathname;
// }

// function getResource(baseURL, pathname) {
//   const url = baseJoin(baseURL, pathname);
//   console.log(url);
// }

// const baseURL = "http://example.com/resouces/";
// const pathname = "/example.js";

// getResource(baseURL, pathname);

// function tag(strings, ...values) {
//   console.log(strings);
//   console.log(values);
// }

// tag`template ${0} literal ${1}`;

function escapeURL(strings, ...values) {
  return strings.reduce((result, str, i, array) => {
    console.log(result, str, i, array);
    return result + encodeURIComponent(values[i - 1]) + str;
  });
}

const input = "A&B";
const escapedURL = escapeURL`https://example.com/search?q=${input}&sort=desc`;

console.log(escapedURL);

