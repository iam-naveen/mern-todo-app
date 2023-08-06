import Todo from "../models/Todo";
import { Request, Response } from "express";

export default async function deleteTodo(req: Request, res: Response) {
  try {
    const todoId = req.params.id;

    const deletedTodo = await Todo.findByIdAndDelete(todoId);
    res.json(deletedTodo);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Failed to delete Todo item", error: err.message });
  }
}
