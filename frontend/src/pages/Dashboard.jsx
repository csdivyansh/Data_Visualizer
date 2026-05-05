import React, { useState, useEffect } from "react";
import FileUpload from "../components/FileUpload";
import KPISection from "../components/KPISection";
import FilterSidebar from "../components/FilterSidebar";
import ChartRenderer from "../components/ChartRenderer";
import Toast from "../components/Toast";
import Loader from "../components/Loader";
import { uploadFile } from "../services/apiService";
import { filterDataByConditions, calculateKPIs } from "../utils/dataUtils";
import { useToast } from "../hooks/useCustom";

const Dashboard = () => {
  const [hasData, setHasData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const [columns, setColumns] = useState([]);
  const [charts, setCharts] = useState([]);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [kpis, setKpis] = useState(null);

  const [filters, setFilters] = useState({});

  const { toasts, addToast, removeToast } = useToast();

  // Handle file upload
  const handleFileUpload = async (file) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await uploadFile(file);

      // Validate response structure
      if (!response.columns || !response.data || !response.charts) {
        throw new Error("Invalid response structure from server");
      }

      // Set data
      setColumns(response.columns);
      setData(response.data);
      setCharts(response.charts);
      setFilteredData(response.data);

      // Calculate KPIs
      const kpiData = calculateKPIs(response.data, response.columns);
      setKpis({ ...kpiData, totalCharts: response.charts.length });

      setHasData(true);
      setSuccess(true);
      addToast("File uploaded successfully!", "success");

      // Reset success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      const errorMessage =
        err.message || "Failed to upload file. Please try again.";
      setError(errorMessage);
      addToast(errorMessage, "error");
      console.error("Upload error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    const filtered = filterDataByConditions(data, newFilters);
    setFilteredData(filtered);
  };

  // Render content based on state
  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <Loader size="lg" message="Processing your file..." />
        </div>
      );
    }

    if (!hasData) {
      return (
        <div className="h-screen pt-16">
          <FileUpload
            onFileUpload={handleFileUpload}
            loading={loading}
            error={error}
            success={success}
          />
        </div>
      );
    }

    // Dashboard view with data
    return (
      <div className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-100 mb-2">
              Dashboard
            </h2>
            <p className="text-slate-400">
              Visualize and analyze your data with AI-powered insights
            </p>
          </div>

          {/* KPI Section */}
          <KPISection kpis={kpis} data={filteredData} columns={columns} />

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <FilterSidebar
                columns={columns}
                data={data}
                onFilterChange={handleFilterChange}
              />
            </div>

            {/* Charts Grid */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {charts && charts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {charts.map((chartConfig, index) => (
                      <ChartRenderer
                        key={index}
                        chartConfig={chartConfig}
                        data={filteredData}
                        index={index}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-12 text-center">
                    <p className="text-slate-400">
                      No charts available for this data
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Upload New File Button */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => {
                setHasData(false);
                setData([]);
                setColumns([]);
                setCharts([]);
                setFilters({});
              }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Upload New File
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {renderContent()}

      {/* Toast Notifications */}
      {toasts.length > 0 && (
        <div className="fixed bottom-6 right-6 space-y-2 z-50 max-w-sm">
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              id={toast.id}
              message={toast.message}
              type={toast.type}
              onClose={removeToast}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Dashboard;
