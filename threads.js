// Si no esta esta linea, por defecto son 4
process.env.UV_THREADPOOL_SIZE = 2;

const crypto = require("crypto");
const start = Date.now();

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("1: ", Date.now() - start);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("2: ", Date.now() - start);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("3: ", Date.now() - start);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("4: ", Date.now() - start);
});
// Poniendo a prueba el Thread Pool de LibUV
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("5: ", Date.now() - start);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("6: ", Date.now() - start);
});
// Resultados de pruebas:
/*
2:  603
4:  622
1:  675
3:  710
5:  1168
6:  1188
*/
// Conclusion, el Thread pool admite cuatro trabajos en simultaneo
