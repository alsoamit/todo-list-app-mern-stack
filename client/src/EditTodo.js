import { useState, useEffect } from "react";
import { getTodo, updateTodo } from "./api";
import { useRouteMatch, useHistory } from "react-router-dom";

export default function EditTodo() {
  const match = useRouteMatch();
  const [todoPreload, setTodoPreload] = useState("");
  const history = useHistory();

  useEffect(() => {
    const fetchTodo = async () => {
      const todo = await getTodo(match.params.id);
      setTodoPreload(todo.text);
    };
    fetchTodo();
  }, []);

  const handleChange = (e) => {
    setTodoPreload(e.target.value);
  };

  const onSave = async (e) => {
    await updateTodo({ text: todoPreload }, match.params.id);
    // redirect back to homepage
    history.push("/");
  };

  return (
    <div className="edit-todo">
      <h1> Edit the Todo </h1>
      <div className="inputBox">
        <textarea
          type="text"
          name="name"
          value={todoPreload}
          onChange={handleChange}
        />
      <button className="btn_primary" onClick={onSave}> Save </button>
        </div>
    </div>
  );
}
