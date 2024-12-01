const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || "secret";

const jwtConfig = {
    expiresIn: '3d',
    algorithm: 'HS256',
};

const encode = (payload) => jwt.sign(payload, secret, jwtConfig);

const decode = (token) => jwt.verify(token, secret);

module.exports = {
    encode,
    decode,
};