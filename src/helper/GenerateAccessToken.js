const jwt = require('jsonwebtoken');

async function generateAccessToken(data){
    return jwt.sign({data}, "secretkey", { expiresIn: "1h" })
}

module.exports = generateAccessToken;