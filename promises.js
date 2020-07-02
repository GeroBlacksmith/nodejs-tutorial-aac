const { readFile } = require("fs").promises;
//Promise-based

async function hello() {
  const file = await readFile("./hello.txt", "utf8");
  return file;
}

hello().then((hello) => {
  console.log(hello);
});
