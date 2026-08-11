# Medicare

A modern Hospital Management System built with React to demonstrate frontend development skills, component-based architecture, protected routing, responsive UI design, and scalable application structure.

> **Project Status:** Patient dashboard and some small pieces are currently under development.

## Live Demo

**[View Medicare Live Demo](https://medicare-ms.vercel.app)**

---

# About the Project

**Medicare** is a frontend Hospital Management System created as a portfolio project to showcase modern React development practices.

The project focuses on building reusable components, scalable folder organization, state management using the Context API, protected routes, responsive UI, and a realistic user experience.

The application uses static data stored in the `public` folder and fetched using the Fetch API, making it suitable for a deployed frontend demo without depending on a local mock server.

The primary goal of this project is to strengthen my frontend development skills by building a clean, maintainable, and realistic application using modern React technologies and best practices.

---

# Features

## Completed

* Dashboard
* Doctor Management
* Search Functionality
* Dark Mode
* Responsive Design
* Reusable Components
* Client-side Routing
* Protected Routing
* Login and Authentication Flow
* Loading State During Login
* Static Data Fetching from the `public` Folder

## In Progress

* Patient Management

## Planned

* Charts and Analytics
* Backend Integration
* Additional Hospital Modules
* More Advanced Authentication and Authorization

---

# Tech Stack

| Category         | Technologies          |
| ---------------- | --------------------- |
| Frontend         | React, Vite           |
| Styling          | Tailwind CSS          |
| Routing          | React Router          |
| State Management | Context API           |
| Icons            | Lucide React          |
| Data             | Fetch API, JSON Files |
| Typography       | Poppins               |

---

# Project Structure

```text
src/
│
├── assets/
├── components/
├── context/
├── layouts/
├── pages/
│   ├── Dashboard
│   ├── Doctors
│   ├── Patients
│   ├── Settings
│   └── Login
│
├── services/
├── routes/
├── hooks/
└── utils/

public/
└── data/
    ├── users.json
    ├── doctors.json
    └── ...
```

---

# Getting Started

## Clone the repository

```bash
git clone https://github.com/ataullaharabzai/Hospital-M.S.git
```

## Navigate to the project

```bash
cd Hospital-M.S
```

## Install dependencies

```bash
npm install
```

## Start the development server

```bash
npm run dev
```

The application will be available through the local development URL provided by Vite.

---

# Authentication & Protected Routing

Medicare includes a client-side authentication flow with protected routes.

After login, users are redirected according to the application's routing logic. Protected routes prevent unauthenticated users from directly accessing dashboard pages.

A loading state is also displayed when the login process takes time, providing feedback to the user instead of leaving the interface unresponsive.

> **Note:** Since this is a frontend portfolio project, the authentication system is intended for demonstration purposes and should not be considered production-level security. Real applications should handle authentication and authorization on the backend.

---

# Data Handling

Instead of using `json-server`, Medicare fetches its demo data from JSON files stored inside the project's `public` folder.

This approach allows the application to work after deployment without depending on a locally running mock API server.

The Fetch API is used to retrieve the data from the static JSON files.

---

# Learning Objectives

This project was built to improve my understanding of:

* Component-based architecture
* React best practices
* Context API
* React Router and protected routing
* Authentication flow
* Loading and UI states
* Responsive UI development
* Reusable components
* Project organization
* Fetch API
* Working with static JSON data
* Building portfolio-quality applications

---

# Future Improvements

* Full backend integration
* Secure server-side authentication
* Role-based Access Control
* Charts and Reports
* Notifications
* Advanced Search and Filters
* Dashboard Analytics
* Performance Optimization
* Additional Hospital Management Modules

---

# Contributing

This is a personal portfolio project. Suggestions and feedback are always welcome.

---

# Contact

**Ataullah Arabzai**

Email: [developer.ataullah@gamil.com](mailto:developer.ataullah@gamil.com)

Portfolio: https://portfolio-ataullah.vercel.app

LinkedIn: https://linkedin.com/in/ataullah-dev

GitHub: https://github.com/ataullaharabzai

---

# Support

If you find this project useful or interesting, consider giving it a star on GitHub. Your support is appreciated.
