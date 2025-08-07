export const TodoItemSkeleton = () => (
  <div className="bg-white/10 border border-white/20 rounded-xl p-4 animate-pulse">
    <div className="flex items-center space-x-3">
      <div className="h-6 w-6 bg-white/20 rounded-full" />
      
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-white/20 rounded w-3/4" />
        <div className="h-3 bg-white/10 rounded w-1/4" />
      </div>

      <div className="h-5 w-5 bg-white/20 rounded" />
    </div>
  </div>
);
