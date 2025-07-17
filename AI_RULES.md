# AI Development Rules

This document outlines the tech stack and development guidelines for this project. Adhering to these rules ensures consistency and maintainability.

## Tech Stack

- **Framework:** React (using Vite)
- **Language:** JavaScript (ES6+) with JSX
- **Styling:** Tailwind CSS. All styling should be done via utility classes. Custom theme values are configured in `tailwind.config.js`.
- **Icons:** `lucide-react` is the designated icon library.
- **Build Tool:** Vite.
- **Component Structure:** The app is organized into pages (`src/pages`) and reusable components (`src/components`).
- **Routing:** Currently uses basic conditional rendering in `App.jsx`. For more complex routing needs, `react-router-dom` should be the preferred choice.
- **State Management:** Simple component-level state is managed with React Hooks (`useState`).

## Development Guidelines

### Styling
- **ONLY** use Tailwind CSS for styling. Do not add custom CSS files or use inline `style` objects unless absolutely necessary.
- Extend the theme via `tailwind.config.js` for custom colors, fonts, or spacing. The current brand colors are `brand-yellow`, `brand-cyan`, and `brand-blue`.

### Components
- Create all new reusable UI elements as components inside the `src/components` directory.
- Keep components small, focused, and responsible for one piece of functionality.
- Name component files using PascalCase (e.g., `MyComponent.jsx`).

### Pages
- Page-level components that represent a full view or screen should be placed in the `src/pages` directory.

### Icons
- Use icons exclusively from the `lucide-react` library. This keeps the icon style consistent across the application.

### State Management
- For local component state, use React's built-in hooks like `useState` and `useReducer`.
- Do not introduce a global state management library (like Redux, Zustand, or Context API for global state) without discussing the need for it first.

### Dependencies
- Do not add new third-party libraries or packages without explicit approval. The goal is to keep the project lightweight.

### Code Quality
- Write clean, readable, and self-documenting code.
- Use functional components and hooks. Avoid class components.
- Ensure all new code is formatted correctly and follows the existing style.