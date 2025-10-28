# TicketMaster Pro: Streamlined Ticket Management 🚀

Manage, track, and resolve support tickets effortlessly with this modern, responsive web application. Built with Vue 3, TypeScript, and Pinia, TicketMaster Pro offers a clean interface for users to oversee their ticket lifecycle, from creation to closure. It demonstrates robust frontend architecture and state management, simulating user authentication and data persistence locally via `localStorage`.

## Features ✨

*   **User Authentication**: Secure signup and login functionality.
*   **Dashboard Overview**: A personalized dashboard displaying key ticket statistics (total, open, in-progress, closed).
*   **Comprehensive Ticket Management**: Create, view, edit, and delete tickets with various statuses and priorities.
*   **Local Data Persistence**: All user and ticket data are stored client-side using `localStorage`, simulating a backend for demonstration purposes.
*   **Responsive Design**: A user-friendly interface that adapts seamlessly to different screen sizes, powered by Tailwind CSS.
*   **Global State Management**: Efficient and scalable state management using Pinia.
*   **Client-Side Routing**: Smooth navigation between application pages with Vue Router.

## Getting Started

Follow these steps to set up and run TicketMaster Pro locally on your machine.

### Installation

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/lexizuchenna/hng-frontend-ticket-vue.git
    ```
2.  **Navigate to Project Directory**:
    ```bash
    cd hng-frontend-ticket-vue
    ```
3.  **Install Dependencies**:
    ```bash
    npm install
    # or yarn install
    # or pnpm install
    ```

### Running the Application

1.  **Start the Development Server**:
    ```bash
    npm run dev
    # or yarn dev
    # or pnpm dev
    ```
2.  The application will typically be available at `http://localhost:5173/` (or another port as indicated by Vite).

## Usage

Once the application is running, you can interact with it as follows:

1.  **Landing Page**: The initial page provides an overview of the application.
2.  **Sign Up**: Navigate to the "Sign Up" page to create a new user account. Fill in your name, email, and password. This data will be stored in your browser's `localStorage`.
3.  **Login**: After signing up, proceed to the "Login" page. Enter your registered email and password to access the authenticated sections of the application.
4.  **Dashboard**: Upon successful login, you will be redirected to the dashboard. Here, you'll see a summary of your tickets categorized by their status (Open, In Progress, Closed). You can also click the "Go to Ticket Management" button to manage your tickets.
5.  **Ticket Management**:
    *   **Create New Ticket**: Use the form at the top of the page to add a new ticket. Provide a title, status, priority, and an optional description.
    *   **Edit Existing Ticket**: Click the "Edit" button on any ticket card to populate the form with its details. Make your changes and click "Update Ticket".
    *   **Delete Ticket**: Click the "Delete" button on a ticket card to remove it. A confirmation prompt will appear.
    *   All changes to tickets are saved in your browser's `localStorage` and persist across sessions for the logged-in user.
6.  **Logout**: Click the "Logout" button from the Header or Dashboard to clear your session and return to the landing page.

## Technologies Used

| Technology         | Description                                     | Link                                                      |
| :----------------- | :---------------------------------------------- | :-------------------------------------------------------- |
| **Vue.js**         | Progressive JavaScript framework for building UIs | [![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/) |
| **TypeScript**     | Superset of JavaScript that adds static types   | [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) |
| **Pinia**          | Intuitive, type-safe, light and flexible Vue store | [![Pinia](https://img.shields.io/badge/Pinia-FFD44F?style=for-the-badge&logo=pinia&logoColor=white)](https://pinia.vuejs.org/) |
| **Vue Router**     | The official router for Vue.js                  | [![Vue Router](https://img.shields.io/badge/Vue_Router-42B883?style=for-the-badge&logo=vue.js&logoColor=white)](https://router.vuejs.org/) |
| **Vite**           | Next generation frontend tooling                | [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/) |
| **Tailwind CSS**   | A utility-first CSS framework                   | [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) |
| **Lucide Vue Next**| Simply beautiful open-source icons              | [![Lucide Vue Next](https://img.shields.io/badge/Lucide-Icons-orange?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/icons) |

## License

This project is licensed under the MIT License.

## Author Info

Connect with me and see more of my work!

*   **LinkedIn**: [Your LinkedIn Profile](https://www.linkedin.com/in/your_username)
*   **Twitter**: [@your_twitter_handle](https://twitter.com/your_twitter_handle)
*   **Portfolio**: [Your Portfolio Website](https://www.yourportfolio.com)

---

[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)](https://github.com/lexizuchenna/hng-frontend-ticket-vue/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/Made%20with-TypeScript-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vue.js](https://img.shields.io/badge/Made%20with-Vue.js-4FC08D?style=for-the-badge&logo=vue.js)](https://vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)