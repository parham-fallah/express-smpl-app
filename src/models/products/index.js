import { query } from '../../core/database/database-handler.js';

const schema = 'public';
const table = 'products'

async function getProducts() {
  const sql = `select * from ${schema}.${table}`;
  const result = await query(sql);
  return result.rows;
}

async function getProductById(productId) {
  const sql = `select * from ${schema}.${table} where id = $1`;
  const result = await query(sql, [productId]);
  return result.rows;
}


export {
  getProducts,
  getProductById
};