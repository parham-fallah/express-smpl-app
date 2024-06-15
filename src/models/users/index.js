import { query } from "../../core/database/database-handler.js";

const schema = "public";
const table = "users";

async function usersList() {
  const sql = `select * from ${schema}.${table}`;
  const result = await query(sql);
  return result.rows;
}

export { usersList };
