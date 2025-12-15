# ⚡ Next.js Boilerplate

> A high-performance, feature-rich starter template for modern web development. Built with Next.js 16, TypeScript, TailwindCSS v4, and NextAuth v5.

---

## 📸 Showcase

|                                       **Desktop View**                                        |                                       **Mobile View**                                       |
| :-------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
| <img src="https://placehold.co/600x400?text=Desktop+Preview" alt="Desktop View" width="100%"> | <img src="https://placehold.co/375x812?text=Mobile+Preview" alt="Mobile View" width="100%"> |

_(Replace the placeholder images above with your actual application screenshots)_

---

## 🛠️ Stack & Tools

This project utilizes a cutting-edge technology stack to ensure performance, scalability, and developer experience.

### Core

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **PWA**: [Next-PWA](https://github.com/DuCanhGH/next-pwa) (@ducanh2912/next-pwa)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Authentication**: [NextAuth.js v5 (Beta)](https://authjs.dev/)

### Styling & UI

- **CSS Engine**: [TailwindCSS v4](https://tailwindcss.com/)
- **Utilities**: `clsx`, `tailwind-merge`, `class-variance-authority` (CVA)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: `tw-animate-css`

### State & Data

- **Server State**: [TanStack Query v5](https://tanstack.com/query/latest) (React Query)
- **API**: GraphQL Request

### Quality & DX

- **Linting**: ESLint
- **Git Hooks**: Husky & Commitlint
- **Versioning**: [standard-version](https://github.com/conventional-changelog/standard-version)
- **Compiler**: React Compiler (Babel Plugin)

---

## ✨ Features

- **🚀 Turbopack Ready**: Blazing fast development server.
- **📱 PWA Supported**: Installable on mobile and desktop devices.
- **🌍 Internationalization**: Built-in i18n support.
- **⚛️ React 19**: Leveraging the latest React features.
- **🔐 Secure Authentication**: Integrated with NextAuth.js v5 (Beta).
- **🎨 Modern Styling**: Tailwind v4 with advanced utility merging.

---

## 🚀 Getting Started

Review the prerequisites and follow the steps below to set up the project locally.

### Prerequisites

- **Node.js**: >= 20.0.0
- **Package Manager**: npm, pnpm, yarn, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd nextjs-boilerplate
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📜 Scripts

| Script            | Description                                             |
| :---------------- | :------------------------------------------------------ |
| `npm run dev`     | Starts the development server with Turbopack            |
| `npm run build`   | Builds the application for production                   |
| `npm run start`   | Starts the production server                            |
| `npm run lint`    | Runs ESLint to check for code quality issues            |
| `npm run prepare` | Installs Husky git hooks                                |
| `npm run release` | Generates a CHANGELOG and creates a new release version |

---

## 📂 Project Structure

```
├── src/
│   ├── app/            # App Router pages & layouts
│   ├── components/     # Reusable UI components
│   ├── libs/           # Library configurations (i18n, providers)
│   └── styles/         # Global styles & Tailwind config
├── public/             # Static assets (images, fonts, PWA icons)
├── next.config.ts      # Next.js configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```
