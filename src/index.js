const express = require("express");

const generateId = require("./utils");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [{ id: 1, name: "felps" }];

app.get("/users", (req, res) => {
  return res.status(200).json(users);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.status(200).json(user);
});

app.post("/users", (req, res) => {
  const { name } = req.body;
  const id = generateId(users);
  const newUser = { id, name };

  users.push(newUser);
  return res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  user.name = name;
  return res.status(200).json(user);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((u) => u.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  const [deletedUser] = users.splice(index, 1);
  return res.status(200).json(deletedUser);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = app;
