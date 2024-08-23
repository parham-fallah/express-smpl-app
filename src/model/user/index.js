import { query } from '../../core/database/database-handler.js';

async function createUser(username, password, role) {
  const sql = `
    insert into public.users 
      (username, password, role) 
    values 
      ($1, $2, $3);
  `;
  const queryResult = await query(sql, [username, password, role]);
  return queryResult;
}

async function getUserByUsername(username) {
  const sql = `
    select * from public.users 
    where username = $1 ;
  `;
  const queryResult = await query(sql, [username]);
  return queryResult.rows[0];
}

export {
  createUser,
  getUserByUsername
}