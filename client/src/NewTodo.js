import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createTodo } from "./api";

export default function NewTodo() {
  const [todoInput, setTodoInput] = useState("");
  const history = useHistory();

  // function to save input data temporarily
  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  // function to save the todo
  const saveTodo = async (e) => {
    await createTodo({ text: todoInput });
    // redirect back to homepage
    history.push("/");
  };

  return (
    <div className="container">
      <h2> Create a New Todo </h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={todoInput}
          onChange={handleChange}
        />
      </label>
      <button onClick={saveTodo}> Create Todo </button>
    </div>
  );
}
