# Complete Installation & Setup Instructions

## 📦 System Requirements

Before installing, ensure you have:

- **Node.js v16.0.0 or higher** - [Download](https://nodejs.org)
- **npm v7.0.0 or higher** - Comes with Node.js
- **Git** (optional) - For version control
- **Spring Boot backend** running on `http://localhost:8080`

Verify installation:

```bash
node --version
npm --version
```

---

## 🎯 Installation Steps

### Step 1: Navigate to Frontend Directory

```bash
cd "path\to\Data Visualizer\frontend"
# Or on Windows:
cd C:\Users\YourUsername\Documents\Data Visualizer\frontend
```

### Step 2: Install All Dependencies

This command installs all required packages from `package.json`:

```bash
npm install
```

**What gets installed:**

```
✓ React 18.2.0              - UI library
✓ Vite 5.0.0                - Build tool
✓ Tailwind CSS 3.3.5        - Styling framework
✓ Recharts 2.10.3           - Chart library
✓ Axios 1.6.2               - HTTP client
✓ react-dropzone 14.2.3     - File upload
✓ html2canvas 1.4.1         - Chart export
✓ Lucide React 0.294.0      - Icon library
✓ All dev dependencies      - Build tools
```

**Installation time:** 2-3 minutes (first time)

### Step 3: Create Environment File (Optional)

```bash
# Copy example env file
cp .env.example .env
```

Default configuration is already set for local development. Modify only if:

- Backend is on a different port/URL
- Need custom API endpoint

### Step 4: Start Development Server

```bash
npm run dev
```

**Expected output:**

```
  VITE v5.0.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

The browser will automatically open at `http://localhost:5173`

---

## ✅ Verification Checklist

After installation, verify everything works:

- [ ] Dependencies installed without errors
- [ ] Development server starts successfully
- [ ] Browser opens to http://localhost:5173
- [ ] No console errors in browser (F12)
- [ ] Upload interface is visible
- [ ] Can access all UI elements

---

## 🚀 Quick Commands Reference

```bash
# Development
npm run dev              # Start dev server

# Building
npm run build            # Create production build
npm run preview          # Preview production build

# Code quality
npm run lint             # Check code with ESLint

# Package management
npm install              # Install dependencies
npm update               # Update all packages
npm outdated             # Check outdated packages
npm cache clean --force  # Clear npm cache
```

---

## 🔧 Configuration Files Overview

| File                 | Purpose                        |
| -------------------- | ------------------------------ |
| `package.json`       | Dependencies and scripts       |
| `vite.config.js`     | Vite build configuration       |
| `tailwind.config.js` | Tailwind CSS customization     |
| `postcss.config.js`  | PostCSS configuration          |
| `index.html`         | HTML entry point               |
| `.env.example`       | Environment variables template |
| `.eslintrc.json`     | ESLint configuration           |
| `.gitignore`         | Git ignore patterns            |

---

## 📁 Frontend Folder Structure

```
frontend/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── FileUpload.jsx
│   │   ├── KPISection.jsx
│   │   ├── FilterSidebar.jsx
│   │   ├── ChartRenderer.jsx
│   │   ├── Loader.jsx
│   │   └── Toast.jsx
│   ├── pages/               # Page components
│   │   └── Dashboard.jsx
│   ├── layouts/             # Layout components
│   │   └── Sidebar.jsx
│   ├── services/            # API services
│   │   └── apiService.js
│   ├── hooks/               # Custom React hooks
│   │   └── useCustom.js
│   ├── utils/               # Utility functions
│   │   ├── dataUtils.js
│   │   ├── exportUtils.js
│   │   ├── constants.js
│   │   └── validation.js
│   ├── assets/              # Static assets
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── public/                  # Static files
├── package.json             # Dependencies
├── vite.config.js           # Vite config
├── tailwind.config.js       # Tailwind config
├── postcss.config.js        # PostCSS config
├── index.html               # HTML template
├── .env.example             # Env template
├── .gitignore               # Git ignore
├── README.md                # Full documentation
├── QUICKSTART.md            # Quick start guide
└── SETUP_GUIDE.md          # Setup guide
```

---

## 🐛 Troubleshooting Installation

### Issue: npm command not found

**Solution:** Install Node.js from https://nodejs.org

### Issue: EACCES permission denied (Mac/Linux)

**Solution:**

```bash
sudo npm install
# Or fix npm permissions:
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

### Issue: Port 5173 already in use

**Solution:** Change port in `vite.config.js`

```javascript
server: {
  port: 3000; // Use different port
}
```

### Issue: Dependencies installation fails

**Solution:**

```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Issue: Module not found errors

**Solution:**

```bash
# Reinstall all dependencies
npm install

# Or specific package
npm install --save axios
```

---

## 🔗 Backend Integration

The frontend expects the backend to expose:

```
POST http://localhost:8080/api/upload
```

**Request:**

- Content-Type: multipart/form-data
- File field: file (CSV or XLSX)

**Response:**

```json
{
  "columns": [{ "name": "ColumnName", "type": "CATEGORY|NUMBER" }],
  "charts": [{ "chartType": "BAR|PIE|LINE", "xAxis": "X", "yAxis": "Y" }],
  "data": [{ "ColumnName": "value" }]
}
```

---

## 📦 Dependency Installation Commands

If you need to install specific packages:

```bash
# All installed by default
npm install

# Manual installation (if needed)
npm install react react-dom
npm install -D vite @vitejs/plugin-react
npm install -D tailwindcss postcss autoprefixer
npm install recharts
npm install axios
npm install react-dropzone
npm install html2canvas
npm install lucide-react

# Dev dependencies (automatically included)
npm install -D eslint
npm install -D @types/react @types/react-dom
```

---

## 🚀 First Run Checklist

1. **Open Terminal/Command Prompt**

   ```bash
   cd frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start Dev Server**

   ```bash
   npm run dev
   ```

4. **Open Browser**
   - Automatically opens to http://localhost:5173
   - Or manually navigate if needed

5. **Test Upload**
   - Drag and drop a CSV/XLSX file
   - Watch for visualizations to appear

6. **Explore Features**
   - Try filtering data
   - Export a chart
   - Upload new data

---

## 🎓 Learning Resources

- **React**: https://react.dev
- **Vite**: https://vitejs.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Recharts**: https://recharts.org
- **Axios**: https://axios-http.com

---

## 📞 Common Issues & Solutions

| Issue                  | Solution                                  |
| ---------------------- | ----------------------------------------- |
| npm not found          | Install Node.js from nodejs.org           |
| Port in use            | Change port in vite.config.js             |
| Modules missing        | Run `npm install` again                   |
| Backend not connecting | Ensure Spring Boot runs on port 8080      |
| Styling not working    | Clear cache, rebuild with `npm run build` |
| Charts not rendering   | Check browser console (F12) for errors    |

---

## ✨ You're All Set!

Now you're ready to:

- ✅ Start the development server
- ✅ Upload and visualize data
- ✅ Explore the dashboard
- ✅ Export charts
- ✅ Customize the application

**Enjoy building amazing dashboards!** 🎉

---

## 📋 Next Steps

1. Read [QUICKSTART.md](QUICKSTART.md) for usage guide
2. Check [README.md](README.md) for full documentation
3. Review the component structure in `src/`
4. Customize styles in `tailwind.config.js`
5. Deploy to production when ready

---

**Questions?** Check the troubleshooting section or review the documentation files.
