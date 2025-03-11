import { useEffect, useState } from "react";
import { TodoProvider } from "./Contexts";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItem";
import { api } from "./api/axiosApi.js";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = async (todo) => {
    await api.post("", todo, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setTodos((prevTodos) => {
      return [todo, ...prevTodos];
    });
  };

  const deleteTodo = async (id) => {
    const deletedTodo = await api.delete(`/${id}`);
    setTodos((prev) => prev.filter((prevTodo) => prevTodo._id != id));
  };

  const updateTodo = async (id, todo) => {
    const updatedTodo = await api.put(`/${id}`, todo, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(updateTodo);
    setTodos((prev) => {
      return prev.map((prevTodo) => (prevTodo._id === id ? todo : prevTodo));
    });
  };

  const toggleCompleted = (id, todo) => {
    const updatedTodo = api.put(`/${id}`, todo, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setTodos((prev) => {
      return prev.map((prevTodo) => (prevTodo._id === id ? todo : prevTodo));
    });
  };

  const fetchTodos = async () => {
    const res = await api.get("");
    setTodos(res.data.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleCompleted }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-6 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div className=" w-full" key={todo._id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
