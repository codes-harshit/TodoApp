import mongoose from "mongoose";

const todosSchema = new mongoose.Schema(
  {},
  {
    timestamps: true,
  }
);

export const Todo = mongoose.model("Todo", todosSchema);
