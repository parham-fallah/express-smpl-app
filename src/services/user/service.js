import { 
  createUser, 
  getUserByUsername, 
  updateUser, 
  deleteUser, 
  getUserById 
} from '../../model/user/index.js';
import { hash, validateHash } from '../../core/utils/encryption/index.js';
import { jwtSign } from '../../core/auth/jwt-auth.js';

const DEFAULT_SIGNUP_ROLE = 'user';

async function createUserService(username, password, email, role=DEFAULT_SIGNUP_ROLE) {
  const encryptedPassword = await hash(password);
  return createUser(username, encryptedPassword, email, role);
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

async function updateUserService(userId, updateData) {
  if (updateData.password) {
    updateData.password = await hash(updateData.password);
  }
  return updateUser(userId, updateData);
}
async function deleteUserService(userId) {
  return deleteUser(userId);
}
async function getUserByIdService(userId) {
  return getUserById(userId);
}

export {
  createUserService,
  validateUserLoginService,
  updateUserService,
  getUserByIdService,
  deleteUserService
}