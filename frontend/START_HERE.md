# 🚀 GET STARTED - Complete Command Reference

## 📋 What Was Built

A complete, production-ready React frontend for the Data Visualization & Dashboard Generator with:

✅ **28+ files** organized in a scalable structure
✅ **8 reusable components** with modern UI/UX
✅ **Dynamic chart rendering** (Bar, Pie, Line)
✅ **Real-time data filtering**
✅ **KPI statistics dashboard**
✅ **PNG export functionality**
✅ **Professional dark theme**
✅ **Fully responsive design**
✅ **Complete documentation**
✅ **Error handling & validation**

---

## 🎯 Let's Get Started (3 Simple Steps)

### Step 1️⃣: Install Dependencies (2 minutes)

**Windows (Command Prompt or PowerShell):**

```bash
cd C:\Users\YourUsername\Documents\Data Visualizer\frontend
npm install
```

**Mac/Linux (Terminal):**

```bash
cd ~/Documents/Data\ Visualizer/frontend
npm install
```

**What happens:**

- Downloads all required packages
- Creates `node_modules` folder
- Installs React, Vite, Tailwind, Recharts, etc.
- Creates `package-lock.json`

**Time:** 2-3 minutes
**Size:** ~500 MB (will be deleted in production build)

---

### Step 2️⃣: Start Development Server (30 seconds)

```bash
npm run dev
```

**Expected output:**

```
  VITE v5.0.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

**Browser opens automatically to:** http://localhost:5173/

✅ **You're now running the frontend!**

---

### Step 3️⃣: Start Using the Dashboard (Immediate)

1. **Ensure Backend is Running**
   - Spring Boot must be running on http://localhost:8080
   - If not, start it first

2. **Upload Data**
   - Drag and drop a CSV or XLSX file
   - Or click to browse and select file
   - Wait for upload to complete

3. **View Dashboard**
   - Charts render automatically
   - KPI cards show statistics
   - Filters appear in sidebar

✅ **Dashboard is ready to use!**

---

## 📊 After Setup - How to Use

### File Upload Flow

```
1. Drag file onto upload area
   ↓
2. File is validated
   ↓
3. Loading spinner appears
   ↓
4. File uploads to backend
   ↓
5. Backend analyzes data
   ↓
6. Charts render automatically
   ↓
7. Filters become available
```

### Dashboard Features

- **KPI Cards** - See total rows, columns, and charts
- **Charts** - Multiple visualizations auto-generated
- **Filters** - Dynamically filter by category columns
- **Export** - Download charts as PNG
- **Upload New** - Start fresh with new data

---

## 🎮 All Available Commands

### Development

```bash
# Start development server
npm run dev

# Stop server: Press Ctrl+C in terminal
```

### Production

```bash
# Build for production (creates dist/ folder)
npm run build

# Preview production build locally
npm run preview

# Deploy dist/ folder to hosting
```

### Utilities

```bash
# Check code quality
npm run lint

# View outdated packages
npm outdated

# Update all packages
npm update

# Clear npm cache
npm cache clean --force

# Install specific package
npm install package-name

# Remove package
npm uninstall package-name
```

---

## 📁 File Structure Overview

```
frontend/
├── src/
│   ├── components/          # 8 React components
│   ├── pages/              # Dashboard page
│   ├── layouts/            # Sidebar layout
│   ├── services/           # API integration
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── assets/             # Static files
│   ├── App.jsx             # Main app
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies
├── vite.config.js          # Build config
├── tailwind.config.js      # Tailwind config
├── index.html              # HTML template
├── README.md               # Full documentation
├── QUICKSTART.md           # Quick start
├── INSTALLATION.md         # Installation guide
└── PROJECT_SUMMARY.md      # Project overview
```

---

## 📱 Accessing the Application

### Local Development

```
http://localhost:5173/
```

### Using Different Port

Edit `vite.config.js`:

```javascript
server: {
  port: 3000; // Change port
}
```

### From Another Computer

```
http://your-ip-address:5173/
# Example: http://192.168.1.5:5173/
```

---

## 🔗 Backend Requirements

The frontend expects the backend to be running with:

**Endpoint:** `POST http://localhost:8080/api/upload`

**Request:**

- Multipart form-data
- Key: `file`
- Value: CSV or XLSX file

**Response:**

```json
{
  "columns": [{ "name": "ColumnName", "type": "CATEGORY|NUMBER" }],
  "charts": [{ "chartType": "BAR|PIE|LINE", "xAxis": "X", "yAxis": "Y" }],
  "data": [{ "ColumnName": "value" }]
}
```

---

## 🧪 Testing Checklist

After npm install and npm run dev, verify:

- [ ] Browser opens to http://localhost:5173
- [ ] Upload interface is visible
- [ ] No console errors (F12)
- [ ] Can drag and drop files
- [ ] Can select files via click
- [ ] File validation works
- [ ] Backend upload works (if backend is running)
- [ ] Charts render after upload
- [ ] Filters appear in sidebar
- [ ] KPI cards display
- [ ] Responsive on mobile (F12 → Toggle device toolbar)

---

## ⚠️ Common Issues & Solutions

### Issue: npm command not found

```bash
# Solution: Install Node.js from https://nodejs.org
# Download and run installer
# Restart terminal/command prompt
# Try again: npm --version
```

### Issue: Port 5173 already in use

```bash
# Solution 1: Kill the process
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Solution 2: Change port in vite.config.js
server: {
  port: 3000
}
```

### Issue: Backend connection failed

```bash
# Solution 1: Ensure Spring Boot is running
# Solution 2: Check backend URL in .env
VITE_API_BASE_URL=http://localhost:8080/api

# Solution 3: Check browser console (F12) for CORS errors
```

### Issue: Charts not rendering

```bash
# Solution 1: Check browser console for errors
# Solution 2: Verify API response format
# Solution 3: Ensure data is not empty
# Solution 4: Check Recharts dependencies installed
npm install recharts
```

### Issue: Dependencies not installing

```bash
# Solution 1: Clear npm cache
npm cache clean --force

# Solution 2: Remove and reinstall
rm -rf node_modules package-lock.json
npm install

# Solution 3: Update npm
npm install -g npm@latest
```

---

## 📚 Documentation Files

Inside frontend folder you'll find:

| File                   | Read This For                     |
| ---------------------- | --------------------------------- |
| **README.md**          | Complete documentation & features |
| **QUICKSTART.md**      | Quick usage guide                 |
| **INSTALLATION.md**    | Detailed installation steps       |
| **PROJECT_SUMMARY.md** | Architecture & technical details  |
| **FILE_INVENTORY.md**  | List of all files created         |
| **SETUP_GUIDE.md**     | Setup overview                    |
| **package.json**       | Dependencies list                 |

---

## 🎨 Customization Quick Tips

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  brand: {
    500: '#YourColor'
  }
}
```

### Change Port

Edit `vite.config.js`:

```javascript
server: {
  port: 3000;
}
```

### Add Components

1. Create `src/components/YourComponent.jsx`
2. Import and use in Dashboard
3. Reload browser (auto-reload works)

### Modify API Endpoint

Edit `.env`:

```env
VITE_API_BASE_URL=http://your-backend:8080/api
```

---

## 📦 Deployment (When Ready)

### Build for Production

```bash
npm run build
```

Creates optimized `dist/` folder (~200KB)

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

```bash
npm run build
npm install -g gh-pages
gh-pages -d dist
```

---

## 🚦 Next Steps

1. **✅ Install dependencies**

   ```bash
   npm install
   ```

2. **✅ Start dev server**

   ```bash
   npm run dev
   ```

3. **✅ Open browser**
   Navigate to http://localhost:5173

4. **✅ Test upload**
   Drag a CSV file onto the upload area

5. **✅ Explore features**
   - Try filtering
   - Export charts
   - Upload new data

6. **✅ Customize**
   - Change colors
   - Modify layout
   - Add features

7. **✅ Deploy**
   - When ready to go live
   - Build and deploy to hosting

---

## 💡 Pro Tips

- **Use VS Code** for best developer experience
- **Install ES7+ snippets** extension for faster coding
- **Use browser DevTools** (F12) for debugging
- **Check console** for error messages
- **Test with sample data** first
- **Export charts** for reports
- **Keep backend logs** open while testing

---

## 📞 Getting Help

### Debugging

1. Open browser console (F12)
2. Check for error messages
3. Review Network tab for API calls
4. Check backend logs

### Documentation

1. Read README.md for features
2. Check PROJECT_SUMMARY.md for architecture
3. Review QUICKSTART.md for usage
4. See FILE_INVENTORY.md for file list

### External Resources

- React: https://react.dev
- Vite: https://vitejs.dev
- Tailwind: https://tailwindcss.com
- Recharts: https://recharts.org

---

## ✨ You're All Set!

**Everything is ready to go:**

- ✅ All files created
- ✅ All dependencies configured
- ✅ All components built
- ✅ All documentation written
- ✅ All styling complete

**Just run:**

```bash
cd frontend
npm install
npm run dev
```

**Then enjoy your professional data visualization dashboard!** 🎉

---

## 📋 Final Checklist

Before uploading data:

- [ ] Node.js v16+ installed
- [ ] In frontend folder
- [ ] `npm install` completed
- [ ] `npm run dev` running
- [ ] Browser open to http://localhost:5173
- [ ] Spring Boot backend running (if testing upload)
- [ ] Test CSV/XLSX file ready
- [ ] No console errors visible

---

**Ready to visualize amazing data? Let's go!** 🚀📊✨

---

**Questions?** Check the documentation files in the frontend folder.

**Enjoy!** 🎉
