import express from 'express';
import { userProducts } from '../../models/products/index.js';


const router = express.Router();

router.get('/api/products', async (req, res) => {
  try {
    const todoList = await userProducts();
    res.json(todoList);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

export {
  router
};