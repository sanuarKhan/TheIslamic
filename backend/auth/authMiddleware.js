const jwt = require("jsonwebtoken")

const authMiddleware = (req,res,next) =>{
    const token = req.headers.authorization?.split('')[1] // Bearer token
    if(!token) return res.status(401).json({message: "Authentucation token is missing."})
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded; // Add decoded user data to req object
        next()
    } catch (error) {
        return res.status(401).json({message: "Authentication faile. Invalid or expired token"})
    }
}

module.exports = authMiddleware;