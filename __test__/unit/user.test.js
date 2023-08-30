const { describe, it } = require("node:test");
const { strict } = require('node:assert');

const generateId = require('../../src/utils');

describe("generateId", () => {
  it("should generate an ID of 1 when users array is empty", () => {
    const users = [];
    const id = generateId(users);
    strict.strictEqual(id, 1);
  });


  it("should generate an ID that is one greater than the highest existing ID", () => {
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" }
    ];
    const id = generateId(users);
    strict.strictEqual(id, 4);
  });

  it("should handle non-sequential IDs", () => {
    const users = [
      { id: 1, name: "Alice" },
      { id: 3, name: "Charlie" },
      { id: 7, name: "Gina" }
    ];
    const id = generateId(users);
    strict.strictEqual(id, 8);
  });
});
