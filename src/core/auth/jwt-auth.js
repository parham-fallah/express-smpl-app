import jwt from 'jsonwebtoken';
import { JWT_SECRETS } from '../secrets/index.js';

function jwtSign(data) {
  return jwt.sign(data, JWT_SECRETS.signKey, { expiresIn: '24h' });
}

function jwtValidate(jwtToken) {
  try {
    return jwt.verify(jwtToken, JWT_SECRETS.signKey);
  } catch (error) {
    console.log(error);
    throw new Error('Invalid JWT Token!');
  }
}

export {
  jwtSign,
  jwtValidate
}