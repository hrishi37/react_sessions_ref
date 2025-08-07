import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onToggle, onDelete }) => {
  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-white/40 text-lg mb-2">No tasks yet</div>
        <div className="text-white/30 text-sm">Add a task above to get started!</div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-xl font-semibold">Your Tasks</h2>
        <div className="text-white/60 text-sm">
          {completedCount} of {totalCount} completed
        </div>
      </div>
      
      <div className="space-y-3">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

