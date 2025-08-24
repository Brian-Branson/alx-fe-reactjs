import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const { state } = useLocation();

  const login = () => {
    localStorage.setItem("demo_authed", "1");
    nav(state?.from?.pathname || "/profile", { replace: true });
  };
  const logout = () => {
    localStorage.removeItem("demo_authed");
    nav("/", { replace: true });
  };

  return (
    <>
      <h1>Login</h1>
      <button onClick={login}>Login (mock)</button>{" "}
      <button onClick={logout}>Logout</button>
      {state?.from && <p>Redirected from: {state.from.pathname}</p>}
    </>
  );
}
