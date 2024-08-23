import { query } from '../../core/database/database-handler.js';

async function getTasks() {
  const sql = `select * from public.tasks;`;
  const result = await query(sql);
  return result.rows;
}

async function getTasksByUserIdDataService(userId) {
  const sql = `select * from public.tasks where user_id = $1;`;
  const result = await query(sql, [userId]);
  return result.rows;
}

async function getTaskById(id, userId) {
  const sql = `
    select * 
    from public.tasks
    where id = $1 and user_id = $2;
  `;
  const result = await query(sql, [id, userId]);
  return result.rows;
}

async function createTask(title, description, isCompleted) {
  const sql = `
    insert into public.tasks
    (title, description, is_completed)
    values
    ($1, $2, $3);
  `;
  const result = await query(sql, [title, description, isCompleted]);
  return result;
}

export {
  getTasks,
  createTask,
  getTaskById,
  getTasksByUserIdDataService
};