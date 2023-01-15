const jwt = require('jsonwebtoken');
require('dotenv').config();

// 토큰 생성 jwt.sign(payload, secretKey, options, callback)
// 토큰 검증 jwt.verify(token, secretKey, options, callback)
const secretKey = process.env.SECRET_KEY;
const expiresIn = process.env.JWT_EXP;

const option = { expiresIn };

// 토큰을 쿠키로 보내야 하나 헤더로 보내야 하나
exports.createToken = payload => {
  // payload가 들어오면 그 값을 토큰으로 바꿔서 돌려줌.
  // payload는 토큰이 가질 데이터
  return jwt.sign(payload, secretKey);
};

exports.verifyToken = token => {
  return jwt.verify(token, secretKey);
};