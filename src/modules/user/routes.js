import express from 'express';
import { createUserController, loginUserController } from './controllers.js';
import { createUserValidation } from './validations.js';

const router = express.Router();

router.post('/signup', createUserValidation, createUserController);
router.post('/signin', loginUserController);

export {
  router
}