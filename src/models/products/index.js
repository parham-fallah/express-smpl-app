import { query } from '../../core/database/database-handler.js';

const schema = 'public';
const table = 'products'

async function userProducts() {
  const sql = `select * from ${schema}.${table}`;
  const result = await query(sql);
  return result.rows;
}


export {
  userProducts
};