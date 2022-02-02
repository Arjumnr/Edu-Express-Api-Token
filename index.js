const express = require("express");
const app = express();
const port = 8080;

const {
  usersAll,
  usersById,
  usersCreate,
  usersUpdate,
  usersDelete,
} = require("./src/controllers/users.controller");

const login = require("./src/controllers/auth/LoginController");
const authMiddleware = require ("./middleware/authMiddleware");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/users", authMiddleware, usersAll);
app.get("/user/:id", usersById);
app.post("/user", usersCreate);
app.put("/user/:id", usersUpdate);
app.delete("/user/:id", usersDelete);

//LOGIN
app.post("/login", login);

app.listen(port, () => {
  console.log(`Masuk ke halaman ini http://localhost:${port}`);
});

module.exports = app;
