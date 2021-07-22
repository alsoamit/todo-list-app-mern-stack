// Fetch todos
export const getTodos = () =>
    fetch("/todos").then((res) => res.json());

// Fetch a single todo
export const getTodo = (id) =>
    fetch(`/todos/${id}`).then((res) => res.json());

// Create a todo
export const createTodo = (data) =>
    fetch("/todos/create", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

// Update a todo
export const updateTodo = (data, id) =>
    fetch(`/todos/${id}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

// Delete a todo
export const deleteTodo = (id) =>
    fetch(`/todos/delete/${id}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });