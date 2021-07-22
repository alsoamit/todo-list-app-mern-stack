import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteTodo, getTodos } from "./api";

export default function TodoList() {
  const [todoItems, setTodoItems] = useState([]);

  const fetchTodos = async () => {
    const todos = await getTodos();
    setTodoItems(todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const onDelete = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  return (
    <div className="container">
      <h2> TodoList </h2>
      <table>
        <thead>
          <tr>
            <th> Text </th>
            <th> Action </th>
          </tr>
        </thead>
        <tbody>
          {todoItems.map((todo) => {
            if (!todo.text) return;
            return (
              <tr key={todo._id}>
                <td> {todo.text} </td>
                <Link to={`/edit/${todo._id}`}> Edit </Link>
                <button
                  onClick={() => {
                    onDelete(todo._id);
                  }}
                >
                  Delete
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
