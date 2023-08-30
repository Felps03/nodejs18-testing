const { describe, it } = require("node:test");
const { deepStrictEqual, strictEqual } = require("node:assert");

const BASE_URL = "http://localhost:3000";

describe("[e2e] User API", () => {
  describe("GET /users - User get all", () => {
    it("OK (200)", async () => {
      const request = await fetch(`${BASE_URL}/users`, {
        method: "GET",
      });

      strictEqual(request.status, 200);
      const response = await request.json();

      deepStrictEqual(response, [
        {
          id: 1,
          name: "felps",
        },
      ]);
    });
  });

  describe("POST /users - Create User", () => {
    it("Created (201)", async () => {
      const request = await fetch(`${BASE_URL}/users`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name: "felps tmp",
        }),
      });

      strictEqual(request.status, 201);
      const response = await request.json();

      deepStrictEqual(response, {
        id: 2,
        name: "felps tmp",
      });
    });
  });

  describe("PUT /users/:id - Update User", () => {
    it("OK (200)", async () => {
      const request = await fetch(`${BASE_URL}/users/2`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          name: "felps updated",
        }),
      });

      strictEqual(request.status, 200);
      const response = await request.json();

      deepStrictEqual(response, {
        id: 2,
        name: "felps updated",
      });
    });
  });

  describe("DELETE /users/:id - Delete User", () => {
    it("Created (200)", async () => {
      const request = await fetch(`${BASE_URL}/users/2`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE"
      });

      strictEqual(request.status, 200);
      const response = await request.json();

      deepStrictEqual(response, {
        id: 2,
        name: "felps updated",
      });
    });
  });

});
