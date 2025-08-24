import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>Try visiting <Link to="/profile">Profile</Link> (needs login) and a dynamic route like <Link to="/posts/7">/posts/7</Link>.</p>
    </>
  );
}
