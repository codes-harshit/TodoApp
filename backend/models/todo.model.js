import mongoose from "mongoose";

const todosSchema = new mongoose.Schema(
  {
    todo: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Todo = mongoose.model("Todo", todosSchema);
