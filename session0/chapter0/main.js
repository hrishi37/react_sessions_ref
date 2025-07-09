// Todo App Class
class TodoApp {
  constructor() {
    this.todos = [];
    this.nextId = 1;
    this.initializeElements();
    this.bindEvents();
  }

  // Initialize DOM elements
  initializeElements() {
    this.todoInput = document.getElementById('todo-input');
    this.addBtn = document.getElementById('add-btn');
    this.todoList = document.getElementById('todo-list');
    this.emptyState = document.getElementById('empty-state');
    this.toastContainer = document.getElementById('toast-container');
    this.totalCount = document.getElementById('total-count');
    this.completedCount = document.getElementById('completed-count');
    this.pendingCount = document.getElementById('pending-count');
  }

  // Bind event listeners
  bindEvents() {
    this.addBtn.addEventListener('click', () => this.addTodo());
    this.todoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.addTodo();
    });
  }

  // Add new todo
  addTodo() {
    const text = this.todoInput.value.trim();

    if (!text) {
      this.showToast('Please enter a task!', 'error');
      return;
    }

    const todo = {
      id: this.nextId++,
      text: text,
      completed: false,
      createdAt: new Date()
    };

    this.todos.push(todo);
    this.todoInput.value = '';
    this.renderTodos();
    this.updateStats();
    this.showToast('Task added successfully!', 'success');
  }

  // Toggle todo completion
  toggleTodo(id) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.renderTodos();
      this.updateStats();
      this.showToast(
        todo.completed ? 'Task marked as done!' : 'Task marked as pending!',
        todo.completed ? 'success' : 'info'
      );
    }
  }

  // Remove todo
  removeTodo(id) {
    this.todos = this.todos.filter(t => t.id !== id);
    this.renderTodos();
    this.updateStats();
    this.showToast('Task removed!', 'error');
  }

  // Render todos
  renderTodos() {
    // Clear existing content first
    this.todoList.innerHTML = '';

    if (this.todos.length === 0) {
      this.todoList.appendChild(this.emptyState);
      return;
    }

    // Hide empty state and render todos
    this.emptyState.style.display = 'none';

    this.todoList.innerHTML = this.todos.map(todo => `
                    <div class="todo-item bg-gray-50 rounded-xl p-4 border-2 border-transparent hover:border-purple-200 transition-all duration-200 animate-fade-in ${todo.completed ? 'opacity-75' : ''}" data-id="${todo.id}">
                        <div class="flex items-center gap-3">
                            <button 
                                class="toggle-btn w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${todo.completed ? 'bg-green-500 border-green-500' : 'border-gray-300 hover:border-green-400'}"
                                onclick="todoApp.toggleTodo(${todo.id})"
                            >
                                ${todo.completed ? '<span class="text-white text-xs">✓</span>' : ''}
                            </button>
                            <span class="flex-1 text-gray-800 ${todo.completed ? 'line-through text-gray-500' : ''}">${this.escapeHtml(todo.text)}</span>
                            <button 
                                class="remove-btn text-red-500 hover:text-red-700 transition-colors duration-200 p-1 rounded-lg hover:bg-red-50"
                                onclick="todoApp.removeTodo(${todo.id})"
                            >
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                `).join('');
  }

  // Update statistics
  updateStats() {
    const total = this.todos.length;
    const completed = this.todos.filter(t => t.completed).length;
    const pending = total - completed;

    this.totalCount.textContent = total;
    this.completedCount.textContent = completed;
    this.pendingCount.textContent = pending;
  }

  // Show toast notification
  showToast(message, type = 'info') {
    const toastId = Date.now();
    const colors = {
      success: 'bg-green-500',
      error: 'bg-red-500',
      info: 'bg-blue-500'
    };

    const toast = document.createElement('div');
    toast.id = `toast-${toastId}`;
    toast.className = `${colors[type]} text-white px-6 py-3 rounded-lg shadow-lg animate-slide-in flex items-center gap-3 min-w-64`;

    const icons = {
      success: '✓',
      error: '✕',
      info: 'ℹ'
    };

    toast.innerHTML = `
                    <span class="text-lg font-bold">${icons[type]}</span>
                    <span class="flex-1">${this.escapeHtml(message)}</span>
                    <button onclick="todoApp.hideToast('${toastId}')" class="hover:bg-black hover:bg-opacity-20 rounded p-1">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                `;

    this.toastContainer.appendChild(toast);

    // Auto-hide after 3 seconds
    setTimeout(() => {
      this.hideToast(toastId);
    }, 3000);
  }

  // Hide toast notification
  hideToast(toastId) {
    const toast = document.getElementById(`toast-${toastId}`);
    if (toast) {
      toast.classList.remove('animate-slide-in');
      toast.classList.add('animate-slide-out');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }
  }

  // Escape HTML to prevent XSS
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Initialize the app
const todoApp = new TodoApp();