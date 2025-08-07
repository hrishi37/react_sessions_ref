
## ✅ Chapter 6: Integrating API & Handling Loading/Error States


### 🎯 Goal

The goal here is to connect your frontend **Todo app** to a **backend API** for persistent data using:

* API layer (`api/todoApi.js`)
* Stateful custom hook (`hooks/useTodo.js`)
* UI logic with error/loading handling (`components/todo/Todo.jsx`)

---

### 🧰 Before You Use Custom Hooks – Simple `fetch` Example

Before introducing a dedicated API layer and custom hook, it's helpful to understand the **basic request flow** using `fetch()` directly.

Here’s a simple way to **fetch todos from [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos)** and render them in a React component:

```js
import { useEffect, useState } from "react";

function SimpleTodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setTodos(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
```
---

### 🧠 Understanding `useEffect`

The `useEffect` hook lets you **run code after your component renders** — for example, to fetch data, set up subscriptions, or change the document title.

---

### 📦 Basic Syntax

```js
useEffect(() => {
  // Code here runs after the component is mounted (shown on screen)
}, []);
```

* The first argument is a **function** (called the effect).
* The second argument is an **array of dependencies** (optional).

---

### ✅ Example: Fetch Data When Component Loads

```js
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => console.log(data));
}, []);
```

* The empty array `[]` means: “only run this once, after the first render.”
* This is similar to `componentDidMount` in class components.

---

### 🔁 Reacting to Changes

You can also run code **when a variable changes**:

```js
useEffect(() => {
  console.log("The `count` value changed:", count);
}, [count]);
```

* This will run every time the `count` variable changes.

---

### 🧹 Cleanup (Optional)

If your effect sets something up (like a timer or subscription), you can **clean it up**:

```js
useEffect(() => {
  const id = setInterval(() => console.log("Tick"), 1000);
  
  return () => clearInterval(id); // Cleanup when component unmounts
}, []);
```

---

### 📝 Summary

| Concept              | Meaning                                |
| -------------------- | -------------------------------------- |
| `useEffect(fn)`      | Runs `fn` after **every render**       |
| `useEffect(fn, [])`  | Runs `fn` **once**, after first render |
| `useEffect(fn, [x])` | Runs `fn` when `x` **changes**         |
| `return () => {}`    | Optional **cleanup** function          |

---

Use `useEffect` any time you want to:

* Fetch data
* Set timers or intervals
* Listen to events (and clean them up)
* Sync external systems with your component

---

### 🧱 1. **API Layer (`todoApi.js`)**

This file abstracts all CRUD operations:

* `getTodos`, `createTodo`, `updateTodo`, `deleteTodo`
* Uses `fetch()` and gets the base URL from:

  ```js
  import.meta.env.REACT_APP_API_BASE_URL
  ```
* Returns the parsed data
* Throws an error if the response is not OK

#### 🔍 Why this is useful:

* Keeps fetch logic centralized and reusable
* Easier to maintain and test
* Allows cleaner hooks and components

---

### 🔁 2. **Custom Hook (`useTodo.js`)**

This hook is responsible for:

* Holding `todos`, `loading`, and `error` states
* Calling the API functions from `todoApi.js`
* Managing reactivity (e.g. fetching todos on mount)
* Providing functions like `addTodo`, `deleteTodo`, etc.

#### ✅ Benefits:

* Centralizes data logic
* Makes the component (`Todo.jsx`) cleaner and more focused on UI
* Easy to test and reuse

---

### 🧩 3. **Todo Component (`Todo.jsx`)**

This component:

* Uses the `useTodo` hook
* Displays:

  * Skeleton loader when `loading === true`
  * Error message if `error !== null`
  * Actual todo list when data is loaded
* Also shows **toast notifications** on errors or actions (like successful deletion)

---

### ⚙️ 4. **Loading State**

When the API is being called (initial fetch or mutation):

* A **skeleton loader** is shown instead of a blank screen
* This improves **perceived performance** and provides visual feedback

---

### ❗ 5. **Error State**

If there's an error during API calls:

* An error message is displayed (e.g. “Failed to fetch todos”)
* A **toast notification** may also be shown for better UX
* Prevents user confusion and gives clear feedback

---

### ✅ What You’ve Done Right

* Separated concerns: API, state, and UI are in different files
* Used `env` variables for flexibility
* Provided user feedback for every major state: success, loading, error
* Used toast notifications for **non-blocking but noticeable feedback**

---

### ⚠️ Commonly Missed or Overlooked Points

* ❗ **Don't forget to handle rejections** from `fetch()` and unexpected exceptions (`try/catch`)
* ❌ **Avoid duplicated API calls** (e.g. unnecessary re-fetches)
* 🧪 **Test for empty states** (no todos returned)
* 🧼 **Handle toast spam** — avoid firing multiple toasts on rapid user actions
* 🔁 **Keep UI in sync** — after add/delete, ensure local state matches the backend
* 🌐 **Check API base URL** — make sure `.env` is correctly loaded and variables are prefixed with `VITE_` if you're using Vite (not `REACT_APP_`)

---

### 🌱 Bonus Ideas

* Add **retry** or **refresh** button on error state
* Show specific error messages from API (e.g. validation errors)
* Add `isSubmitting` flag separately from `loading` if you want better granularity during add/update/delete

---
