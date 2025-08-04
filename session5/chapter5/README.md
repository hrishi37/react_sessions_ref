
---

## ✅ Chapter 5: Input Validation with Zod

### 🎯 Goal

The main idea here is to ensure that **user input is valid before allowing it into the todo list**, by using Zod for:

* Checking that input is not empty
* Limiting input length to 50 characters
* Displaying friendly error messages when validation fails

---

### 🧰 Why Use Zod?

* Zod provides a **declarative schema**: you define what your data *should* look like, and it validates against that.
* It keeps validation **clean and centralized**, rather than scattering if-else checks around.
* It works well with **forms**, especially controlled inputs.

---

### ✏️ What You Implemented

#### ✅ 1. **Defined a Schema**

You created a schema like:

* `text` must be a **non-empty string**
* `text.length` must be ≤ 50 characters

This schema is reusable and helps standardize how you validate across your app.

#### ✅ 2. **Validated User Input**

Before adding the todo:

* You passed the input through the Zod schema
* If valid → continue
* If invalid → display a helpful error

#### ✅ 3. **Displayed Errors**

When the validation failed:

* You showed an error message below or near the input
* The UI probably prevented adding the todo


#### ✅ 4. Useful Zod Validation Examples

### 1. **String (Text Field)**
```js
z.string().min(1, "Required").max(50, "Max 50 characters allowed")
```
> Used for general input like names, titles, or todo text.

---

### 2. **Email**
```js
z.string().email("Invalid email address")
```
> Validates proper email format.

---

### 3. **Number**
```js
z.number().min(0).max(100)
```
> Validates a number within a range (e.g. age, score).

You can also coerce strings to numbers:
```js
z.coerce.number().min(0)
```
> Useful when HTML inputs return strings by default.

---

### 4. **Boolean (e.g., checkbox)**
```js
z.boolean()
```
> Great for validating toggles, terms acceptance, etc.

---

### 5. **Date**
```js
z.date()
```
> Requires a JS Date object. You can use `z.coerce.date()` if you're working with string inputs like `"2025-06-04"`.

---

### 6. **Array**
```js
z.array(z.string()).min(1, "At least one item is required")
```
> Example: tags, selected items, or multi-select fields.

---

### 7. **Object**
```js
z.object({
  name: z.string().min(1),
  age: z.number().min(18),
})
```
> Use this when validating grouped fields (e.g., user form).

---

### 8. **Optional Fields**
```js
z.string().optional()
```
> Used when a field isn't always required but must still be valid if present.

---

### 9. **Custom Validation**
```js
z.string().refine(val => val.startsWith("user_"), {
  message: "Must start with 'user_'"
})
```
> Use `.refine()` for advanced, custom checks.

---

### 10. **Union (One of Several Types)**
```js
z.union([z.string(), z.number()])
```
> Useful for flexible inputs, like a code that can be a string or number.

---

### Bonus: **Nested Object with Array**
```js
z.object({
  title: z.string(),
  tags: z.array(z.string()),
  metadata: z.object({
    createdAt: z.date(),
    priority: z.enum(["low", "medium", "high"])
  })
})
```
> Validates complex data structures like API payloads or forms with sections.

---

### ⚠️ Commonly Missed or Overlooked Points

* ❗ **Validate on submit, not on every keystroke** — or debounce validation to avoid noisy UX.
* ✅ **Clear errors after success**: Make sure to clear error messages once the input becomes valid again.
* 🧪 **Test edge cases**:

  * Empty string (`""`)
  * Exactly 50 characters
  * 51+ characters
  * Spaces only (you may want to `trim()` input before validating)
* 🧼 **Styling invalid input**: Consider visually indicating invalid fields (e.g. red border) for better accessibility.
* 🧠 **Schema reuse**: If you use the same validation elsewhere, export the schema and reuse it to keep code DRY.
---
