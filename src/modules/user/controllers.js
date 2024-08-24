import { 
  createUserService, 
  validateUserLoginService,
  updateUserService,
  getUserByIdService,
  deleteUserService
} from "../../services/user/service.js";

const createUserController = async (req, res, next) => {
  try {
    const {username, password, email} = req.validatedBody;
    await createUserService(username, password, email);
    res.status(201).json({message: 'User created successfully.'});
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
}

const updateUserController = async (req, res, next) => {
  try {
    const updatePayload = req.validatedBody;
    const userId = req.user.id;
    const updatedUser = await updateUserService(userId, updatePayload);
    res.json({message: 'User updated successfully.', updatedUser});
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
}

const deleteUserController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    await deleteUserService(userId);
    res.json({message: 'User deleted successfully.'});
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
}

const getUserByIdController = async (req, res, next) => {
  try {
    const user = await getUserByIdService();
    res.json(user);
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
  loginUserController,
  updateUserController,
  deleteUserController,
  getUserByIdController
}