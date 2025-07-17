# 📘 Chapter 2: React Router & Navigating Between Pages

In this chapter, we will set up **React Router** for navigation between pages. We'll also create multiple pages and learn how to navigate using links.

---

## 🌐 Setting up React Router

### ✅ Step 1: Install React Router

```bash
npm install react-router
```

### ✅ Step 2: Basic Folder Structure

Create a `pages/` folder inside `src/`:

```
src/
├── pages/
│   ├── Home.jsx
│   └── About.jsx
```

### ✅ Step 3: Create Pages

**Home.jsx**

```jsx
import { Link } from "react-router"

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Goto <Link to="/about" className="text-blue-500">About</Link>
      </p>
    </div>
  )
}
```

**About.jsx**

```jsx
import { Link } from "react-router";

export const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        Goto <Link to="/" className="text-blue-500">Home</Link>
      </p>
    </div>
  )
}
```

---

## 🔗 Part 3: Setting Up Routes

Create `AppRoutes.jsx`:

```jsx
import { Route } from "react-router";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

export const AppRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
  </>
);
```

Update `App.jsx`:

```jsx
import './App.css'
import { Routes } from 'react-router'
import { AppRoutes } from './AppRoutes'

function App() {

  return (
    <Routes>
      {AppRoutes}
    </Routes>
  )
}

export default App

```

Update `main.jsx`

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

```

## Different ways to navigate and pass data between pages in react
1. state: Internally pass data during navigation
2. URL params: www.example.com/blogs/posts/post-1
3. Query params: www.example.com/blogs/posts?search=hello

---


## 🧭 1. `state` – Temporary In-Memory Data

### ✅ Best for:

* Passing data between pages **without showing in URL**.
* Simple use-cases like sending an email from a login form.

### 🛠 How to use:

```js
navigate('/about', { state: { email: 'test@example.com' } });
```

In target page:

```js
const location = useLocation();
const email = location.state?.email;
```

### ⚠️ Important:

* ❌ **Not saved in URL**
* ❌ **Not available on refresh**
* ❌ **Cannot be bookmarked or shared**

---

## 🌐 2. **URL Params** – Data in the Path

### ✅ Best for:

* Required data that’s part of the page identity (like `/user/:id`).
* Making URLs readable and meaningful.

### 🛠 How to use:

Route:

```js
<Route path="/about/:email" element={<About />} />
```

Navigate:

```js
navigate(`/about/${email}`);
```

In target page:

```js
const { email } = useParams();
```

### ⚠️ Important:

* ✅ **Saved in URL**
* ✅ **Works on refresh**
* ❌ **Not ideal for optional data or many fields**

---

## ❓ 3. **Query Params** – Flexible Data in URL

### ✅ Best for:

* Optional filters, search, or multiple pieces of data.
* Sharing/bookmarking with different parameters.

### 🛠 How to use:

Navigate:

```js
navigate(`/about?email=${email}&name=John`);
```

In target page:

```js
const [searchParams] = useSearchParams();
const email = searchParams.get('email');
```

### ⚠️ Important:

* ✅ **Saved in URL**
* ✅ **Works on refresh**
* ✅ **Supports multiple/optional values**
* 🧹 URL can get long/cluttered if overused

---

## 🧠 Quick Comparison Table

| Feature                   | `state`        | `URL params`       | `Query params`        |
| ------------------------- | -------------- | ------------------ | --------------------- |
| Shows in URL?             | ❌ No           | ✅ Yes (`/about/x`) | ✅ Yes (`/about?x=y`)  |
| Survives refresh?         | ❌ No           | ✅ Yes              | ✅ Yes                 |
| Bookmark/shareable?       | ❌ No           | ✅ Yes              | ✅ Yes                 |
| Good for multiple fields? | ❌ Not ideal    | ❌ Hard to scale    | ✅ Yes                 |
| Use case example          | Temp form data | `/user/:id`        | `/search?query=books` |

---

## 📌 Summary


✔ Installed and set up **React Router**

✔ Created and linked pages using `<Link>` and `<Route>`

✔ Learned how to structure files for routing

---
