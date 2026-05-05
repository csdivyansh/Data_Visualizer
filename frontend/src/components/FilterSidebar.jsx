import React, { useState } from "react";
import { ChevronDown, X, Filter } from "lucide-react";
import { getUniqueValues } from "../utils/dataUtils";

const FilterSidebar = ({ columns, data, onFilterChange, className = "" }) => {
  const [filters, setFilters] = useState({});
  const [expandedFilters, setExpandedFilters] = useState({});

  const handleFilterChange = (columnName, value) => {
    const newFilters = { ...filters, [columnName]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilter = (columnName) => {
    const newFilters = { ...filters };
    delete newFilters[columnName];
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearAllFilters = () => {
    setFilters({});
    onFilterChange({});
  };

  const toggleFilterExpand = (columnName) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [columnName]: !prev[columnName],
    }));
  };

  const categoryColumns =
    columns?.filter((col) => col.type === "CATEGORY") || [];

  return (
    <div
      className={`bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-4 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-blue-400" />
          <h3 className="font-semibold text-slate-100">Filters</h3>
        </div>
        {Object.keys(filters).length > 0 && (
          <button
            onClick={clearAllFilters}
            className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Filters */}
      {categoryColumns.length > 0 ? (
        <div className="space-y-3">
          {categoryColumns.map((column) => {
            const uniqueValues = getUniqueValues(data, column.name);
            const isExpanded = expandedFilters[column.name];
            const hasFilter = filters[column.name];

            return (
              <div key={column.name} className="space-y-2">
                <div
                  onClick={() => toggleFilterExpand(column.name)}
                  className="flex items-center justify-between p-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg cursor-pointer transition-colors group"
                >
                  <span className="text-sm font-medium text-slate-100">
                    {column.name}
                  </span>
                  <div className="flex items-center gap-2">
                    {hasFilter && (
                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded">
                        Active
                      </span>
                    )}
                    <ChevronDown
                      size={16}
                      className={`text-slate-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </div>
                </div>

                {isExpanded && (
                  <div className="pl-2 space-y-2 max-h-40 overflow-y-auto animate-slide-in">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={filters[column.name] || ""}
                      onChange={(e) =>
                        handleFilterChange(column.name, e.target.value)
                      }
                      className="w-full px-2 py-1.5 bg-slate-700 border border-slate-600 rounded text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />

                    <div className="space-y-1 text-xs">
                      {uniqueValues.slice(0, 5).map((value) => (
                        <label
                          key={value}
                          className="flex items-center gap-2 cursor-pointer group/item"
                        >
                          <input
                            type="checkbox"
                            checked={filters[column.name] === String(value)}
                            onChange={(e) =>
                              handleFilterChange(
                                column.name,
                                e.target.checked ? String(value) : "",
                              )
                            }
                            className="rounded"
                          />
                          <span className="text-slate-300 group-hover/item:text-slate-100">
                            {String(value).substring(0, 20)}
                          </span>
                        </label>
                      ))}
                    </div>

                    {uniqueValues.length > 5 && (
                      <p className="text-xs text-slate-500 italic">
                        +{uniqueValues.length - 5} more
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-8">
          <Filter size={24} className="text-slate-600 mx-auto mb-2" />
          <p className="text-xs text-slate-500">No filters available</p>
          <p className="text-xs text-slate-600 mt-1">
            Upload data to enable filtering
          </p>
        </div>
      )}

      {/* Active Filters Display */}
      {Object.keys(filters).length > 0 && (
        <div className="mt-4 pt-4 border-t border-slate-700 space-y-2">
          <p className="text-xs text-slate-400 font-semibold">Active Filters</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(filters).map(
              ([key, value]) =>
                value && (
                  <div
                    key={key}
                    className="flex items-center gap-1 px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-xs text-blue-300"
                  >
                    <span>
                      {key}: {String(value).substring(0, 15)}
                    </span>
                    <button
                      onClick={() => clearFilter(key)}
                      className="hover:text-blue-200"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ),
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSidebar;
