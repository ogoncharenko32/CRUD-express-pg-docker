import pool from "../config/db.js";

const createUsersTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
  )`;

  try {
    await pool.query(queryText);
    console.log("Users table created");
  } catch (error) {
    console.error("Error creating users table:", error);
  }
};

export default createUsersTable;
