# 📝 HNG 14 | Stage 0: Testable Todo Card

A high-fidelity, accessible, and responsive Todo Item Card built for the **HNG 14 Internship (Frontend Track)**. This project demonstrates the ability to build complex, polished UI components using pure Vanilla technologies.

## 🚀 Live Demo
[**View the Live Project Here**](https://hng14-stage0-todo-card.vercel.app/)

---

## 🎨 Design Philosophy: "Liquid Glass"
Moving beyond standard glassmorphism, this card implements an **Apple-inspired Liquid Glass** aesthetic. 
* **Specular Highlights:** A 1.5px semi-transparent border mimics light hitting the edge of a physical glass pane.
* **Saturation Boost:** Uses `backdrop-filter: saturate(200%)` to allow background colors to bleed through with high vibrancy.
* **Depth & Elevation:** A multi-tier box shadow system provides a sense of physical weight and presence on the Z-axis.

## 🛠️ Technical Specifications
* **Languages:** HTML5, CSS3, Vanilla JavaScript (ES6+).
* **Icons:** Self-contained SVG for zero external dependencies and lightning-fast load times.
* **Testing:** Fully instrumented with 11 mandatory `data-testid` attributes to meet HNG automated grading requirements.
* **Architecture:** Single-file, self-contained architecture for maximum performance.

## ♿ Accessibility & UX
* **Semantic HTML:** Utilizes `<article>`, `<time>`, `<ul>`, and `<button>` for proper document structure.
* **ARIA Live Regions:** The "Time Remaining" counter uses `aria-live="polite"` to announce updates to assistive technology.
* **Keyboard Navigable:** Logical tab flow (Checkbox → Edit → Delete) with high-visibility focus rings for WCAG AA compliance.
* **Responsive:** Fluid layout optimized for a range of devices from **320px (Mobile)** to **1200px+ (Desktop)**.

## 🧪 Verified Test Hooks
The project includes exact matches for all required test identifiers:
* `data-testid="test-todo-card"`
* `data-testid="test-todo-title"`
* `data-testid="test-todo-description"`
* `data-testid="test-todo-priority"`
* `data-testid="test-todo-due-date"`
* `data-testid="test-todo-time-remaining"`
* `data-testid="test-todo-status"`
* `data-testid="test-todo-complete-toggle"`
* `data-testid="test-todo-tags"`
* `data-testid="test-todo-edit-button"`
* `data-testid="test-todo-delete-button"`

## ⚙️ How to Run Locally
1. Clone the repository:
   ```bash
   git clone [https://github.com/YOUR_USERNAME/hng14-stage0-todo-card.git](https://github.com/YOUR_USERNAME/hng14-stage0-todo-card.git)

2. Open index.html in any modern web browser.

Developed by Akpe Raymond Samuel (Rayflix) Frontend Developer & Technical Writer 
