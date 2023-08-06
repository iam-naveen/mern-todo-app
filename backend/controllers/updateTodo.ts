import Todo from "../models/Todo";
import { Request, Response } from "express";

export async function updateTodoData(req: Request, res: Response) {
  try {
    const { title, description, completed } = req.body;
    const todoId = req.params.id;

    const updatedTodo = await Todo.findByIdAndUpdate(
      todoId,
      { title, description, completed },
      { new: true }
    );

    res.json(updatedTodo);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Failed to update Todo item", error: err.message });
  }
}

export async function updateTodoStatus(req: Request, res: Response) {
  try {
    const todoId = req.params.id;
    const { completed } = req.body;

    if (typeof completed !== "boolean") {
      return res.status(400).json({ message: "Invalid completed status" });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      todoId,
      { completed },
      { new: true }
    );

    res.json(updatedTodo);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Failed to update Todo item", error: err.message });
  }
}