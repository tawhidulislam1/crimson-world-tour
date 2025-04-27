# 🎸 Crimson World Tour

---

## 📖 Introduction
**Crimson World Tour** is a modern web application built using **React** and **Vite**, focused on delivering a sleek, responsive experience for exploring and managing world tours.  
It uses **TailwindCSS** for fast styling, **DaisyUI** for UI components, and **React Router** for navigation.

---

## 📋 Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## 🚀 Features
- ⚛️ React 19 with Hooks and Functional Components
- ⚡ Lightning-fast Vite build tool
- 🎨 TailwindCSS + DaisyUI for beautiful, flexible designs
- 🌐 Client-side routing with `react-router-dom`
- 🎉 Rich iconography with `react-icons`
- 🔍 Code linting with ESLint for cleaner code

---

## 🛠️ Tech Stack
- **Frontend:** React 19
- **Build Tool:** Vite 6
- **Styling:** TailwindCSS 4 + DaisyUI 5
- **Routing:** React Router DOM 6.30
- **Linting:** ESLint 9

---

## 📥 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tawhidulislam1/crimson-world-tour.git
   cd crimson-world-tour
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**  
   #### Go to https://crimsonworldtour.netlify.app/

---

## 📄 Available Scripts

| Script            | Description                    |
| ------------------ | ------------------------------- |
| `npm run dev`      | Start the development server    |
| `npm run build`    | Build the app for production    |
| `npm run preview`  | Preview the production build    |
| `npm run lint`     | Run ESLint to check code quality |

---

## 📂 Project Structure

```
crimson-world-tour/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── .eslintrc.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## ⚙️ Configuration

**TailwindCSS Setup:**  
Ensure your `tailwind.config.js` looks like:

```javascript
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
```

**ESLint Setup:**  
Configure `.eslintrc.js` to enforce your preferred code styles and rules.

---

## 🧩 Dependencies

**Main:**
- `react`
- `react-dom`
- `react-router-dom`
- `@react-icons/all-files`
- `react-icons`
- `@tailwindcss/vite`
- `tailwindcss`
- `daisyui`

**Dev:**
- `vite`
- `@vitejs/plugin-react`
- `eslint`
- `postcss`
- `autoprefixer`
- `@types/react`
- `@types/react-dom`

---

## 🛠️ Troubleshooting

**Vite port already in use?**  
Run the dev server on another port:
```bash
npm run dev -- --port 3000
```

**Tailwind styles not applying?**  
Ensure your `postcss.config.js` includes:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

**React version mismatch warnings?**  
Ensure you are using React 19 compatible libraries.

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to fork the project, create a new branch, and submit a pull request.

---

## 📜 License

This project is **private**.  
Contact the project owner for license details.

---

# 🎉 Happy Coding!
