import { Circle, CheckCircle2, Trash2 } from "lucide-react";

export const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-200 transform hover:scale-[1.02]">
      <div className="flex items-center space-x-3">
        <button
          onClick={() => onToggle(todo.id, !todo.completed)}
          className="flex-shrink-0 transition-all duration-200 hover:scale-110 hover:cursor-pointer"
        >
          {todo.completed ? (
            <CheckCircle2 size={24} className="text-green-400" />
          ) : (
            <Circle size={24} className="text-white/60 hover:text-white" />
          )}
        </button>
        
        <div className="flex-1 min-w-0">
          <p className={`text-white transition-all duration-200 ${
            todo.completed 
              ? 'line-through text-white/60' 
              : ''
          }`}>
            {todo.text}
          </p>
          <p className="text-white/40 text-sm mt-1">
            {new Date(todo.createdAt).toLocaleDateString()}
          </p>
        </div>
        
        <button
          onClick={() => onDelete(todo.id)}
          className="flex-shrink-0 p-2 text-white/60 hover:text-red-400 transition-all duration-200 group-hover:opacity-100 hover:scale-110 hover:cursor-pointer"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};
