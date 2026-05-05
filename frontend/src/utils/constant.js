// Chart type constants
export const CHART_TYPES = {
  BAR: "BAR",
  PIE: "PIE",
  LINE: "LINE",
  AREA: "AREA",
  SCATTER: "SCATTER",
};

// Column type constants
export const COLUMN_TYPES = {
  CATEGORY: "CATEGORY",
  NUMBER: "NUMBER",
  DATE: "DATE",
  TEXT: "TEXT",
};

// API constants
export const API_BASE_URL =
  process.env.VITE_API_BASE_URL || "http://localhost:8080/api";

export const API_ENDPOINTS = {
  UPLOAD: "/upload",
};

// UI constants
export const TOAST_DURATION = {
  SHORT: 2000,
  MEDIUM: 3000,
  LONG: 5000,
  PERSISTENT: 0,
};

export const CHART_COLORS = [
  "#0ea5e9", // blue
  "#06b6d4", // cyan
  "#10b981", // emerald
  "#f59e0b", // amber
  "#ef4444", // red
  "#8b5cf6", // purple
  "#ec4899", // pink
  "#14b8a6", // teal
  "#f97316", // orange
  "#6366f1", // indigo
];

// Breakpoints
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  "2XL": 1536,
};

// File upload constants
export const FILE_UPLOAD = {
  MAX_SIZE: 50 * 1024 * 1024, // 50MB
  ACCEPTED_FORMATS: ["csv", "xlsx", "xls"],
  MIME_TYPES: {
    "text/csv": [".csv"],
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
      ".xlsx",
    ],
    "application/vnd.ms-excel": [".xls"],
  },
};

// Error messages
export const ERROR_MESSAGES = {
  UPLOAD_FAILED: "Failed to upload file. Please try again.",
  INVALID_FILE_FORMAT:
    "Invalid file format. Please upload CSV or XLSX files only.",
  FILE_TOO_LARGE: "File size exceeds the maximum limit of 50MB.",
  SERVER_ERROR: "Server error. Please try again later.",
  NETWORK_ERROR: "Network error. Please check your connection.",
  INVALID_RESPONSE: "Invalid response from server.",
};

// Success messages
export const SUCCESS_MESSAGES = {
  UPLOAD_SUCCESS: "File uploaded successfully!",
  EXPORT_SUCCESS: "Chart exported successfully!",
  FILTER_APPLIED: "Filter applied successfully!",
};