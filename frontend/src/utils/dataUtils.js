export const filterDataByConditions = (data, filters) => {
  if (!filters || Object.keys(filters).length === 0) {
    return data;
  }

  return data.filter((row) => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true;

      const rowValue = String(row[key]).toLowerCase();
      const filterValue = String(value).toLowerCase();

      return rowValue.includes(filterValue);
    });
  });
};

export const getUniqueValues = (data, columnName) => {
  if (!Array.isArray(data) || !columnName) return [];

  const unique = [...new Set(data.map((row) => row[columnName]))];
  return unique.filter((val) => val !== null && val !== undefined);
};

export const calculateKPIs = (data, columns) => {
  const totalRows = data?.length || 0;

  const numericalColumns =
    columns?.filter((col) => col.type === "NUMBER") || [];
  const categoryColumns =
    columns?.filter((col) => col.type === "CATEGORY") || [];

  return {
    totalRows,
    totalNumericalColumns: numericalColumns.length,
    totalCategoryColumns: categoryColumns.length,
  };
};

export const isValidChartData = (chartConfig, data, columns) => {
  if (!chartConfig || !data || data.length === 0) return false;

  const { xAxis, yAxis } = chartConfig;

  // Check if axes exist in columns
  const columnsMap = columns?.reduce((acc, col) => {
    acc[col.name] = col.type;
    return acc;
  }, {});

  return columnsMap && columnsMap[xAxis] && columnsMap[yAxis];
};

export const parseChartData = (data, xAxis, yAxis) => {
  if (!Array.isArray(data)) return [];

  return data.map((item) => ({
    name: item[xAxis],
    value: parseFloat(item[yAxis]) || 0,
    [xAxis]: item[xAxis],
    [yAxis]: parseFloat(item[yAxis]) || 0,
  }));
};

export const getColumnStats = (data, columnName, columnType) => {
  if (!Array.isArray(data) || data.length === 0) return null;

  const values = data.map((row) => row[columnName]);

  if (columnType === "NUMBER") {
    const numValues = values.filter((v) => !isNaN(v)).map(Number);
    return {
      min: Math.min(...numValues),
      max: Math.max(...numValues),
      avg: numValues.reduce((a, b) => a + b, 0) / numValues.length,
    };
  }

  if (columnType === "CATEGORY") {
    const counts = values.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
    return { counts };
  }

  return null;
};
