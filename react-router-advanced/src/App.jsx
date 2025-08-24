"use client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import PostsComponent from "./components/PostsComponent";

export default function App() {
  return (
    <BrowserRouter>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">My React App</h1>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/posts" element={<PostsComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
