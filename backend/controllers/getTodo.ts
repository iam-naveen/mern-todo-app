import Todo from "../models/Todo";
import { Request, Response } from "express";

export async function getAllTodo(req: Request, res: Response) {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch Todo items", error: err.message });
  }
}

export async function getTodo(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    res.json(todo);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch Todo items", error: err.message });
  }
}