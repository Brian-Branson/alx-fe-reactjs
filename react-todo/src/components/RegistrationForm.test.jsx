// src/components/RegistrationForm.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RegistrationForm from "./RegistrationForm";

test("renders RegistrationForm with all fields", () => {
  render(<RegistrationForm />);
  expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
});

test("shows errors when submitting empty form", () => {
  render(<RegistrationForm />);
  fireEvent.click(screen.getByRole("button", { name: /register/i }));
  expect(screen.getByText(/username is required/i)).toBeInTheDocument();
  expect(screen.getByText(/email is required/i)).toBeInTheDocument();
  expect(screen.getByText(/password is required/i)).toBeInTheDocument();
});

