import { createUserService, validateUserLoginService } from "../../services/user/service.js";

const createUserController = async (req, res, next) => {
  try {
    const {username, password} = req.validatedBody;
    await createUserService(username, password);
    res.status(201).json({message: 'User created successfully.'});
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
}

const loginUserController = async (req, res, next) => {
  try {
    const {username, password} = req.body;
    const jwt = await validateUserLoginService(username, password);
    res.status(200).json({jwt: jwt});
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: error.message
    });
  }
}

export {
  createUserController,
  loginUserController
}