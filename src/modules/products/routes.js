import express from 'express';
import { getProducts } from '../../models/products/index.js';


const router = express.Router();

router.get('/api/products', async (req, res) => {
  try {
    const todoList = await getProducts();
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