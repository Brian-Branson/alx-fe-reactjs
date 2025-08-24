export default function TodoList({ todos, onToggle, onDelete }) {
  if (!todos.length) return <p>No todos yet.</p>;
  return (
    <ul>
      {todos.map((t) => (
        <li key={t.id} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <span
            role="button"
            onClick={() => onToggle(t.id)}
            style={{
              textDecoration: t.completed ? "line-through" : "none",
              cursor: "pointer",
              flex: 1,
            }}
          >
            {t.text}
          </span>
          <button aria-label={`delete-${t.id}`} onClick={() => onDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
