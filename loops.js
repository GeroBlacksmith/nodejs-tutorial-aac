// node myFile.js
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from myFile running.
myFile.runContent();

function shouldContinue() {
  // Check one: Any pending setTimeout, setInterval, setImmediate?
  // Check two: Any pending OS tasks? (Like server listening port)
  // Check three: Any pending long running operations? (Like fs module)
  return (
    pendingOperations.length ||
    pendingOSTasks.length ||
    pendingOperations.length
  );
}

// Entire body executes in one 'tick'
while (shouldContinue()) {
  // 1) Node looks at pendingTimers and see if any function are ready to be called. setTImeout, setInterval
  // 2) Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks.
  // 3) Pause execution. Continue when...
  // - a new pendingOSTasks is done.
  // - a new pendingOperation is done
  // - a timer is about to complete
  // 4) Looks at pendingTimers. Call any setImmediate
  // 5) Handle any 'close' event
}
// Exit back to terminal.
