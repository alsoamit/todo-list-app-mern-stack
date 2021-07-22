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

  const onDelete = (id) => {
    deleteTodo(id);
    fetchTodos();
  };

  return (
    <div className="container">
      <h1> TodoList </h1>
      <main>
          {todoItems.map((todo) => {
            if (!todo.text) return;
            return (
              <div className = "todo" key={todo._id}>
                <div className="text"> {todo.text} </div>
                <Link to={`/edit/${todo._id}`}>
                 <button className="btn_primary">Edit</button> 
                 </Link>
                <button
                className = "btn_primary err"
                  onClick={() => {
                    onDelete(todo._id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
      </main>
    </div>
  );
}
