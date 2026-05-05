# Quick Start Guide - Data Visualizer Frontend

## 🚀 Installation & Setup (5 minutes)

### Step 1: Install Dependencies

Navigate to the frontend folder and install all required packages:

```bash
cd frontend
npm install
```

This will install:

- React 18
- Vite
- Tailwind CSS
- Recharts
- Axios
- react-dropzone
- html2canvas
- Lucide React icons

### Step 2: Configure Environment (Optional)

Create a `.env` file in the frontend root:

```bash
cp .env.example .env
```

Update if your backend is on a different URL:

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

### Step 3: Start Development Server

```bash
npm run dev
```

The app will automatically open at **http://localhost:5173**

✅ **You're ready to go!**

---

## 📋 Prerequisites

Before starting, ensure you have:

- **Node.js v16+** - [Download](https://nodejs.org)
- **npm or yarn** - Comes with Node.js
- **Spring Boot backend** - Running on http://localhost:8080
- **CSV or XLSX files** - For testing data upload

---

## 🎯 Usage Guide

### 1️⃣ Upload Data

1. Open http://localhost:5173 in your browser
2. You'll see the upload interface
3. Either:
   - **Drag & drop** a CSV/XLSX file onto the upload area
   - **Click** the upload area to browse files
4. Wait for upload to complete

### 2️⃣ View Dashboard

After successful upload:

- **KPI Cards** at the top show data statistics
- **Filter Sidebar** on the left lets you filter data
- **Charts** are automatically generated and displayed

### 3️⃣ Filter & Explore

- Click any filter to expand it
- Select or type values to filter
- Charts update **instantly**
- Use "Clear All" to reset filters

### 4️⃣ Export Charts

- Hover over any chart
- Click the **Download** button
- Chart exports as high-resolution PNG

### 5️⃣ Upload New Data

- Scroll to bottom and click "Upload New File"
- All previous data and filters are cleared
- Ready for new upload

---

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Top navigation
│   │   ├── Loader.jsx           # Loading spinner
│   │   ├── FileUpload.jsx       # Upload interface
│   │   ├── KPISection.jsx       # Statistics cards
│   │   ├── FilterSidebar.jsx    # Filter controls
│   │   ├── ChartRenderer.jsx    # Chart display
│   │   └── Toast.jsx            # Notifications
│   ├── pages/
│   │   └── Dashboard.jsx        # Main page
│   ├── layouts/
│   │   └── Sidebar.jsx          # Navigation sidebar
│   ├── services/
│   │   └── apiService.js        # API calls
│   ├── hooks/
│   │   └── useCustom.js         # Custom hooks
│   ├── utils/
│   │   ├── dataUtils.js         # Data processing
│   │   ├── exportUtils.js       # Export functions
│   │   ├── constants.js         # App constants
│   │   └── validation.js        # Validators
│   ├── assets/                  # Images, fonts
│   ├── App.jsx                  # Main app
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── package.json                 # Dependencies
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind settings
├── postcss.config.js            # PostCSS config
├── index.html                   # HTML template
├── README.md                    # Full documentation
└── SETUP_GUIDE.md              # Installation guide
```

---

## 🛠️ Available Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:5173)

# Production
npm run build            # Build for production
npm run preview          # Preview production build

# Linting
npm run lint             # Check code with ESLint

# Other
npm install              # Install dependencies
npm update               # Update all packages
npm outdated             # Check for outdated packages
```

---

## ⚙️ Configuration

### Tailwind CSS

Located in `tailwind.config.js` - Customize colors, spacing, etc.

### Vite Server

Located in `vite.config.js` - Change port from 5173 if needed:

```javascript
server: {
  port: 3000; // Changed port
}
```

### API Endpoint

Located in `.env` - Change backend URL:

```env
VITE_API_BASE_URL=http://your-backend:8080/api
```

---

## 🐛 Troubleshooting

### Problem: "Cannot connect to backend"

**Solution:**

- Ensure Spring Boot is running on http://localhost:8080
- Check the API endpoint in `.env`
- Check browser console (F12) for errors

### Problem: "Charts not rendering"

**Solution:**

- Verify backend response format matches expected structure
- Check the browser console for error messages
- Ensure data is valid and non-empty

### Problem: "Upload fails"

**Solution:**

- Check file format (must be CSV or XLSX)
- Verify file size is under 50MB
- Check that backend is accessible

### Problem: "Port 5173 already in use"

**Solution:**
Change the port in `vite.config.js` or kill the process:

```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :5173
kill -9 <PID>
```

### Problem: "Dependencies not installing"

**Solution:**

```bash
# Clear cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 🚀 Production Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder.

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
# Add to package.json:
"homepage": "https://yourusername.github.io/data-visualizer"

npm run build
npm install -g gh-pages
gh-pages -d dist
```

---

## 📊 API Integration

The frontend communicates with the backend via this endpoint:

```
POST http://localhost:8080/api/upload
Content-Type: multipart/form-data
Body: { file: <CSV/XLSX file> }
```

**Expected Response:**

```json
{
  "columns": [
    { "name": "Region", "type": "CATEGORY" },
    { "name": "Sales", "type": "NUMBER" }
  ],
  "charts": [
    {
      "chartType": "BAR",
      "xAxis": "Region",
      "yAxis": "Sales"
    }
  ],
  "data": [{ "Region": "North", "Sales": 1200 }]
}
```

---

## 💡 Tips & Best Practices

✅ **DO:**

- Use CSV files with headers in first row
- Ensure numeric columns contain only numbers
- Keep file names simple without special characters
- Export charts regularly for reports
- Test with sample data first

❌ **DON'T:**

- Upload files larger than 50MB
- Use non-standard date formats
- Mix numeric and text in same column
- Forget to start the backend
- Upload sensitive data without security measures

---

## 🎨 Customization Examples

### Change Primary Color

Edit `tailwind.config.js`:

```javascript
colors: {
  brand: {
    500: '#FF6B6B'  // Change to your color
  }
}
```

### Add New Chart Type

Edit `src/components/ChartRenderer.jsx`:

```javascript
case 'AREA':
  return <AreaChart>...</AreaChart>
```

### Modify KPI Cards

Edit `src/components/KPISection.jsx`:

```javascript
const kpiCards = [
  // Add your custom KPI
];
```

---

## 📞 Support & Resources

- **Frontend Issues** → Check browser console (F12)
- **Backend Issues** → Check Spring Boot logs
- **Styling Issues** → Review Tailwind CSS docs
- **Chart Issues** → Check Recharts documentation
- **API Issues** → Verify request/response format

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Recharts Documentation](https://recharts.org)
- [Axios Documentation](https://axios-http.com)

---

## ✨ Next Steps

1. ✅ Install dependencies
2. ✅ Start development server
3. ✅ Upload test data
4. ✅ Explore dashboards
5. ✅ Customize styling
6. ✅ Deploy to production

**Happy visualizing! 🎉**
