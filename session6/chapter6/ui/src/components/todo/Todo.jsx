import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { Toast } from "../Toast";
import { useTodos } from "../../hooks/useTodo";
import { TodoItemSkeleton } from "./TodoSkeleton";

export const Todo = () => {
  const [toast, setToast] = useState(null);

  const {
    todos,
    loading,
    error,
    addTodo,
    editTodo,
    removeTodo,
  } = useTodos();

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const closeToast = () => {
    setToast(null);
  };

  const handleAddTodo = async (text) => {
    const newTodo = {
      text,
    };
    try {
      await addTodo(newTodo);
      showToast('Task added successfully!', 'success');
    } catch (error) {
      console.error('Error adding todo:', error);
      showToast('Error adding the task', 'error');
    }
  };

  const handleToggleTodo = async (id, completed) => {
    const updatedTodo = {
      completed
    }
    try {
      await editTodo(id, updatedTodo)
      showToast('Task updated successfully!', 'success');
    } catch (error) {
      console.error('Error updating todo:', error);
      showToast('Error updating the task', 'error');
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await removeTodo(id);
      showToast('Task deleted successfully!', 'success');
    } catch (error) {
      console.error('Error deleting todo:', error);
      showToast('Error when deleting the task', 'error');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <>
          {error && (
            <div className="text-white px-6 py-3 rounded-lg shadow-lg bg-red-500 text-center text-sm">Error occurred: {error}</div>
          )}
        </>
        <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Todo List
        </h1>
        <p className="text-white/60">Stay organized and get things done</p>
      </div>
      <TodoInput onAddTodo={handleAddTodo} />
      
      {loading && (<>
        <TodoItemSkeleton />
      </>)}

      <TodoList
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
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