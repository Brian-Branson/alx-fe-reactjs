import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App.jsx";

test("renders initial todos", () => {
  render(<App />);
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Build a Todo/i)).toBeInTheDocument();
});

test("adds a new todo", async () => {
  render(<App />);
  const input = screen.getByLabelText("todo-input");
  await userEvent.type(input, "Write tests");
  fireEvent.submit(screen.getByRole("form", { name: "add-todo-form" }));
  expect(screen.getByText("Write tests")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<App />);
  const item = screen.getByText("Learn React");
  expect(item).not.toHaveStyle({ textDecoration: "line-through" });
  fireEvent.click(item);
  expect(item).toHaveStyle({ textDecoration: "line-through" });
});

test("deletes a todo", () => {
  render(<App />);
  const item = screen.getByText("Build a Todo");
  const li = item.closest("li");
  const delBtn = li.querySelector("button");
  fireEvent.click(delBtn);
  expect(screen.queryByText("Build a Todo")).not.toBeInTheDocument();
});
