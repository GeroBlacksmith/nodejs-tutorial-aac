const { readFile, readFileSync } = require("fs");

// BLOCKING
const txt = readFileSync("./hello.txt", "utf8");
console.log(txt);
console.log("DO this asap 1");

// NON BLOCKING
readFile("./hello.txt", "utf8", (err, txt) => {
  console.log(txt);
});
console.log("DO this asap 2");
