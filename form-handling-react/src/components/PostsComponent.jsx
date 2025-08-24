import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network error");
  return res.json();
};

export default function PostsComponent() {
  const [enabled, setEnabled] = useState(true);
  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    enabled,
    staleTime: 1000 * 60, // 1 minute: shows caching behavior
  });

  return (
    <section style={{ display: "grid", gap: 12 }}>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => refetch()}>Refetch Posts</button>
        <button onClick={() => setEnabled((e) => !e)}>
          {enabled ? "Disable" : "Enable"} Query
        </button>
      </div>

      {isLoading && <p>Loading…</p>}
      {error && <p style={{ color: "crimson" }}>{error.message}</p>}

      {data && (
        <>
          <p>{isFetching ? "Updating…" : "Up to date."}</p>
          <ul>
            {data.slice(0, 10).map((p) => (
              <li key={p.id}>
                <strong>{p.id}.</strong> {p.title}
              </li>
            ))}
          </ul>
          <small>Navigate away and back to see cached data load instantly.</small>
        </>
      )}
    </section>
  );
}
