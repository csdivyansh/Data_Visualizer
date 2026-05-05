# Data Visualizer Frontend

A modern, responsive React dashboard for the Automated Data Visualization & Dashboard Generator. Built with React, Vite, Tailwind CSS, and Recharts.

## Features

✨ **Modern Dashboard UI**

- Clean, professional design with dark theme
- Responsive layout (mobile, tablet, desktop)
- Smooth animations and transitions
- Glass morphism and gradient effects

📊 **Dynamic Chart Rendering**

- Support for Bar, Pie, and Line charts
- Automatically generated from backend response
- Real-time filtering and updates
- Customizable chart configurations

📁 **File Upload**

- Drag and drop file upload
- Support for CSV and XLSX formats
- Real-time upload progress
- File validation and error handling

🔍 **Data Filtering**

- Dynamic filter generation from dataset columns
- Instant chart updates
- Multi-filter support
- Search within filters

📈 **KPI Cards**

- Total rows count
- Numerical and category column counts
- Charts generated count
- Visual progress indicators

💾 **Export Functionality**

- Download charts as PNG
- High-resolution exports
- Easy-to-use export buttons

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Recharts** - Chart library
- **Axios** - HTTP client
- **react-dropzone** - File upload
- **html2canvas** - Chart export
- **Lucide React** - Icons

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Top navigation bar
│   ├── Loader.jsx           # Loading spinner
│   ├── FileUpload.jsx       # Drag-drop file upload
│   ├── KPISection.jsx       # KPI cards display
│   ├── FilterSidebar.jsx    # Data filtering
│   ├── ChartRenderer.jsx    # Chart rendering
│   └── Toast.jsx            # Toast notifications
├── pages/
│   └── Dashboard.jsx        # Main dashboard page
├── layouts/
│   └── Sidebar.jsx          # Navigation sidebar
├── services/
│   └── apiService.js        # API integration
├── hooks/
│   └── useCustom.js         # Custom React hooks
├── utils/
│   ├── dataUtils.js         # Data processing utilities
│   └── exportUtils.js       # Export utilities
├── assets/                  # Static assets
├── App.jsx                  # Main app component
├── main.jsx                 # React entry point
└── index.css                # Global styles
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Running Spring Boot backend on http://localhost:8080

### Installation

1. **Navigate to frontend directory:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Create .env file:**

   ```bash
   cp .env.example .env
   ```

4. **Update environment variables if needed:**
   ```env
   VITE_API_BASE_URL=http://localhost:8080/api
   ```

## Running the Application

### Development Server

```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Production Build

```bash
npm run build
```

Build artifacts will be in the `dist/` directory.

### Preview Build

```bash
npm run preview
```

## Usage Guide

### 1. Upload Data

- Click the upload area or drag and drop a CSV/XLSX file
- Wait for the file to be processed
- The backend will analyze the data and return visualizations

### 2. View Dashboard

After upload:

- KPI cards show data statistics
- Charts render automatically based on backend response
- All charts are interactive

### 3. Filter Data

- Use the filter sidebar to filter by category columns
- Charts update in real-time
- Multiple filters can be applied
- Clear individual or all filters as needed

### 4. Export Charts

- Click the download button on any chart
- Charts export as high-resolution PNG images
- Exported files are timestamped

### 5. Upload New Data

- Click "Upload New File" to start fresh
- Previous data and charts are cleared

## API Integration

### Backend Response Format

The frontend expects the following response from `POST /api/upload`:

```json
{
  "columns": [
    {
      "name": "ColumnName",
      "type": "CATEGORY|NUMBER"
    }
  ],
  "charts": [
    {
      "chartType": "BAR|PIE|LINE",
      "xAxis": "ColumnName",
      "yAxis": "ColumnName"
    }
  ],
  "data": [
    {
      "ColumnName": "value"
    }
  ]
}
```

### API Service

All API calls are handled through `src/services/apiService.js`:

```javascript
import { uploadFile } from "./services/apiService";

const response = await uploadFile(file);
```

## Customization

### Styling

Modify `src/index.css` and `tailwind.config.js` to customize:

- Colors and gradients
- Dark/light theme
- Animations
- Spacing

### Chart Colors

Edit the `COLORS` array in `src/components/ChartRenderer.jsx`

### KPI Cards

Modify the `kpiCards` array in `src/components/KPISection.jsx`

## Error Handling

The application includes:

- File validation (size, format)
- API error handling with user-friendly messages
- Toast notifications for all actions
- Fallback UI for missing data

## Performance Optimizations

- Lazy component loading
- Memoized components
- Efficient data filtering
- Optimized chart rendering
- CSS transitions for smooth animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Charts not rendering

- Ensure backend is running on http://localhost:8080
- Check browser console for errors
- Verify API response format

### Upload fails

- Check file size (max 50MB)
- Ensure file format is CSV or XLSX
- Verify backend is accessible

### Styling issues

- Clear browser cache
- Rebuild with `npm run build`
- Check Tailwind CSS configuration

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues and questions:

1. Check the troubleshooting section
2. Review API integration requirements
3. Check browser console for errors
4. Contact the development team

## Version History

### v1.0.0

- Initial release
- Dashboard UI with upload functionality
- Dynamic chart rendering
- Data filtering
- KPI cards
- Chart export as PNG

---

**Made with ❤️ for data visualization enthusiasts**
