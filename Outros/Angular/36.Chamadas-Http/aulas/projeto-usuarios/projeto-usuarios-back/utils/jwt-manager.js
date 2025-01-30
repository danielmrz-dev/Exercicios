const { json } = require('body-parser');
const jwt = require('jsonwebtoken');

const secretKey = 'CURSO_ANGULAR'
const generateTokenOnLogin = (username) => {
    return jwt.sign({ username }, secretKey, { expiresIn: 300 })
}

const validateToken = (token) => {

    let TOKEN_IS_VALID = undefined;

    try {
        if (!token) {
            throw new Error('Empty token.');
        }

        TOKEN_IS_VALID = jwt.verify(token, secretKey);

    } catch (error) {
        TOKEN_IS_VALID = undefined;
    }

    return TOKEN_IS_VALID;
}

module.exports = { generateTokenOnLogin, validateToken }