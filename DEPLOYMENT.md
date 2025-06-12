# DEPLOYMENT.MD

This document provides instructions on how to deploy your Vite + React + Tailwind CSS portfolio website.

## Prerequisites

1.  **Node.js and npm:** Ensure you have Node.js (which includes npm) installed on your local machine. You can download it from [https://nodejs.org/](https://nodejs.org/).
2.  **Project Files:** You have the complete project source code.

## Build the Project

Before deploying, you need to create a production build of your application. This process compiles and optimizes your code and assets.

1.  Open your terminal in the project's root directory.
2.  Install dependencies (if you haven't already):
    ```bash
    npm install
    ```
3.  Run the build command:
    ```bash
    npm run build
    ```
4.  This will create a `dist` folder in your project root. This folder contains all the static files (HTML, CSS, JavaScript, images) needed for deployment.

## Deployment Options

You can deploy your static site to various platforms. Here are a few popular options:

### 1. Netlify

Netlify is a popular platform for deploying static sites. It offers a generous free tier and integrates well with Git repositories.

*   **Drag and Drop:**
    1.  Go to [https://app.netlify.com/drop](https://app.netlify.com/drop).
    2.  Drag the `dist` folder (created by `npm run build`) into the designated area on the Netlify site.
*   **Git Integration (Recommended):**
    1.  Push your project to a Git repository (e.g., GitHub, GitLab, Bitbucket).
    2.  Sign up or log in to [Netlify](https://www.netlify.com/).
    3.  Click "New site from Git".
    4.  Connect your Git provider and select your repository.
    5.  Configure the build settings:
        *   **Build command:** `npm run build` (or `vite build`)
        *   **Publish directory:** `dist`
    6.  Click "Deploy site". Netlify will automatically build and deploy your site whenever you push changes to your repository.

### 2. Vercel

Vercel (from the creators of Next.js) also offers excellent support for static sites and Vite projects.

1.  Push your project to a Git repository.
2.  Sign up or log in to [Vercel](https://vercel.com/).
3.  Click "New Project".
4.  Import your Git repository.
5.  Vercel usually auto-detects Vite settings:
    *   **Framework Preset:** Vite
    *   **Build Command:** `vite build` (or `npm run build`)
    *   **Output Directory:** `dist`
6.  Click "Deploy".

### 3. GitHub Pages

You can host your static site directly from your GitHub repository.

1.  Push your project to a GitHub repository.
2.  In your `vite.config.js` file, you might need to set the `base` option if you are deploying to a subdirectory (e.g., `https://<USERNAME>.github.io/<REPO_NAME>/`).
    ```javascript
    // vite.config.js
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
      plugins: [react()],
      base: '/<YOUR_REPO_NAME>/', // Set this to your repository name
    });
    ```
    *If deploying to `https://<USERNAME>.github.io/` (a user/organization page, not a project page), `base` can remain `/` or be omitted.*
3.  Run `npm run build`.
4.  Commit and push the `dist` folder to your repository (or use a GitHub Action to build and deploy).
5.  In your GitHub repository settings, go to the "Pages" section.
6.  Choose the branch and folder (usually `main` or `gh-pages` branch, and the `/dist` folder or `/root` if `dist` contents are moved).
    *   A common strategy is to use the `gh-pages` package to simplify deploying the `dist` folder contents to a `gh-pages` branch.
    *   Install `gh-pages`: `npm install gh-pages --save-dev`
    *   Add a deploy script to `package.json`:
        ```json
        "scripts": {
          // ... other scripts
          "deploy": "gh-pages -d dist"
        }
        ```
    *   Run: `npm run deploy`. This will build and push the `dist` contents to the `gh-pages` branch. Then configure GitHub Pages to use this branch.

### 4. Other Static Hosting Providers

Many other services can host static sites (e.g., AWS S3, Google Cloud Storage, Firebase Hosting, Cloudflare Pages, DigitalOcean App Platform). The general principle is to:
1.  Build your project using `npm run build`.
2.  Upload the contents of the `dist` folder to the hosting provider.

## After Deployment

*   Test your live site thoroughly on different devices and browsers.
*   If you configured a custom domain, ensure your DNS settings are correct.

Remember to replace placeholders like `<YOUR_REPO_NAME>` with your actual repository name.
