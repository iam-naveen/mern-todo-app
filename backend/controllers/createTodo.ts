
import Todo from "../models/Todo";
import { Request, Response } from "express";

export default async function createTodo(req: Request, res: Response) {
  try {
    const { title, description } = req.body;

    const newTodo = new Todo({
      title,
      description,
    });

    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Failed to create Todo item", error: err.message });
  }
}
