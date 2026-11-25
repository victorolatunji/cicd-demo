// Tiny test runner (no dependencies needed)
const assert = require("assert");
const { add, greet } = require("../src/app");

assert.strictEqual(add(2, 3), 5, "add() should return 5");
assert.ok(greet("Class").includes("Hello"), "greet() should say Hello");
console.log("All tests passed ✅");
