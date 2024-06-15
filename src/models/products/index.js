import { query } from '../../core/database/database-handler.js';

const schema = 'public';
const table = 'products'

async function getProducts() {
  const sql = `select * from ${schema}.${table}`;
  const result = await query(sql);
  return result.rows;
}

async function getProductById(productId) {
  const sql = `
    select * from ${schema}.${table} 
    where id = $1
  `;
  const result = await query(sql, [productId]);
  return result.rows;
}

async function createProduct(productData) {
  const {name, description, price, stock, is_enable} = productData;
  const sql = `
    insert into ${schema}.${table}
    (name, description, price, stock, is_enable)
    values
    ($1, $2, $3, $4, $5)
  `;
  const result = await query(sql, [name, description, price, stock, is_enable]);
  return result;
}


export {
  getProducts,
  getProductById,
  createProduct
};