# 🌌 Planner

A high-fidelity, cinematic daily planning application designed with a focus on immersive aesthetics and fluid user experience. This project explores the intersection of functional utility and high-end motion design, featuring a dynamic "time-of-day" theme engine.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## ✨ Completed Features

### 🎨 Atmospheric Theme Engine
- **Dynamic Time-of-Day:** Seamless transitions between Morning, Afternoon, Evening, and Night themes.
- **Ambient Glows:** Animated "breathing" background gradients that shift in color and position based on the active theme.
- **Cinematic Neon Arc:** A custom-engineered SVG semicircle hero element featuring:
    - Multi-layered Gaussian blur for realistic light spill.
    - Synchronized "energy core" animations.
    - Smooth tapering and transparency falloff at the edges.

### 🛠 UI/UX Refinements
- **Glassmorphism:** High-opacity glass cards for topics with 2px borders for better definition.
- **Typography:** Professional font pairing using **Plus Jakarta Sans** for headers/timers and **Inter** for body text.
- **Interactive Components:** 
    - Smooth button hover states with internal shadows and light-sweep gradients.
    - Theme-specific status indicators (e.g., Red status dot for Morning, Green for others).
- **Responsive Design:** Adaptive layouts and ambient glow positioning for both mobile and desktop screens.

---

## 🚀 Setup Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/Harshydv-me/Planner.git
   cd Planner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 💻 Tech Stack Overview

- **Frontend Framework:** [React 18](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for utility-first styling and layout.
- **Animation:** [Framer Motion](https://www.framer.com/motion/) for complex SVG paths and orchestrating ambient animations.
- **Icons:** [Lucide React](https://lucide.dev/) for consistent, minimalist iconography.
- **Build Tool:** [Vite](https://vitejs.dev/) for lightning-fast development and optimized production bundles.

---

## 🧠 Design Trade-offs & Decisions

### 1. SVG Layers vs. CSS Filters
**Decision:** Chose layered SVG paths with native Gaussian blur filters for the Semicircle Arc instead of standard CSS `drop-shadow`.
**Trade-off:** Slightly more complex DOM structure, but provides significantly better performance and a much more realistic "neon" light spill that standard CSS filters cannot replicate.

### 2. Animated Ambient Glows
**Decision:** Used `fixed` positioned `motion.div`s with large blur radii for the background glows.
**Trade-off:** Large blurs can be GPU-intensive. To balance this, I used `opacity` and `scale` animations rather than animating the `blur` value itself, ensuring smooth performance even on lower-end devices.

### 3. Glassmorphism Opacity
**Decision:** Increased the opacity of topic cards from `0.03` to `0.07` and added `border-2`.
**Decision:** While "pure" glassmorphism is often very thin, I opted for more substance to ensure readability against the moving ambient background glows.

### 4. Font Choice
**Decision:** Replaced default fonts with **Plus Jakarta Sans**.
**Trade-off:** Adds a small network request for Google Fonts, but the modern, geometric nature of Jakarta Sans is essential to achieving the "premium dashboard" aesthetic.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
