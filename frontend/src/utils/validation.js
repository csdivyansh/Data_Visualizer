// Validation utility functions

export const validateFile = (file) => {
  if (!file) {
    return { valid: false, error: "No file provided" };
  }

  const validExtensions = ["csv", "xlsx", "xls"];
  const fileExtension = file.name.split(".").pop().toLowerCase();

  if (!validExtensions.includes(fileExtension)) {
    return {
      valid: false,
      error: `Invalid file format. Supported formats: ${validExtensions.join(", ")}`,
    };
  }

  const maxSize = 50 * 1024 * 1024; // 50MB
  if (file.size > maxSize) {
    return {
      valid: false,
      error: `File size exceeds maximum limit of 50MB (Current: ${(file.size / 1024 / 1024).toFixed(2)}MB)`,
    };
  }

  return { valid: true, error: null };
};

export const validateChartConfig = (chartConfig) => {
  if (!chartConfig) return false;

  const { chartType, xAxis, yAxis } = chartConfig;
  return !!(chartType && xAxis && yAxis);
};

export const validateColumnData = (data, columnName) => {
  return (
    Array.isArray(data) &&
    data.length > 0 &&
    data.every((row) => columnName in row)
  );
};

export const validateAPIResponse = (response) => {
  const hasColumns =
    Array.isArray(response.columns) && response.columns.length > 0;
  const hasData = Array.isArray(response.data) && response.data.length > 0;
  const hasCharts = Array.isArray(response.charts);

  return {
    valid: hasColumns && hasData && hasCharts,
    errors: {
      columns: !hasColumns ? "Missing or invalid columns" : null,
      data: !hasData ? "Missing or invalid data" : null,
      charts: !hasCharts ? "Missing or invalid charts" : null,
    },
  };
};

export const isValidNumber = (value) => {
  return typeof value === "number" && !isNaN(value) && isFinite(value);
};

export const isValidString = (value) => {
  return typeof value === "string" && value.trim().length > 0;
};
