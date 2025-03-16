import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "../config/db.js";
import userRoute from "../routes/userRoute.js";
import errorHandler from "../midlewares/errorHandler.js";
import createUsersTable from "../data/createUsersTable.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api", userRoute);

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT current_database()");
  res.send(`Database name id ${result.rows[0].current_database}`);
});

app.use(errorHandler);

createUsersTable();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
