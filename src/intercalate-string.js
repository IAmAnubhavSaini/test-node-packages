const lib = require("@f0c1s/intercalate-string");
const red = require("@f0c1s/color-red");

console.log(red(lib));

console.log(lib("\n", ["what is this?", "string b"]));
