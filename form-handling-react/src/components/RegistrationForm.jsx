"use client";
import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, email, password });
    // later: call your backend signup API here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 max-w-md mx-auto bg-white rounded-2xl shadow"
    >
      <h2 className="text-2xl font-bold">Sign Up</h2>

      <input
        type="text"
        placeholder="Username"
        value={username} // ✅ controlled
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded"
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email} // ✅ controlled
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password} // ✅ controlled
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Register
      </button>
    </form>
  );
}
