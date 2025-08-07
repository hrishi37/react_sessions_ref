import { useState } from "react";
import { Plus } from "lucide-react";
import { z } from "zod";

const todoSchema = z.string()
  .min(1, "Todo cannot be empty")
  .max(50, "Todo cannot exceed 50 characters");

export const TodoInput = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const validatedTodo = todoSchema.parse(inputValue.trim());
      onAddTodo(validatedTodo);
      setInputValue('');
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        setError(validationError.errors[0].message);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // Clear error when user starts typing
    if (error) {
      setError('');
    }
  };

  const isInputValid = inputValue.trim().length > 0 && inputValue.trim().length <= 100;
  const characterCount = inputValue.length;

  return (
    <div className="mb-8">
      <div className="flex space-x-3">
        <div className="flex-1 relative">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyUp={handleKeyPress}
            placeholder="Add a new task..."
            className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 ${
              error 
                ? 'border-red-400 focus:ring-red-400' 
                : 'border-white/20 focus:ring-purple-400'
            }`}
            maxLength={51}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-white/60">
            {characterCount}/50
          </div>
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!isInputValid}
          className={`px-6 py-3 text-white rounded-xl font-medium transition-all duration-200 transform focus:outline-none focus:ring-2 focus:ring-purple-400 flex items-center space-x-2 ${
            isInputValid
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-105'
              : 'bg-gray-400 cursor-not-allowed opacity-50'
          }`}
        >
          <Plus size={20} />
          <span>Add</span>
        </button>
      </div>
      {error && (
        <div className="mt-2 text-red-400 text-sm px-1">
          {error}
        </div>
      )}
    </div>
  );
};