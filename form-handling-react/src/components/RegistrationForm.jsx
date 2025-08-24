import { useState } from "react";

export default function RegistrationForm() {
  const [values, setValues] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const onChange = (e) => setValues(v => ({ ...v, [e.target.name]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!values.username.trim()) e.username = "Username is required";
    if (!values.email.trim()) e.email = "Email is required";
    if (!values.password.trim()) e.password = "Password is required";
    return e;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length) return;

    try {
      setStatus("submitting");
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      setStatus("success");
      alert("Registered (mock): " + JSON.stringify(data, null, 2));
      setValues({ username: "", email: "", password: "" });
    } catch (err) {
      setStatus("error");
      console.error(err);
    }
  };

  return (
    <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
      <label>
        Username
        <input
          name="username"
          value={values.username}
          onChange={onChange}
          placeholder="jane_doe"
          style={{ width: "100%", padding: 8 }}
        />
        {errors.username && <small style={{ color: "crimson" }}>{errors.username}</small>}
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={onChange}
          placeholder="jane@example.com"
          style={{ width: "100%", padding: 8 }}
        />
        {errors.email && <small style={{ color: "crimson" }}>{errors.email}</small>}
      </label>

      <label>
        Password
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={onChange}
          placeholder="••••••••"
          style={{ width: "100%", padding: 8 }}
        />
        {errors.password && <small style={{ color: "crimson" }}>{errors.password}</small>}
      </label>

      <button disabled={status === "submitting"}>Register</button>
      {status === "submitting" && <small>Submitting…</small>}
      {status === "success" && <small style={{ color: "green" }}>Success!</small>}
      {status === "error" && <small style={{ color: "crimson" }}>Something went wrong.</small>}
    </form>
  );
}
