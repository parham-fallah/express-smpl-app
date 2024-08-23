import Joi from 'joi';

const createUserValidation = async (req, res, next) => {
  try {
    const bodySchema = Joi.object({
      username: Joi.string().min(3).required(),
      password: Joi.string().min(6).required(),
      email: Joi.string().email().required(),
    }).required();
    
    const validatedBody = await bodySchema.validateAsync(req.body);
    req.validatedBody = validatedBody;
    next();
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

const updateUserValidation = async (req, res, next) => {
  try {
    const bodySchema = Joi.object({
      username: Joi.string().min(3).optional(),
      password: Joi.string().min(6).optional(),
      email: Joi.string().email().optional(),
      role: Joi.string().optional()
    }).required();
    
    const validatedBody = await bodySchema.validateAsync(req.body);
    req.validatedBody = validatedBody;
    next();
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

const signInValidation = async (req, res, next) => {
  try {
    const bodySchema = Joi.object({
      username: Joi.string().min(3).required(),
      password: Joi.string().min(6).required(),
    }).required();
    
    const validatedBody = await bodySchema.validateAsync(req.body);
    req.validatedBody = validatedBody;
    next();
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

export {
  createUserValidation,
  signInValidation,
  updateUserValidation
}