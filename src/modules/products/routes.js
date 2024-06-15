import express from 'express';
import { getProducts, getProductById, createProduct, deleteProduct } from '../../models/products/index.js';


const router = express.Router();

router.get('/api/product/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await getProductById(productId);
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

router.delete('/api/product/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    await deleteProduct(productId);
    res.status(200).json({message: 'Product deleted successfully.'});
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

router.post('/api/product', async (req, res) => {
  try {
    const productData = req.body;
    await createProduct(productData);
    res.status(201).json({message: 'Product created successfully.'});
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

router.get('/api/products', async (req, res) => {
  try {
    const convert = req.query.convert;
    const products = await getProducts(convert);
    res.json(products);
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