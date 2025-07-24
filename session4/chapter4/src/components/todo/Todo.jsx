import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { Toast } from "../Toast";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const closeToast = () => {
    setToast(null);
  };

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTodos(prev => [newTodo, ...prev]);
    showToast('Task added successfully!', 'success');
  };

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        const updated = { ...todo, completed: !todo.completed };
        showToast(
          updated.completed ? 'Task completed! 🎉' : 'Task marked as incomplete',
          'success'
        );
        return updated;
      }
      return todo;
    }));
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
    showToast('Task deleted', 'error');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Todo List
        </h1>
        <p className="text-white/60">Stay organized and get things done</p>
      </div>

      <TodoInput onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={closeToast}
        />
      )}
    </div>
  );
};