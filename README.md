# Serene Scribe

> A visually stunning, minimalist static blog platform designed for clarity, performance, and a delightful reading experience.

[cloudflarebutton]

Serene Scribe is a modern, minimalist static blog application designed for an exceptional reading experience. Built to run on Cloudflare's edge network, it prioritizes performance, clarity, and visual elegance. The core philosophy is 'content-first,' achieved through a clean, single-column layout, generous white space, and impeccable typography.

## ✨ Key Features

- **Minimalist, Content-First Design**: A clean, single-column layout that keeps the focus on your writing.
- **Exceptional Reading Experience**: Impeccable typography with a modern sans-serif for UI and a highly readable serif for body content.
- **High Performance**: Built to be deployed on Cloudflare's global edge network for lightning-fast load times.
- **Visually Elegant**: A sophisticated, monochrome color palette with a single vibrant accent for interactive elements.
- **Subtle & Polished Interactions**: Smooth animations and hover states provide a premium feel without being distracting.
- **Fully Responsive**: Flawless rendering and readability across all device sizes, from mobile phones to desktops.
- **Zero Configuration**: All blog content is managed through a simple mock data file, making it easy to get started.

## 🚀 Technology Stack

- **Framework**: React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Cloudflare Workers

## 🏁 Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:
- [Bun](https://bun.sh/)
- [Git](https://git-scm.com/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/serene-scribe.git
    cd serene-scribe
    ```

2.  **Install dependencies:**
    This project uses `bun` as the package manager.
    ```sh
    bun install
    ```

## 💻 Development

### Running the Development Server

To start the local development server, run the following command:

```sh
bun run dev
```

This will start the Vite development server, and you can view your application at `http://localhost:3000`. The server supports hot-reloading, so changes you make to the code will be reflected in the browser instantly.

### Project Structure

-   `src/`: Contains all the frontend React application code.
    -   `pages/`: Top-level page components for each route.
    -   `components/`: Reusable UI components, including shadcn/ui components.
    -   `data/`: Mock data for blog posts.
    -   `lib/`: Utility functions.
-   `worker/`: Contains the Cloudflare Worker server-side code for API routes.
-   `public/`: Static assets that are served directly.

## 🚀 Deployment

This application is designed to be deployed to **Cloudflare Pages**.

To deploy your application, simply run the build command followed by the deploy command:

1.  **Build the application:**
    ```sh
    bun run build
    ```

2.  **Deploy to Cloudflare:**
    This command will deploy your application using the Wrangler CLI. You will need to be logged into your Cloudflare account.
    ```sh
    bun run deploy
    ```

Alternatively, you can deploy directly from your GitHub repository with a single click.

[cloudflarebutton]

## 🧪 Linting

To run the linter and check for code quality issues, use the following command:

```sh
bun run lint
```

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.