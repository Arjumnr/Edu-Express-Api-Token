const {
  getAllUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
} = require("../models/usersModel");

async function usersAll(req, res) {
  try {
    const data = await getAllUsers();

    return res.status("200").json({
      code: res.statusCode,
      data: data,
      message: "Data Berhasil Diambil",
    });
  } catch (error) {
    return res.status("300").json({
      err: error.message,
    });
  }
}

async function usersById(req, res) {
  try {
    let id = req.params.id;
    const data = await getUsersById(id);

    return res.status("200").json({
      code: res.statusCode,
      data: data,
      message: "Data Berhasil Diambil",
    });
  } catch (error) {
    return res.status("300").json({
      err: error.message,
    });
  }
}

async function usersCreate(req, res) {
  try {
    let data = req.body;

    const datas = await createUsers(data);

    return res.status("200").json({
      code: res.statusCode,
      data: datas,
      message: "Data Berhasil Dibuat",
    });
  } catch (error) {
    return res.status("300").json({
      err: error.message,
    });
  }
}

async function usersUpdate(req, res) {
  try {
    let data = req.body;
    let id = req.params.id;

    const datas = await updateUsers(data, id);

    return res.status("200").json({
      code: res.statusCode,
      data: datas,
      message: "Data Berhasil Diupdate",
    });
  } catch (error) {
    return res.status("300").json({
      err: error.message,
    });
  }
}

async function usersDelete(req, res) {
  try {
    let id = req.params.id;

    await deleteUsers(id);

    return res.status("200").json({
      code: res.statusCode,
      message: "Data Berhasil Dihapus",
    });
  } catch (error) {
    return res.status("300").json({
      err: error.message,
    });
  }
}

module.exports = { usersAll, usersById, usersCreate, usersUpdate, usersDelete };
