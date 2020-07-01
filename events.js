const { EventEmitter } = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("lunch", () => {
  console.log("yum");
});

eventEmitter.emit("lunch");
// Useful when is cpu intensive?
