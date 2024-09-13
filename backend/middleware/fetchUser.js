var jwt = require('jsonwebtoken');
const JWT_SECRET = "secrettokenstoredinenv";

const fetchuser = (req, res, next)=>{
    //  get user from jwt token and add id to req object
    const token = req.header('auth-token');
    if(!token)
    {
        return res.status(401).json({error: "Please authenticate via valid token"})
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(400).json({error: "Please authenticate again"})
    }
}

module.exports = fetchuser