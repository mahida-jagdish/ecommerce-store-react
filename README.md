# 🛍️ Modern E-Commerce Application

An elegant, fully-featured, and highly interactive E-Commerce web application built using **React 19**, **Vite 7**, **Tailwind CSS v4.0**, and **Clerk Auth**. The project delivers a premium shopping experience with real-time API integrations, advanced product filtering, persistent shopping cart management, geolocation tracking, and fluid modern styling.

---

## 🚀 Key Features

*   🔐 **Secure Authentication & Identity**: Seamless login, registration, and user profiles powered by **Clerk React SDK**.
*   📦 **Dynamic Product Catalog**: Real-time integration with the **Fake Store API** to fetch and render products dynamically.
*   🔍 **Advanced Multi-Filter & Real-Time Search**:
    *   Instant keyword search.
    *   Category checkbox filtering.
    *   Brand drop-down selections.
    *   Dynamic price range slider filter.
    *   One-click global filters reset button.
*   🛒 **Persistent Shopping Cart**:
    *   Centralized cart state management using `CardContext` with `localStorage` persistence.
    *   Real-time product addition/removal and quantity controls (increment/decrement).
    *   Secure `/card` routing utilizing custom authentication guard.
*   🗺️ **Geolocation Hook**: Custom geolocation services with reverse geocoding via **OpenStreetMap Nominatim API** to fetch and display the user's current city/state directly in the Navbar.
*   📱 **Fully Responsive Layout**: Built with a mobile-first philosophy. Seamless styling across desktops, tablets, and mobile devices featuring:
    *   Smooth touch carousels.
    *   Interactive bottom sheets/drawers for mobile filter controls.
    *   Responsive hamburger navigation menu.
*   ✨ **Premium UI/UX Polish**:
    *   Interactive carousels using **Slick Carousel**.
    *   Smooth Lottie animations via **Lottie React**.
    *   Elegant toast feedback on action events powered by **React Toastify**.
    *   Custom styled "Scroll-to-Top" utility button.
    *   Glassmorphism aesthetics utilizing backdrop-blurs.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Core frontend UI rendering & state management |
| **Vite 7** | Superfast modern dev server and bundler |
| **Tailwind CSS v4.0** | Utility-first next-gen CSS styling engines |
| **Clerk React SDK** | User authentication, identity, & protected routing |
| **Axios** | Efficient HTTP networking client |
| **React Router Dom v7** | Single Page Application (SPA) client routing |
| **React Toastify** | Dynamic, beautiful, and interactive popups |
| **Lottie React** | High-performance vector-based micro-animations |
| **Lucide & React Icons**| Crisp, premium SVG vector iconography |

---

## 📂 Project Structure

```bash
Ecommerce/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Vector illustrations, logo, and animations
│   ├── components/        # Reusable global UI components
│   │   ├── Carousel.jsx      # Home hero slider
│   │   ├── Category.jsx      # Top category chips
│   │   ├── Features.jsx      # Store value props grid
│   │   ├── FilterSection.jsx # Side navigation filters (Desktop)
│   │   ├── MobileFilter.jsx  # Bottom slide drawer filters (Mobile)
│   │   ├── Navbar.jsx        # Navigation + Location + Clerk Profile
│   │   └── ProtectedRouts.jsx# Auth Route Guard
│   ├── context/           # React Global Context Providers
│   │   ├── CardContext.jsx   # LocalStorage persistent shopping cart state
│   │   └── DataContext.jsx   # Product collection & metadata fetching
│   ├── pages/             # Layout screen pages
│   │   ├── Home.jsx          # Front landing page
│   │   ├── Products.jsx      # Interactive catalog grid
│   │   ├── SingleProduct.jsx # Detail specifications & product CTA
│   │   ├── Card.jsx          # Protected Cart item reviews
│   │   ├── About.jsx         # Info page
│   │   └── Contact.jsx       # Contact page
│   ├── App.jsx            # Routing hierarchy & Layout entry
│   ├── index.css          # Styling layers and Tailwind CSS imports
│   └── main.jsx           # Render target and Clerk/Context providers
├── .env                   # Local environment credentials
├── vite.config.js         # Vite custom plugins config
└── package.json           # Active list of package dependencies
```

---

## 💻 Quick Start & Installation

To run this project locally, follow these steps:

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### 2. Clone the Repository
```bash
git clone <your-repository-url>
cd Ecommerce
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Setup Environment Variables
Create a `.env` file in the root of the `Ecommerce` directory and add your Clerk publishable credentials:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
```

### 5. Start Development Server
```bash
npm run dev
```
Your terminal will output the local development port (usually `http://localhost:5173/`). Open it in your browser!

### 6. Build for Production
To bundle the project for production deployment:
```bash
npm run build
```
Production assets will be generated in the `/dist` directory.

---

## 🔌 API & External Services

1.  **Fake Store API** (`https://fakestoreapi.com`): Supplies the full inventory of goods including titles, prices, descriptions, ratings, and image links.
2.  **OpenStreetMap Nominatim** (`https://nominatim.openstreetmap.org`): Handles coordinates reverse lookup to dynamically format the user's city and state on geolocation requests.
3.  **Clerk Auth**: Handles user registration, sessions, auth states, and account settings buttons natively.

---

## 📄 License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it.
