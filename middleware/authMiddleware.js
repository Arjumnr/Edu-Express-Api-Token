const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next){
    const header = req.headers.authorization;

    if(!header  || header == "" || header == undefined ){
        return res.status(401).json({
            message: "Auth Filed"
        });
    }
    const token = header.split(" ")[1];


    return jwt.verify(token, "secretkey", (err, decoded) => {
        if(err){
            return res.status(401).json({
                message: "Auth Filed"
            });
        }
        next();
    })
}

module.exports = authMiddleware;