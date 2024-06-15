import { query } from "../../core/database/database-handler.js";

const schema = "public";
const table = "users";

async function usersList() {
  const sql = `select * from ${schema}.${table}`;
  const result = await query(sql);
  return result.rows;
}

async function createUser(userData) {
  let defaultDate = new Date();
  let { username, password, email, created_at, last_login } = userData;
  if (!created_at) {
    created_at = defaultDate;
  }
  if (!last_login) {
    last_login = defaultDate;
  }
  const sql = `
      insert into ${schema}.${table}
      (username, password, email, created_at, last_login)
      values
      ($1, $2, $3, $4, $5)
    `;
  const result = await query(sql, [
    username,
    password,
    email,
    created_at,
    last_login,
  ]);
  return result;
}

async function deleteUser(userId) {
  const sql = `
      delete from ${schema}.${table}
      where id = $1
    `;
  const result = await query(sql, [userId]);
  return result;
}

export { usersList, createUser, deleteUser };
