import { query } from '../../core/database/database-handler.js';

const schema = 'public';
const table = 'products'

async function getProducts(convert) {
  const sql = `select * from ${schema}.${table}`;
  const result = await query(sql);
  const products = result.rows;
  if (convert) {
    for(let i = 0 ; i < products.length ; i++) {
      products[i].price = +products[i].price * 60000; 
    }
  }
  return products;
}

async function getProductById(productId) {
  const sql = `
    select * from ${schema}.${table} 
    where id = $1
  `;
  const result = await query(sql, [productId]);
  return result.rows[0];
}

async function createProduct(productData) {
  const {name, description, price, stock} = productData;
  const updatedEnables = !stock || stock == 0 ? false : true;
  const sql = `
    insert into ${schema}.${table}
    (name, description, price, stock, is_enable)
    values
    ($1, $2, $3, $4, $5)
  `;
  const result = await query(sql, [name, description, price, stock, updatedEnables]);
  return result;
}

async function deleteProduct(productId) {
  const sql = `
    delete from ${schema}.${table}
    where id = $1
  `;
  const result = await query(sql, [productId]);
  return result;
}


export {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct
};