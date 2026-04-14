# 📝 HNG 14 | Stage 1A: Interactive Liquid Glass Todo

A high-fidelity, state-driven Task Manager built for the **HNG 14 Internship (Frontend Track)**. This project evolves the initial Todo concept into a functional micro-app featuring real-time state synchronization, dynamic priority theming, and a dual-mode "View/Edit" interface.

## 🚀 Live Demo
[**View the Live Project Here**](INSERT_YOUR_LIVE_LINK_HERE)

---

## 🎨 Design Philosophy: "Dynamic Liquid Glass"
This iteration maintains the **Apple-inspired Liquid Glass** aesthetic while adding reactive UI elements that change based on task urgency.
* **Contextual Priority Theming:** The Priority Pill dynamically shifts colors (🔴 High, 🟠 Medium, 🟢 Low) to provide immediate visual hierarchy.
* **Urgency Feedback:** Integrated a blinking ⚠️ warning icon and red-text alerts that trigger automatically when a task is overdue or near its deadline.
* **Refined Glassmorphism:** Uses `backdrop-filter: blur(30px) saturate(200%)` and specular highlights for a premium, tactile feel.

## 🛠️ Technical Specifications & Logic
* **State Management:** Implemented a single-source-of-truth logic in Vanilla JS to sync data between the View mode and the Edit form.
* **Dual-Mode Architecture:** Seamlessly toggles between a display card and a functional `<form>` without page reloads.
* **Smart Time Logic:** Features a dynamic countdown that automatically switches from **Days** to **Hours/Minutes** as the deadline approaches.
* **Status Synchronization:** Bi-directional syncing between the visual checkbox and the status dropdown (Pending ↔ Done).

## ♿ Accessibility & UX
* **Semantic Structure:** Leverages `<article>`, `<time>`, and `<nav>` for SEO and screen-reader efficiency.
* **WCAG Compliance:** High-contrast text ratios and keyboard-accessible focus states for all interactive inputs.
* **UX Transitions:** Includes "Read More" collapsible logic for long descriptions to maintain a compact, clean interface.

## 🧪 Verified Test Hooks (Stage 1A Compliant)
Fully instrumented with 13 mandatory `data-testid` attributes:
* `test-todo-card` | `test-todo-title` | `test-todo-description`
* `test-todo-priority` | `test-todo-due-date` | `test-todo-time-remaining`
* `test-todo-status` | `test-todo-complete-toggle` | `test-todo-edit-button`
* `test-todo-delete-button` | `test-todo-edit-form` | `test-todo-save-button`
* `test-todo-overdue-indicator`

---

**Developed by Akpe Raymond Samuel (Rayflix)** *Frontend Engineer & Technical Writer* [GitHub](https://github.com/rayflix55) | [LinkedIn](https://www.linkedin.com/in/akpe-samuel-993971329) | [X (Twitter)](https://x.com/web3rayflix)