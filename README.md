# Siliguri Travels - Travel Agency Landing Page

A pixel-perfect, fully responsive travel agency landing page built with **React** and **Tailwind CSS**. This project was designed to match a provided Figma concept with high fidelity, ensuring a modern, premium user experience across all devices.

![Siliguri Travels Preview](https://github.com/user-attachments/assets/placeholder-image) 
*(Note: Visual preview available in local environment)*

## 🚀 Features

*   **Responsive Design**: Mobile-first architecture that scales perfectly to tablets and desktops.
*   **Custom Navbar**: Unique "Call Anytime" curved button implementation and full-width layout.
*   **Mobile Experience**:
    *   Sticky bottom action bar (Dashboard, Book Call, WhatsApp Support).
    *   Safe-area padding for modern mobile browsers.
*   **Modern UI Components**:
    *   **Hero Section**: Full-width visuals with signature bottom-curve styling.
    *   **Tour Packages**: Grid layout with hover effects and glassmorphism overlays.
    *   **Testimonials**: 3-card layout showcasing user reviews and ratings.
    *   **Contact Form**: Glassmorphism design overlaying panoramic mountain views.
*   **Performance**: Optimized assets, clean component structure, and efficient Tailwind usage.

## 🛠️ Tech Stack

*   **Frontend Framework**: React.js (Vite)
*   **Styling**: Tailwind CSS v3
*   **Icons**: Lucide React
*   **Language**: TypeScript (`.tsx`)
*   **Fonts**: Poppins (Google Fonts)

## 📂 Project Structure

```bash
src/
├── components/       # Reusable UI blocks
│   ├── Navbar.tsx    # Main navigation with custom shapes
│   ├── Hero.tsx      # Landing visual with curved bottom
│   ├── MobileNav.tsx # Fixed bottom bar for mobile
│   ├── Footer.tsx    # SEO links, credits, and contact info
│   └── ...           # TourPackages, About, WhyUs, etc.
├── assets/           # Static images (optimized)
├── index.css         # Global styles & Tailwind directives
└── App.tsx           # Main application layout
```

## ⚡ Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/siliguri-travels.git
    cd siliguri-travels
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 📱 Mobile features
The site includes a specialized **Mobile Action Footer** that only appears on screens smaller than `768px`. It provides quick access to:
*   **Dashboard**
*   **Book Call** (Triggers native phone dialer)
*   **Support** (Opens WhatsApp)

## 👨‍💻 Credits

**Developed by Reboot AI**  
**Made by Kunal**

*   [GitHub Profile](https://github.com/)
*   [LinkedIn Profile](https://linkedin.com/)

---
*© 2024 Siliguri Travels. All Rights Reserved.*
