
---

## ✅ Chapter 4: Creating a Todo List App

### 🎯 Goal

The goal here is to build a simple yet functional **Todo List** using multiple components. This gives you hands-on practice with:

* **Component design**
* **State management**
* **Props and event handling**
* **React rendering flow**

---

### 🧩 Components Overview

#### 1. **TodoItem**

* Represents a **single todo task**.
* Likely displays:

  * The task name
  * A checkbox to mark it done
  * A delete button to remove the item
* This component receives props from its parent (like the task data and event handlers).

#### 2. **TodoList**

* Acts as a **wrapper** that holds and renders multiple `TodoItem`s.
* It maps through a list of todos and renders each as a `TodoItem`.
* Handles logic like:

  * Filtering
  * Passing callbacks for marking as done or deleting

#### 3. **TodoInput**

* A form or input area where the user types in a new todo and adds it.
* It:

  * Uses internal state for the current input value
  * Triggers a callback (from props) to add the new todo when submitted

#### 4. **Todo**

* This is the **main container** that:

  * Manages the main state (the list of todos)
  * Passes props to `TodoInput` and `TodoList`
  * May also handle logic like filtering or clearing completed todos

---

### 🔄 Data Flow Summary

```text
User types -> TodoInput -> Parent (Todo component) adds to list -> TodoList displays -> TodoItem actions (done/delete) update state in Todo Page
```

---

### ⚠️ Commonly Missed or Overlooked Points

* ❗ **Unique keys for list items**: Always use a unique identifier (like an ID) when rendering lists to prevent rendering bugs.
* ✏️ **Input field should be controlled**: The input’s value should be tied to state (a "controlled component") for proper data flow.
* 🗑️ **Proper cleanup**: When deleting todos, make sure you’re not mutating state directly — always create a new array.
* ✅ **Toggling "done" status**: Avoid directly modifying the `done` property; instead, return a new updated todo object.
* 📦 **State lifting**: All state (like the list of todos) should live in the top-level component (e.g. the Todo Page) and be passed down.
* 🧠 **Empty state UX**: Show a friendly message when there are no todos.
* 🧪 **Component reusability**: Consider if parts of `TodoItem` can be reused or extended in the future (e.g. for subtasks).
* 🧼 **Avoid unnecessary re-renders**: Make sure components are efficient. Excessive re-renders can slow things down even in small apps.
* 🌙 **Bonus ideas**:

  * Add a “clear completed” button.
  * Allow editing an existing todo.
  * Add local storage to persist todos.

---