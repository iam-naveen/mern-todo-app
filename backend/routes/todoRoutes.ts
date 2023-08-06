import express from "express";
import {
  getAllTodo,
  getTodo,
  createTodo,
  updateTodoData,
  updateTodoStatus,
  deleteTodo,
} from "../controllers/index";

const router = express.Router();

router.get("/all", getAllTodo);

router.get("/:id", getTodo);

router.post("/create", createTodo);

router.put("/:id", updateTodoData);

router.patch("/:id/done", updateTodoStatus);

router.delete("/:id", deleteTodo);

export default router;
