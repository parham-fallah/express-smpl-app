import express from 'express';
import { getProducts, getProductById } from '../../models/products/index.js';


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

router.get('/api/product/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const todoList = await getProductById(productId);
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