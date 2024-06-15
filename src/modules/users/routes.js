import express from "express";
import { usersList, createUser, deleteUser } from "../../models/users/index.js";

const router = express.Router();

// get all users
router.get("/api/user", async (req, res) => {
  try {
    const userList = await usersList();
    res.json(userList);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

//create new user
router.post("/api/user", async (req, res) => {
  try {
    const userData = req.body;
    await createUser(userData);
    res.status(201).json({ message: "User created successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

//delete user
router.delete("/api/user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    await deleteUser(userId);
    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

export { router };
