import express from 'express';
import { 
  createUserController, 
  loginUserController,
  updateUserController,
  deleteUserController,
  getUserByIdController
} from './controllers.js';
import { 
  createUserValidation, 
  signInValidation, 
  updateUserValidation
} from './validations.js';

const publicRouter = express.Router();
const router = express.Router();

publicRouter.post('/signup', createUserValidation, createUserController);
publicRouter.post('/signin', signInValidation, loginUserController);

router.delete('', deleteUserController)
router.put('', updateUserValidation, updateUserController)
router.get('', getUserByIdController)

export {
  publicRouter,
  router
}