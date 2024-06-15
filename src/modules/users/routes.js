import express from "express";
import { usersList } from "../../models/users/index.js";

const router = express.Router();

router.get("/api/users", async (req, res) => {
  try {
    const usersList = await usersList();
    res.json(usersList);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

export { router };
