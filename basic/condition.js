// const x = 42

// if (x > 10) {
//   console.log("この式は実行されます");
// }

// const version = "ES6";
// if (version === "ES5") {
//   console.log("ECMAScript 5");
// } else if (version === "ES6") {
//   console.log("ECMAScript 6");
// } else if (version === "ES7") {
//   console.log("EMAScript 7");
// }

// const version = "ES6";
// switch (version) {
//   case "ES5":
//     console.log("ECMAScript 5");
//     break;
//   case "ES6":
//     console.log("ECMAScript 2015");
//     break;
//   case "ES7":
//     console.log("ECMAScript 2016");
//     break;
//   default:
//     console.log("Unknown version")
//     break;
// }

function getECMAScriptName(version) {
  switch (version) {
    case "ES5":
      return "ECMAScript 5";
    case "ES6":
      return "ECMAScript 2015";
    case "ES7":
      return "ECMAScript 2016";
    defualt:
      return "Unknown version";
  }
}
console.log(getECMAScriptName("ES6"))
