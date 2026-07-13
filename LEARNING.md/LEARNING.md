# AI Hazard Response System - Learning Notes

---

# Day 1 (Project Setup)

## Technologies Installed

- Node.js
- npm
- React (using Vite)
- Express.js
- Git
- GitHub
- VS Code
- Nodemon
- React Router
- React Icons

---

## Project Structure

frontend/
backend/

Frontend contains the React application.

Backend contains the Express server.

---

## React Concepts Learned

### What is React?

React is a JavaScript library used for building user interfaces.

Instead of writing one large HTML page, React divides the UI into reusable components.

Example:

Navbar

Home

Dashboard

Footer

Each is a separate component.

---

### Component

A component is a reusable piece of UI.

Example:

Navbar.jsx

Footer.jsx

Simulation.jsx

---

### JSX

JSX looks like HTML but is actually JavaScript syntax.

Example:

<h1>Hello</h1>

JSX is returned from React components.

---

### main.jsx

Entry point of the React application.

Responsibilities:

- Creates the React root
- Loads App component
- Imports global CSS

Flow:

main.jsx

↓

App.jsx

↓

Entire Application

---

### App.jsx

Root component of the application.

Responsibilities:

- Defines routing
- Loads Layout
- Controls page navigation

---

### BrowserRouter

Connects React with the browser.

Responsibilities:

- Watches URL changes
- Synchronizes browser history
- Enables navigation without page reload

---

### Routes

Stores all route definitions.

Maps

URL

↓

Component

Example:

/dashboard

↓

Dashboard.jsx

---

### Route

Represents one mapping.

Example:

<Route path="/about" element={<About />} />

---

### Nested Routes

Allows multiple pages to share one Layout.

Example:

Layout

↓

Navbar

↓

Outlet

↓

Current Page

↓

Footer

---

### Layout Component

Reusable component containing:

Navbar

Outlet

Footer

Advantages:

- No repeated code
- Easy maintenance
- Professional architecture

---

### Outlet

Placeholder where React Router renders child pages.

Example:

Navbar

↓

Outlet

↓

Home

↓

Footer

Changing URL changes only the Outlet content.

---

## React Router Flow

Browser

↓

BrowserRouter

↓

Routes

↓

Matching Route

↓

Layout

↓

Outlet

↓

Current Page

---

## Software Engineering Principles Learned

### DRY Principle

Don't Repeat Yourself.

Shared UI should be written once.

Example:

Navbar

Footer

Layout

---

### Single Responsibility Principle (SRP)

Each component should have one responsibility.

BrowserRouter

↓

URL Management

Routes

↓

Route Matching

Layout

↓

Shared UI

Home

↓

Home Content

---

### Component Reusability

Instead of copying UI multiple times,

create reusable components.

---

## JavaScript Revision

### Import

Used to bring code from another file.

Example:

import Home from "./Home";

---

### Export

Allows another file to use this component.

Example:

export default Home;

---

### Arrow Function

Example:

const add = (a, b) => {
    return a + b;
}

Shorter alternative to function declaration.

---

## Interview Questions

Q. What is React?

A JavaScript library for building component-based user interfaces.

---

Q. What is JSX?

HTML-like syntax used inside JavaScript.

---

Q. Difference between BrowserRouter and Routes?

BrowserRouter synchronizes React with browser URLs.

Routes stores URL-to-component mappings.

---

Q. Why use Layout?

To avoid repeating Navbar and Footer across every page.

---

Q. What does Outlet do?

It renders the currently active child route.

---

## Commands Learned

npm install

npm run dev

npm init -y

npm install express

npm install react-router-dom

npm install react-icons

npm install --save-dev nodemon

git add .

git commit

git push




# Day 3

## React Concepts

### Props

Props are inputs passed to components.

Example:

```jsx
<NavLink to="/dashboard" />
```

Here, `to` is a prop.

---

### NavLink

Used for navigation.

Automatically detects whether the current route is active.

---

### Layout

Reusable wrapper component that contains:

- Navbar
- Outlet
- Footer

---

### Outlet

Placeholder where nested routes are rendered.

---

### CSS Organization

Instead of one CSS file, styles are divided by responsibility:

- global.css
- navbar.css
- footer.css
- pages.css

This improves maintainability.

---

## JavaScript Revision

Function parameters and React props are conceptually similar.

Function:

```javascript
add(5,10)
```

Component:

```jsx
<NavLink to="/dashboard" />
```

Both receive input.

---

## Interview Questions

Q. What are props?

Props are read-only inputs passed from one component to another.

---

Q. Difference between Link and NavLink?

Link performs navigation.

NavLink performs navigation and automatically knows when it is active.

---

Q. Why organize CSS into multiple files?

To improve maintainability and follow the Single Responsibility Principle.



# React State (useState)

State is the memory of a React component.

When state changes, React automatically re-renders the component.

Example:

```jsx
const [count, setCount] = useState(0);
```

- `count` → current value
- `setCount` → function to update the value
- `0` → initial value

---

# Props Destructuring

Instead of:

```jsx
function Card(props){
    return props.title;
}
```

We use:

```jsx
function Card({ title }){
    return title;
}
```

This is called object destructuring in React props.

---

# Why use map()?

`map()` converts every object in an array into a React component.

Example:

```jsx
hazards.map((hazard) => (
    <HazardCard key={hazard.id} hazard={hazard}/>
))
```

Benefits:
- Reusable
- Scalable
- Cleaner code
- Easier maintenance


| Variable | Saved after render? | Re-renders UI? |
| -------- | ------------------- | -------------- |
| let      | ❌                   | ❌              |
| useState | ✅                   | ✅              |
| useRef   | ✅                   | ❌              |


# React Event Handling

onChange runs whenever the value of an input changes.

Example:

<input onChange={handleImageChange} />

For file inputs:

event.target.files

returns the selected files.

files[0]

returns the first selected file.

--------------------------------------------

# URL.createObjectURL()

Creates a temporary URL pointing to a file stored in browser memory.

Example:

const imageURL = URL.createObjectURL(file);

Used to preview uploaded images before sending them to the backend.

--------------------------------------------

# Conditional Rendering

React allows rendering components conditionally.

Example:

{preview && <img src={preview} />}

If preview exists,
React renders the image.

If preview is null,
nothing is rendered.



# Day 5

## React

- useState stores component state.
- Props make components reusable.
- map() renders lists dynamically.
- Components should follow SRP.

## API

- Axios sends HTTP requests.
- FormData sends files.
- async/await waits for API responses.

## Backend

- Express handles routes.
- Multer stores uploaded images in memory.
- req.file contains uploaded image.
- Controllers contain business logic.
- Middleware processes requests before controllers.

## Environment Variables

- .env stores secrets.
- dotenv loads environment variables.
- process.env accesses variables.
- Never push .env to GitHub.

## Architecture

Frontend
↓
Axios
↓
Express Route
↓
Multer Middleware
↓
Controller
↓
Mock AI
↓
Response
↓
React UI

# Day X - Version 1 Completed

## React Concepts
- React Router
- Nested Routes
- Layout Component
- Outlet
- Reusable Components
- Mapping Arrays
- Props
- Conditional Rendering

## Architecture
- Single Responsibility Principle
- Centralized Data Files
- Reusable Tables
- Component Reusability

## Backend
- Express
- Multer
- REST API
- Controllers
- Routes
- Mock AI Response

## Features Built
- Dashboard
- Reports
- CSV Export
- PDF Export
- Charts
- Image Upload
- Analysis API

## CSS
- Flexbox
- Grid
- Responsive Layout
- Sticky Footer



## MongoDB CRUD Operations

### Create
- Used to insert a new document.
- Mongoose Function: Report.create()

### Read
- Used to retrieve documents.
- Report.find() -> All documents
- Report.findOne() -> First matching document
- Report.findById() -> Search by MongoDB ObjectId

### Update
- Report.findByIdAndUpdate()

### Delete
- Report.findByIdAndDelete()