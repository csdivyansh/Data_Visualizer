import React from "react";
import { X, AlertCircle, CheckCircle, Info } from "lucide-react";

const Toast = ({ id, message, type = "info", onClose }) => {
  const icons = {
    success: <CheckCircle size={18} className="text-green-400" />,
    error: <AlertCircle size={18} className="text-red-400" />,
    info: <Info size={18} className="text-blue-400" />,
  };

  const colors = {
    success: "bg-green-500/10 border-green-500/50 text-green-100",
    error: "bg-red-500/10 border-red-500/50 text-red-100",
    info: "bg-blue-500/10 border-blue-500/50 text-blue-100",
  };

  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${colors[type]} backdrop-blur-sm animate-slide-in`}
    >
      {icons[type]}
      <span className="text-sm font-medium flex-1">{message}</span>
      <button
        onClick={() => onClose(id)}
        className="text-slate-400 hover:text-slate-200 transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default Toast;
