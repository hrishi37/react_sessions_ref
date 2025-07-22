---

## ✅ Chapter 3: Components

### 🎯 Overview
In this chapter, you're diving into **React components**, focusing on:

- Structuring the UI using reusable pieces like `Navbar` and `Footer`
- Learning how **props** allow components to be dynamic and flexible

---

### 🧩 Components: Concept

Components are the building blocks of any React application. Think of them as **custom HTML elements** that you can reuse and compose together to form your UI.

There are two main types:
- **Functional Components** (commonly used today)
- **Class Components** (older style, still useful to recognize)

---

### ✅ Steps for creating components
- Create the file inside the desired folder: ComponentName.jsx
- Export the component and return the JSX

```jsx
export const ComponentName = () => {
   return (<>
      <h1>Hello World</h1>
   </>);
}
```

- Then import the component in desired file
import {ComponentName} from 'path/to/component'
- Then render the component in JSX
```jsx 
...
return (
   <>
      <ComponentName prop1={value1} prop2={value2} />
   </>
)
...

```

### 🧱 Navbar and Footer Components


- A `Navbar` is a component at the top of the page
- A `Footer` is a component at the bottom

#### Key Concepts Involved:
- **Reusability**: Once created, these components can be reused across multiple pages.
- **Separation of concerns**: You keep layout structure separate from business logic.
- **Consistency**: All pages have a consistent header/footer without code duplication.

---

### 📦 Props: Passing Data to Components

**Props** (short for properties) are how you pass data into components. They make components dynamic by allowing parent components to send in different values.

Example without code:
- If your `Navbar` shows a title or a logged-in username, that value likely comes from a prop.
- Your `Footer` could display a year or company name, passed in via props.

#### Core Ideas:
- Props are **read-only**
- Props are passed down **from parent to child**
- You **destructure** them inside the component for cleaner syntax

---

### ⚠️ Commonly Missed Points

Here are some important details that are often overlooked:

- ❗ **Default Props**: If a prop isn’t provided, you might want to define default values to avoid `undefined` in the UI.
- ✅ **Prop Types (optional)**: Especially helpful in larger projects. You can specify expected prop types using `prop-types` or TypeScript for safety.
- 🔄 **Props vs State**: Props are for **input** from outside, while state is for **internal** component data.
- 🧼 **Component naming**: Always start component names with a capital letter (`Navbar`, not `navbar`) — required for JSX to recognize it as a component.
- 💅 **Styling**: Ensure each component has its own styling or uses scoped styles to avoid global clashes.
- 📁 **Folder Structure**: For maintainability, organize your components into their own folders (`/components/Navbar/index.jsx` and `/Navbar/styles.css` or similar).
- ♻️ **Reusability**: If your `Navbar` or `Footer` contains hardcoded values, consider how you could make them reusable with props.


## 🧪 Exercise: Build a Basic Contact Form

Create a new component called `ContactForm.jsx` that includes the following:

### 🔧 Requirements

1. Create a form with the following fields:

   * **Name** (text input)
   * **Email** (text input)
   * **Message** (textarea)

2. Use `useState` to manage form values.

3. When the user clicks **Submit**:

   * If any field is empty, show an error message below the form.
   * If all fields are filled, show an alert with:
     `"Message sent by [Name] <Email>"`.

4. Style the form using Tailwind CSS to look clean and centered.

### 💡 Hints

* Use `onChange` to update state for each input.
* Use `onSubmit` to handle form submission
* Use a single `error` state for simplicity.

### 🖼️ Example UI

```
+-----------------------------+
|  Contact Us                |
|                             |
|  [ Name             ]       |
|  [ Email            ]       |
|  [ Message          ]       |
|  [               ]          |
|                             |
|  [    Submit     ]          |
|                             |
|  * All fields are required  |
+-----------------------------+
```
