import React from "react";
import { BarChart3, Layers, Grid, Database } from "lucide-react";

const KPISection = ({ kpis, data, columns }) => {
  if (!kpis) return null;

  const kpiCards = [
    {
      icon: Database,
      label: "Total Rows",
      value: kpis.totalRows || 0,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: Grid,
      label: "Numerical Columns",
      value: kpis.totalNumericalColumns || 0,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
    },
    {
      icon: Layers,
      label: "Category Columns",
      value: kpis.totalCategoryColumns || 0,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
    },
    {
      icon: BarChart3,
      label: "Charts Generated",
      value: data?.length || 0,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {kpiCards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div
            key={index}
            className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`p-3 bg-gradient-to-br ${card.bgColor} rounded-lg group-hover:scale-110 transition-transform`}
              >
                <Icon size={24} className="text-slate-100" />
              </div>
              <div
                className={`text-xs font-semibold bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}
              >
                Latest
              </div>
            </div>
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">
                {card.label}
              </p>
              <p className="text-3xl font-bold text-slate-100">
                {card.value.toLocaleString()}
              </p>
            </div>
            <div className="mt-4 h-1 bg-slate-700 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${card.color} w-3/4`}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KPISection;
