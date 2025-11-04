# UTS - Neo-Brutalist Project: Neon Retrofuturistic Dreamscape

This project is a dynamic project website built with React and Vite, showcasing a unique **Neo-Brutalist Neon Retrofuturistic Dreamscape** design. It's crafted to present your web programming assignments (Soal) in an engaging and visually striking manner.

## Project Overview

The project dynamically loads and displays your HTML-based projects, allowing visitors to explore each assignment. A key feature is the integrated code viewer, which enables transparent inspection of the underlying HTML source code for each project, fostering learning and understanding.

## Design Philosophy: Neo-Brutalism Meets Neon Retrofuturism

The design embraces the raw, honest aesthetic of Neo-Brutalism, characterized by:
-   **Stark Contrasts:** Bold use of a dark background (`#0D0D0D`) with vibrant neon accents.
-   **Unadorned Elements:** Clean lines, sharp edges, and minimal ornamentation.
-   **Strong Typography:** Utilizes the `Inter` font for a modern, impactful feel.

This Brutalist foundation is then infused with a **Neon Retrofuturistic Dreamscape** through a carefully selected color palette:
-   **Primary Background:** `#0D0D0D` (Extremely Dark Gray)
-   **Header/Footer Background:** `#1B1B1B` (Very Dark Gray) - providing subtle depth.
-   **Text Color:** `#FFFFFF` (White) - for maximum readability against dark backgrounds.
-   **Main Accent:** `#FF0080` (Bright Pink) - for interactive elements and highlights.
-   **Secondary Accent:** `#00FFAE` (Bright Green) - for hover effects and additional visual pop.
-   **Highlight/Hover:** `#FFEA00` (Bright Yellow) - used sparingly for dynamic interactions.

This combination creates a visually arresting experience that is both functional and artistically expressive.

## Features

-   **Dynamic Project Loading:** Automatically detects and displays projects from HTML files placed in the `public` folder, making it easy to add new assignments.
-   **Integrated Code Viewer:** Each project page includes a toggle to switch between the live rendered HTML and its syntax-highlighted source code, powered by `prism-react-renderer`.
-   **Client-Side Routing:** Seamless navigation between the home page and individual project detail pages using React Router.
-   **Responsive Design:** Ensures the project looks great and functions well across various devices and screen sizes.
-   **Vibrant Neo-Brutalist Aesthetic:** A unique and memorable visual style.

## Technologies Used

-   **React:** A JavaScript library for building dynamic user interfaces.
-   **Vite:** A next-generation frontend tooling that provides a lightning-fast development experience.
-   **TypeScript:** A typed superset of JavaScript that enhances code quality and maintainability.
-   **React Router:** For declarative routing within the application.
-   **Prism React Renderer:** For beautiful and customizable syntax highlighting.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (v18 or later)
-   [bun](https://bun.sh/) (a fast all-in-one JavaScript runtime)

### Installation and Local Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/HananTaq/UTS.git
    cd UTS
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

3.  **Run the development server:**
    ```bash
    bun run dev
    ```

    The application will be accessible in your browser at `http://localhost:5173`.

## Deployment

This project is configured for easy deployment to [Vercel](https://vercel.com). To deploy:

1.  **Connect your GitHub repository** (`HananTaq/UTS`) to your Vercel account.
2.  Vercel will automatically detect the Vite configuration.
3.  Click **Deploy**, and your Neo-Brutalist project will be live!