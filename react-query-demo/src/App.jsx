import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent.jsx";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main style={{ maxWidth: 800, margin: "2rem auto", fontFamily: "system-ui" }}>
        <h1>React Query Demo</h1>
        <PostsComponent />
      </main>
    </QueryClientProvider>
  );
}
