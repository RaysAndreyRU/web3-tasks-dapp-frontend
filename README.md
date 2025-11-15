# Lumia Tasks DApp — Frontend

> Frontend for **Lumia Tasks DApp** — a Web3 Bounty Board where users complete tasks, verify actions, and earn reward points.  
> Built using **Vite**, **React**, **TypeScript**, and the **Feature-Sliced Design (FSD)** architecture.  
> Authentication is handled through **Lumia Passport**.
---

## Features

-  **Web3 Authentication** via [Lumia Passport](https://www.lumiapassport.io)
-  **Bounty Board System**
- task list
- task verification
- real-time score updates
- “Verified” task statuses
-  **Vite + React + TypeScript** — ultra-fast build and development environment
-  **Feature-Sliced Design** — scalable modular architecture for frontend projects
-  **Modern UI** with reusable shared components
-  **Environment-based API URLs** through `VITE_APP_BACKEND_URL`

---

##  Tech Stack

| Layer | Technology |
|-------|-------------|
| **Framework** | [React](https://react.dev) |
| **Build Tool** | [Vite](https://vitejs.dev) |
| **Language** | TypeScript |
| **State & Structure** | Feature-Sliced Design (FSD) |
| **Styling** | Tailwind CSS / CSS Modules |
| **Auth** | [@lumiapassport/ui-kit](https://www.npmjs.com/package/@lumiapassport/ui-kit) |
| **API** | REST / Axios |
| **Environment Management** | `VITE_` variables |

---

##  Project Architecture

Follows the **[Feature-Sliced Design](https://feature-sliced.design/)** methodology:
Each layer is **independent**, **scalable**, and follows clear responsibility boundaries.

---

##  Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

---

# Build & Preview
```bash
# Build production bundle
npm run build

# Preview locally
npm run preview
```

---

# Docker (optional)
```bash
docker build -t web3-tasks-frontend .
docker run -p 5173:3000 web3-tasks-frontend
```

---
# License
MIT © Rays Andrey

