const jwt = require("jsonwebtoken")

const verifyToken = (token) =>{
    try {
        return jwt.verify(token, process.env.JWT_SECRET) // Verify the token
    } catch (error) {
        throw new Error('Token is invalid or expired.');
    }
} 

module.exports = verifyToken;