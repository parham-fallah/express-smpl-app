import { createUser, getUserByUsername } from '../../model/user/index.js';
import { hash, validateHash } from '../../core/utils/encryption/index.js';
import { jwtSign } from '../../core/auth/jwt-auth.js';

const DEFAULT_SIGNUP_ROLE = 'user';

async function createUserService(username, password, role=DEFAULT_SIGNUP_ROLE) {
  const encryptedPassword = await hash(password);
  return createUser(username, encryptedPassword, role);
}

async function validateUserLoginService(username, password) {
  const user = await getUserByUsername(username);
  if(!user) {
    throw new Error(`Username or Password is not correct.`)
  }
  const validatedHash = await validateHash(password, user.password);
  if (!validatedHash) {
    throw new Error(`Username or Password is not correct.`)
  }
  const jwtUserData = {
    id: user.id,
    username: user.username,
    role: user.role
  };
  const userJwt = jwtSign(jwtUserData);
  return userJwt;
}

export {
  createUserService,
  validateUserLoginService
}