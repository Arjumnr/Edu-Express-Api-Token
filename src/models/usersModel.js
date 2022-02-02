const connection = require("../../config/database");

async function getAllUsers() {
  return connection.select("id", "username", "password").from("users");
}

async function getUsersById(id) {
  return connection
    .select("id", "username", "password")
    .from("users")
    .where("id", id);
}

async function getUsersByUsername(username) {
  return connection
    .select("id", "username", "password")
    .from("users")
    .where("username", username)
    .first();
}

async function createUsers(data) {
  return connection
    .insert({
      username: data.username,
      password: data.password,
    })
    .from("users")
    .then(function (id) {
      return connection.select("id", "username").from("users").where("id", id);
    });
}

async function updateUsers(data, id) {
  return connection
    .update({
      username: data.username,
      password: data.password,
    })
    .from("users")
    .where("id", id)
    .then(function (id) {
      return connection
        .select("id", "username")
        .from("users")
        .where({ id: id });
    });
}

async function deleteUsers(id) {
  return connection.del().from("users").where("id", id);
}

module.exports = {
  getAllUsers,
  getUsersById,
  getUsersByUsername,
  createUsers,
  updateUsers,
  deleteUsers,
};
