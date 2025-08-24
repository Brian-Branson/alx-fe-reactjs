import TodoList from "./components/TodoList.jsx";
import AddTodoForm from "./components/AddTodoForm.jsx";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo", completed: true },
  ]);

  const addTodo = (text) => {
    const t = text.trim();
    if (!t) return;
    setTodos((prev) => [...prev, { id: Date.now(), text: t, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter(t => t.id !== id));
  };

  return (
    <main style={{ fontFamily: "system-ui", maxWidth: 520, margin: "2rem auto" }}>
      <h1>React Todo</h1>
      <AddTodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </main>
  );
}
