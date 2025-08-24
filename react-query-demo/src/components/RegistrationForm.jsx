"use client";
import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // ✅ to store validation errors

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // ✅ Validation checks
    if (!username) {
      newErrors.username = "Username is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    // Stop submit if there are errors
    if (Object.keys(newErrors).length > 0) return;

    console.log({ username, email, password });
    // later: send to backend API
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 max-w-md mx-auto bg-white rounded-2xl shadow"
    >
      <h2 className="text-2xl font-bold">Sign Up</h2>

      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        {errors.username && (
          <span className="text-red-500 text-sm">{errors.username}</span>
        )}
      </div>

      <div className="flex flex-col">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email}</span>
        )}
      </div>

      <div className="flex flex-col">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        {errors.password && (
          <span className="text-red-500 text-sm">{errors.password}</span>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Register
      </button>
    </form>
  );
}
