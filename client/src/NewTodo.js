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
    <div className="create-todo">
      <h1> Create a New Todo </h1>
      <div className="inputBox">
        <textarea
        placeholder = "Write from Here"
          type="text"
          name="name"
          value={todoInput}
          onChange={handleChange}
        />
      <button className = "btn_primary" onClick={saveTodo}> Save Todo </button>
      </div>
    </div>
  );
}
