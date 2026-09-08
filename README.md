# Medicare

A modern Hospital Management System built with React. Medicare is a portfolio project where I’m practicing how to build a realistic, responsive web application with reusable components, protected routes, client-side state management, and a clean user interface.

> **Project Status:** Core hospital management features are implemented. The project is still being improved with more features planned for future updates.

## Live Demo

**[View Medicare Live Demo](https://medicare-ms.vercel.app)**

---

## About the Project

**Medicare** is a frontend Hospital Management System designed to simulate some of the everyday tasks involved in managing doctors, patients, and appointments.

I built this project mainly to improve my React development skills and to move beyond small practice projects. Instead of focusing only on individual components, I wanted to build something with a proper application structure, navigation, authentication flow, reusable components, and realistic user interactions.

The application currently uses static JSON data stored in the `public` folder for its demo data. Newly added doctors and patients are handled on the client side using `localStorage`.

The project is still a work in progress, but the main structure and core features are already in place.

---

# Features

## Current Features

### Dashboard

* Hospital dashboard with an overview of the application
* Clean and responsive layout
* Simple cards and information sections

### Doctor Management

* View doctors
* Search doctors
* Add new doctors
* View individual doctor details

### Patient Management

* View patients
* Search patients
* Add new patients
* View individual patient details
* Delete patients
* Patient information and vital signs

### Appointments

* View appointments
* Search appointments

### Authentication

* Login and authentication flow
* Protected routes
* Logout functionality
* Loading state during login

### UI & Experience

* Simple and clean user interface
* Responsive design
* Dark mode
* Reusable React components
* Client-side navigation
* Loading and UI states

---

# Tech Stack

| Category         | Technologies             |
| ---------------- | ------------------------ |
| Frontend         | React, Vite              |
| Styling          | Tailwind CSS             |
| Routing          | React Router             |
| State Management | Context API              |
| Icons            | Lucide React             |
| Data Fetching    | Fetch API                |
| Data Storage     | JSON files, localStorage |
| Typography       | Poppins                  |

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
    ├── patients.json
    └── appointments.json
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

Vite will provide the local development URL in the terminal.

---

# Authentication & Protected Routing

Medicare includes a client-side login flow and protected routes.

After logging in, users can access the main hospital management sections. Unauthenticated users are prevented from accessing protected pages directly.

The application also includes a logout feature that allows users to end their current session.

A loading state is displayed during the login process to provide feedback while the application is processing the request.

> **Note:** This authentication system is built for demonstration purposes as part of a frontend portfolio project. It should not be considered production-level authentication. A real hospital system would require secure server-side authentication, authorization, encryption, and proper data protection.

---

# Data Handling

Medicare uses a combination of static JSON data and browser `localStorage`.

The initial demo data is stored as JSON files inside the `public/data` directory and retrieved using the Fetch API. This makes the demo easy to run locally and deploy without requiring a separate mock server.

For example, doctors, patients, and appointments can be loaded from the static data files.

New doctors and patients added through the application are stored in `localStorage`, allowing those changes to remain available in the browser after navigating between pages or refreshing the application.

This is currently a frontend-only approach. A future version will replace this with a proper backend and database.

---

# What I Learned

Building Medicare has helped me practice and better understand:

* Building applications with React
* Component-based architecture
* Reusable components
* React state and effects
* Context API
* React Router
* Protected routes
* Authentication and logout flows
* Search and filtering
* Working with forms
* Managing client-side data
* `localStorage`
* Fetching JSON data
* Responsive UI development
* Dark mode
* Loading and UI states
* Organizing a larger React project
* Building a portfolio project from the ground up

---

# Future Improvements

There are several things I would like to add as the project develops:

* Backend integration
* Database integration
* Secure server-side authentication
* Role-based access control
* Appointment creation and management
* Charts and analytics
* Notifications
* Advanced search and filtering
* Dashboard statistics
* Edit patient and doctor information
* Better data validation
* More hospital management modules
* Performance improvements

---

# Why I Built This

I built Medicare as a practical way to apply what I’ve been learning in React.

Rather than following tutorials and building isolated examples, I wanted to take those concepts and use them together in one application. The project has also helped me understand that building a real application involves more than writing components — routing, state, data handling, UI/UX, authentication, and project organization all have to work together.

Medicare is still evolving, and I plan to continue improving it as my development skills grow.

---

# Contributing

This is currently a personal portfolio project, but suggestions and feedback are always welcome.

---

# Contact

**Ataullah Arabzai**

Email: [developer.ataullah@gamil.com](mailto:developer.ataullah@gamil.com)

Portfolio: https://portfolio-ataullah.vercel.app

LinkedIn: https://linkedin.com/in/ataullah-dev

---

# Support

If you find Medicare interesting, feel free to check out the project, share your feedback, or give the repository a ⭐ on GitHub.
