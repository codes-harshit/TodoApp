import { Todo } from "../models/todo.model.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    return res.status(200).json({
      success: true,
      data: todos,
      message: "Todos fetched successfully",
    });
  } catch (error) {
    console.log(`Unable to get Todos: ${error}`);
  }
};

export const addTodo = async (req, res) => {
  try {
    const { todo, completed } = req.body;
    const newTodo = await Todo.create({ todo, completed });

    if (!newTodo) {
      return res.status(400).json({
        success: false,
        message: "Unable to add Todo",
      });
    }

    return res.status(200).json({
      success: true,
      data: newTodo,
      message: "Todo added successfully",
    });
  } catch (error) {
    console.log(`Unable to add Todo: ${error}`);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      data: todo,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    console.log(`Unable to delete Todo: ${error}`);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { todo, completed } = req.body;
    const updateTodo = await Todo.findByIdAndUpdate(
      id,
      { todo, completed },
      { new: true }
    );

    if (!updateTodo) {
      return res
        .status(500)
        .json({ success: false, message: "Unable to update Todo" });
    }
    return res.status(200).json({
      success: true,
      data: updateTodo,
      message: "Todo updated successfully",
    });
  } catch (error) {
    console.log(`Unable to update Todo: ${error}`);
  }
};
