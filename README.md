# TaskFlow

TaskFlow is a lightweight Nuxt 4 task management app built with Vue 3 and Tailwind CSS. It provides a simple dashboard for tracking tasks, adding new items, editing titles, marking tasks complete, and filtering open vs completed work.

## Demo
Live Demo: https://taskflow-ivogn.vercel.app

## Project Overview

- **Authentication flow**: simple sign-in page using client-side auth state stored in `localStorage`
- **Task management**: add, edit, complete, and delete tasks
- **Persistent storage**: tasks are saved in `localStorage` so they remain after refresh
- **Dashboard**: quick overview of total, open, and completed task counts
- **Filtering**: view all tasks or filter by open/completed status

## Key Pages

- `pages/login.vue` — login screen for users to sign in
- `pages/index.vue` — dashboard with task summaries and quick navigation
- `pages/tasks.vue` — task list view with add, edit, complete, delete, and filter controls

## Technology Stack

- Nuxt 4
- Vue 3
- Tailwind CSS
- Client-side state and storage with `useState` and `localStorage`

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Notes

- This project is designed as a frontend demo; authentication is handled locally and does not connect to a backend.
- Task persistence is browser-based through `localStorage`, so tasks are preserved per browser session.
