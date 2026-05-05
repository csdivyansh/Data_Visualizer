import React from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Download } from "lucide-react";
import { downloadChartAsPNG } from "../utils/exportUtils";
import { useState } from "react";

const COLORS = [
  "#0ea5e9",
  "#06b6d4",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#ec4899",
];

const ChartRenderer = ({ chartConfig, data, index, onExport }) => {
  const [isExporting, setIsExporting] = useState(false);

  if (!chartConfig || !data || data.length === 0) {
    return null;
  }

  const { chartType, xAxis, yAxis } = chartConfig;
  const chartId = `chart-${index}`;
  const chartTitle = `${chartType} Chart - ${xAxis} vs ${yAxis}`;

  const handleExport = async () => {
    try {
      setIsExporting(true);
      await downloadChartAsPNG(chartId, `${chartType}-chart`);
    } catch (error) {
      console.error("Export failed:", error);
    } finally {
      setIsExporting(false);
    }
  };

  const renderChart = () => {
    const chartData = data.map((item) => ({
      name: item[xAxis],
      value: parseFloat(item[yAxis]) || 0,
      [xAxis]: item[xAxis],
      [yAxis]: parseFloat(item[yAxis]) || 0,
    }));

    switch (chartType.toUpperCase()) {
      case "BAR":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis
                dataKey="name"
                stroke="#94a3b8"
                angle={-45}
                textAnchor="end"
                height={100}
              />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #475569",
                }}
                cursor={{ fill: "rgba(14, 165, 233, 0.1)" }}
              />
              <Legend wrapperStyle={{ paddingTop: "20px" }} />
              <Bar
                dataKey="value"
                fill="#0ea5e9"
                radius={[8, 8, 0, 0]}
                name={yAxis}
              />
            </BarChart>
          </ResponsiveContainer>
        );

      case "PIE":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #475569",
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );

      case "LINE":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis
                dataKey="name"
                stroke="#94a3b8"
                angle={-45}
                textAnchor="end"
                height={100}
              />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #475569",
                }}
                cursor={{ fill: "rgba(14, 165, 233, 0.1)" }}
              />
              <Legend wrapperStyle={{ paddingTop: "20px" }} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#0ea5e9"
                dot={{ fill: "#0ea5e9", r: 5 }}
                activeDot={{ r: 7 }}
                strokeWidth={2}
                name={yAxis}
              />
            </LineChart>
          </ResponsiveContainer>
        );

      default:
        return (
          <div className="text-slate-400">
            Unsupported chart type: {chartType}
          </div>
        );
    }
  };

  return (
    <div
      id={chartId}
      className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-all duration-300 group"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-100">{chartTitle}</h3>
          <p className="text-xs text-slate-400 mt-1">
            {data.length} records • {chartType} visualization
          </p>
        </div>
        <button
          onClick={handleExport}
          disabled={isExporting}
          className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/50 hover:bg-blue-500/30 transition-colors text-blue-400 hover:text-blue-300 disabled:opacity-50"
          title="Download as PNG"
        >
          <Download size={18} />
        </button>
      </div>

      {/* Chart */}
      <div className="bg-slate-900/50 rounded-lg p-4 overflow-x-auto">
        {renderChart()}
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
        <div>
          <span className="text-slate-400">Axis:</span>
          <span className="ml-2 text-slate-300">
            X: {xAxis} • Y: {yAxis}
          </span>
        </div>
        <button
          onClick={handleExport}
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          Export PNG
        </button>
      </div>
    </div>
  );
};

export default ChartRenderer;