import React from "react";
import {
  ChevronLeft,
  Home,
  BarChart3,
  Settings,
  HelpCircle,
  X,
} from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: Home, label: "Dashboard", href: "#", active: true },
    { icon: BarChart3, label: "Analytics", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
    { icon: HelpCircle, label: "Help", href: "#" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 h-screen w-64 bg-gradient-to-b from-slate-800 to-slate-900 border-r border-slate-700 transition-transform duration-300 z-40 overflow-y-auto lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6">
          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="lg:hidden absolute top-4 right-4 p-2 hover:bg-slate-700 rounded-lg"
          >
            <X size={20} className="text-slate-300" />
          </button>

          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
            Menu
          </h2>

          {/* Menu Items */}
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  item.active
                    ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-700/50"
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Footer Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-700 bg-gradient-to-t from-slate-900 to-transparent">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-center">
            <p className="text-xs text-slate-400 mb-2">Version</p>
            <p className="text-sm font-semibold text-slate-100">1.0.0</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
