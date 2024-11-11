# Next.js App Boilerplate

![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0+-cyan?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

**`nextjs-app-boilerplate`** is a scalable and customizable Next.js 15+ starter template designed for modern applications. This template leverages TypeScript and Tailwind CSS, offering a powerful foundation for developing full-featured Next.js applications.

---

## 🚀 Features

-   **Next.js 15+ App Router** for modern and optimized routing and layouts.
-   **TypeScript** for a robust, type-safe codebase.
-   **Tailwind CSS** for rapid and responsive styling.
-   **Redux Toolkit** for state management.
-   **Centralized API Services** for easier API integration.
-   **Custom Hooks** and **Utility Functions** for reusable logic.
-   **Environment Configuration** with `.env` files.
-   **ESLint** and **Prettier** for code formatting and linting.

---

## 📁 Folder Structure

```plaintext
nextjs-app-boilerplate/
├── public/                    # Static assets (e.g., images, fonts)
├── src/
│   ├── app/                   # App Router and page structure
│   ├── components/            # Reusable UI and layout components
│   ├── containers/            # Page-specific container components
│   ├── hooks/                 # Custom React hooks
│   ├── layouts/               # Layout components
│   ├── modules/               # Feature-based modules
│   ├── services/              # API services and configurations
│   ├── store/                 # Redux store and slices
│   ├── styles/                # Tailwind CSS and global styles
│   ├── types/                 # TypeScript types and interfaces
│   ├── utils/                 # Utility functions
│   └── config/                # App configuration settings
├── .env                       # Environment variables
├── next.config.js             # Next.js configuration file
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── package.json               # Dependencies and scripts
└── tsconfig.json              # TypeScript configuration
```

---

## 🛠️ Setup and Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/nextjs-app-boilerplate.git
    cd nextjs-app-boilerplate
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Create environment file:**
   Create a `.env` file in the root directory to store environment variables.

4. **Run the development server:**

    ```bash
    npm run dev
    ```

5. **Build for production:**

    ```bash
    npm run build
    ```

6. **Run the production server:**
    ```bash
    npm start
    ```

---

## 🗂️ Key Configuration Files

-   **`.env`**: Store environment variables here.
-   **`next.config.js`**: Next.js configuration settings.
-   **`tailwind.config.js`**: Custom Tailwind CSS configurations.
-   **`tsconfig.json`**: TypeScript configuration for type-checking.

---

## 🔨 Usage

This boilerplate provides a foundation to build complex Next.js applications, organized by components, layouts, and styling.

### **Routing and Layouts**

Located in `src/app/`, the App Router in Next.js 15 allows for optimized page layouts and routing.

### **Components**

Reusable UI components are placed under `src/components/` to maintain a modular structure.

### **Tailwind CSS Styling**

All global and component-specific styles are handled using Tailwind CSS classes. Global Tailwind styles are defined in `src/styles/globals.css`.

### **State Management with Redux Toolkit**

Global state management is configured in `src/store/`. The Redux slices are modularized under `src/store/slices/`.

### **API Services**

API calls and configurations are organized under `src/services/`, with customizable API clients for handling endpoints and requests.

---

## 🎨 Styling

This project uses **Tailwind CSS** for styling with a custom configuration defined in `tailwind.config.js`. The utility-first CSS framework speeds up styling and enables rapid design adjustments.

---

## 🧩 Custom Hooks

Located in `src/hooks/`, these hooks encapsulate reusable logic, making code more maintainable. Examples include:

-   **`useAuth.ts`**: Manages user authentication state.

---

## 📋 Environment Variables

Add environment variables in `.env` as needed. Example variables include:

```plaintext
NEXT_PUBLIC_API_URL=https://your-api-url.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

---

## 🤖 Scripts

The following scripts are defined in `package.json`:

-   `dev`: Starts the development server.
-   `build`: Builds the application for production.
-   `start`: Runs the production server.
-   `lint`: Runs ESLint to check code quality.
-   `format`: Formats the codebase using Prettier.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## 👤 Author

Developed by [Pradip Chaudhary](https://pradipchaudhary.com.np). For questions or contributions, feel free to reach out!
