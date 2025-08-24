import { useState } from "react";

export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={submit} aria-label="add-todo-form" style={{ display: "flex", gap: 8, marginBottom: 12 }}>
      <input
        placeholder="Add todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="todo-input"
        style={{ flex: 1, padding: 8 }}
      />
      <button type="submit">Add</button>
    </form>
  );
}
