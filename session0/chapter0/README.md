
---

# 📘 Chapter 0: HTML, CSS, JavaScript & The Web

---

## 🌐 What is the Web?

* The **web** is a collection of websites accessed through the **Internet** using browsers like Chrome or Firefox.
* Websites are built using:

  * **HTML** – Structure
  * **CSS** – Style
  * **JavaScript** – Interactivity

Browsers render these files into the pages you see.

---

## 🧱 HTML – Structure

* **HTML (HyperText Markup Language)** defines the structure of a webpage.
* It uses **tags** like `<h1>`, `<p>`, `<img>`, `<a>`, etc.
* Every webpage starts with:

  ```html
  <!DOCTYPE html>
  <html>
    <head> ... </head>
    <body> ... </body>
  </html>
  ```

### ✅ Example:

```html
<h1>Todo App</h1>
<p>Add your tasks below</p>
```

---

## 🎨 CSS – Styling

* **CSS (Cascading Style Sheets)** controls how HTML looks.
* You can style things like:

  * Colors
  * Fonts
  * Layout
  * Spacing
* Styles can be added **inline**, in a `<style>` tag, or in a separate `.css` file.

### ✅ Example:

```css
h1 {
  color: blue;
  font-size: 2rem;
}
```

---

## ⚙️ JavaScript – Interactivity

* **JavaScript** makes websites interactive.
* It runs in the browser and can:

  * Respond to clicks
  * Fetch data from APIs
  * Modify the page dynamically (DOM manipulation)

### ✅ Example:

```js
document.getElementById("btn").addEventListener("click", () => {
  alert("Button clicked!");
});
```

---

## 🛠 How They Work Together

When you visit a website:

1. The browser loads the **HTML**
2. Applies **CSS** styles
3. Runs **JavaScript** to add interactivity

---

## 📂 Typical File Structure

```
project/
│
├── index.html     → HTML entry point
├── styles.css     → CSS file
└── script.js      → JavaScript file
```

HTML links them like this:

```html
<link rel="stylesheet" href="styles.css" />
<script src="script.js" defer></script>
```

---

## 📡 How Browsers Get This

* You type a URL (e.g. `example.com`)
* Browser sends a request to a **server**
* Server responds with HTML, CSS, JS files
* Browser builds and shows the page

---
