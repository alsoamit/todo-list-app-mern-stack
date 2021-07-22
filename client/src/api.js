// Fetch todos
export const getTodos = () =>
    fetch("/todos").then((res) => res.json());

// Fetch a single todo
export const getTodo = (id) =>
    fetch(`/${id}`).then((res) => res.json());

// Create a todo
export const createTodo = (data) =>
    fetch("http://localhost:5000/create", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

// Update a todo
export const updateTodo = (data, id) =>
    fetch(`/${id}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

// Delete a todo
export const deleteTodo = (id) =>
    fetch(`http://localhost:5000/${id}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });