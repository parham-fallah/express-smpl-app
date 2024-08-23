import { query } from '../../core/database/database-handler.js';

// Function to get a user by username
const getUserByUsername = async (username) => {
  const sql = 'SELECT * FROM public.users WHERE username = $1';
  const params = [username];
  try {
    const result = await query(sql, params);
    return result.rows[0]; // Assuming you want the first matching user
  } catch (error) {
    throw new Error(`Unable to retrieve user: ${error.message}`);
  }
};

// Function to get a user by id
const getUserById = async (userId) => {
  const sql = 'SELECT * FROM public.users WHERE id = $1';
  const params = [userId];
  try {
    const result = await query(sql, params);
    return result.rows[0]; // Assuming you want the first matching user
  } catch (error) {
    throw new Error(`Unable to retrieve user: ${error.message}`);
  }
};

// Function to create a new user
const createUser = async (username, password, email, role) => {
  const sql = `
    INSERT INTO public.users (username, password, email, role)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const params = [username, password, email, role];
  try {
    const result = await query(sql, params);
    return result.rows[0]; // Return the newly created user
  } catch (error) {
    throw new Error(`Unable to create user: ${error.message}`);
  }
};


// Function to update a user
const updateUser = async (id, fields) => {
  const setString = Object.keys(fields).map((key, index) => `${key} = $${index + 2}`).join(', ');
  const sql = `UPDATE public.users SET ${setString} WHERE id = $1 RETURNING *;`;
  const params = [id, ...Object.values(fields)];
  try {
    const result = await query(sql, params);
    return result.rows[0]; // Return the updated user
  } catch (error) {
    throw new Error(`Unable to update user: ${error.message}`);
  }
};

// Function to delete a user
const deleteUser = async (id) => {
  const sql = 'DELETE FROM public.users WHERE id = $1 RETURNING *;';
  const params = [id];
  try {
    const result = await query(sql, params);
    return result.rows[0]; // Return the deleted user
  } catch (error) {
    throw new Error(`Unable to delete user: ${error.message}`);
  }
};

export {
  getUserByUsername,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}