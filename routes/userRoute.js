import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import userValidation from "../midlewares/inputValidation.js";

const router = Router();

router.post("/user", userValidation, createUser);
router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.put("/user/:id", userValidation, updateUser);
router.delete("/user/:id", deleteUser);

export default router;
