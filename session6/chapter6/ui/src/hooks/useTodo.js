import { useState, useEffect } from "react";
import { getAllTodos, createTodo, updateTodo, deleteTodo } from "../api/todoApi";

// Custom hook
export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all todos
  const fetchTodos = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllTodos();
      setTodos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Add new todo
  const addTodo = async (text) => {
    setError(null);
    try {
      const newTodo = await createTodo(text);
      setTodos(prev => [...prev, newTodo]);
      return newTodo;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Update existing todo
  const editTodo = async (id, updates) => {
    setError(null);
    try {
      const updatedTodo = await updateTodo(id, updates);
      setTodos(prev => prev.map(todo => 
        todo.id === id ? updatedTodo : todo
      ));
      return updatedTodo;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Remove todo
  const removeTodo = async (id) => {
    setError(null);
    try {
      await deleteTodo(id);
      setTodos(prev => prev.filter(todo => todo.id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Load todos on mount
  useEffect(() => {
    fetchTodos();
  }, []);

  return {
    todos,
    loading,
    error,
    addTodo,
    editTodo,
    removeTodo,
    refreshTodos: fetchTodos,
  };
};