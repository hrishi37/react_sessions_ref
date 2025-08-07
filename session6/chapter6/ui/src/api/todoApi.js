const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL || 'http://localhost:3000';

// Create a new todo
export const createTodo = async (todo) => {
  const response = await fetch(`${API_BASE_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  
  if (!response.ok) {
    throw new Error(`Failed to create todo: ${response.statusText}`);
  }
  
  return response.json();
};

// Get all todos
export const getAllTodos = async () => {
  const response = await fetch(`${API_BASE_URL}/todos`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch todos: ${response.statusText}`);
  }
  
  return response.json();
};

// Update a todo
export const updateTodo = async (id, updatedTodo) => {
  const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTodo),
  });
  
  if (!response.ok) {
    throw new Error(`Failed to update todo: ${response.statusText}`);
  }
  
  return response.json();
};

// Delete a todo
export const deleteTodo = async (id) => {
  const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error(`Failed to delete todo: ${response.statusText}`);
  }
  
  // DELETE might return empty response
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json();
  }
  return true;
};