const generateAccessToken = require("../../helper/GenerateAccessToken");
const {getUsersByUsername} = require("../../models/usersModel");


async function login(req, res){
    try{
        let user = await getUsersByUsername(req.body.username);

        if(!user){
           return  res.status(400).json({
                message: "Username atau Password Salah",
            });
        }

        if(user.password !== req.body.password){
            return res.status(401).json({
                message: "Password Salah",
            });
        }

        delete user.password;

        let accessToken = await generateAccessToken(user);

        return res.status(200).json({
            message: "Login Berhasil",
            data: accessToken,
        });
    }catch (error){

        return res.status(300).json({
            message: error.message
        });

    }
}

module.exports = login;