import React from "react";
import { BarChart3, Settings, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = ({ onMenuToggle, userName = "User" }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700 z-40 shadow-lg">
      <div className="h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left side - Logo and Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuToggle}
            className="p-2 rounded-lg hover:bg-slate-700 transition-colors lg:hidden"
          >
            <Menu size={20} className="text-slate-300" />
          </button>

          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
              <BarChart3 size={24} className="text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold gradient-text">
                Data Visualizer
              </h1>
              <p className="text-xs text-slate-400">Analytics Dashboard</p>
            </div>
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center gap-4">
          {/* Settings */}
          <button className="p-2 rounded-lg hover:bg-slate-700 transition-colors hidden sm:block text-slate-300 hover:text-slate-100">
            <Settings size={20} />
          </button>

          {/* User Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                {userName.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm font-medium text-slate-100 hidden sm:inline">
                {userName}
              </span>
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-xl overflow-hidden animate-slide-in">
                <div className="p-3 border-b border-slate-700">
                  <p className="text-sm font-semibold text-slate-100">
                    {userName}
                  </p>
                  <p className="text-xs text-slate-400">user@example.com</p>
                </div>

                <div className="py-2">
                  <button className="w-full px-4 py-2 text-left text-sm text-slate-300 hover:bg-slate-700 transition-colors flex items-center gap-2">
                    <Settings size={16} />
                    Settings
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-slate-300 hover:bg-slate-700 transition-colors flex items-center gap-2">
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
