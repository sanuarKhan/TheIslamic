const jwt = require('jsonwebtoken');

//Generate Refresh Token

const generateToken = (userId) => {
    return jwt.sign({id: userId}, process.env.JWT_SECRET, {expiresIn: '15m'})  // Access token for 15 minutes
}
const generateRefreshToken = (userId) => {
    return jwt.sign({id: userId}, process.env.JWT_REFRESH_TOKEN, {expiresIn: '7d'})  // Refresh token for 7 days
}

module.exports = {generateToken, generateRefreshToken}