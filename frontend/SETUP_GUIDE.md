// Frontend Setup Guide
// ====================

// INSTALLATION STEPS:
// 1. cd frontend
// 2. npm install
// 3. npm run dev

// COMMANDS:
// npm run dev - Start development server (port 5173)
// npm run build - Build for production
// npm run preview - Preview production build
// npm run lint - Run ESLint

// IMPORTANT NOTES:
// - Backend must be running on http://localhost:8080
// - Update API endpoint in .env if needed
// - Requires Node.js v16+

// FEATURE CHECKLIST:
// ✅ React + Vite setup
// ✅ Tailwind CSS styling
// ✅ Responsive design
// ✅ Dark theme
// ✅ File upload (drag & drop)
// ✅ Dynamic chart rendering (Bar, Pie, Line)
// ✅ Data filtering
// ✅ KPI cards
// ✅ Chart export (PNG)
// ✅ Toast notifications
// ✅ Error handling
// ✅ Loading states

// COMPONENT HIERARCHY:
// App
// ├── Navbar
// ├── Sidebar
// └── Dashboard
// ├── FileUpload
// ├── KPISection
// ├── FilterSidebar
// ├── ChartRenderer (multiple)
// └── Toast (notifications)

// API ENDPOINTS USED:
// POST http://localhost:8080/api/upload
// - Payload: FormData with file
// - Returns: { columns, charts, data }

// FOLDER STRUCTURE:
// src/
// components/ - Reusable React components
// pages/ - Page components (Dashboard)
// layouts/ - Layout components (Sidebar)
// services/ - API services
// hooks/ - Custom React hooks
// utils/ - Utility functions
// assets/ - Static assets (images, fonts)
// App.jsx - Main app component
// main.jsx - Entry point
// index.css - Global styles

console.log('Frontend setup guide loaded');
