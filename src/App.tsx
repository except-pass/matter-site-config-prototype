import { useState, useEffect } from "react";
import SiteConfigApp from "./pages/siteConfig/SiteConfigApp";
import HistoricalDataApp from "./pages/historicData/HistoricalDataApp";
import "./historical-data.css";

type AppView = "site-config" | "historical-data";

const STORAGE_KEY = "matter-app-active-view";

export default function App() {
  // Load initial view from localStorage, default to "site-config"
  const [activeView, setActiveView] = useState<AppView>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "site-config" || saved === "historical-data") {
      return saved;
    }
    return "site-config";
  });

  // Save to localStorage whenever activeView changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, activeView);
  }, [activeView]);

  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-300 flex flex-col shadow-sm">
        <div className="p-4 border-b border-slate-300">
          <h1 className="text-lg font-semibold text-slate-800">Matter App</h1>
        </div>

        <nav className="flex-1 p-3">
          <button
            onClick={() => setActiveView("site-config")}
            className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${
              activeView === "site-config"
                ? "bg-blue-50 text-blue-700 font-medium border border-blue-200"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">⚙️</span>
              <span>Site Config</span>
            </div>
          </button>

          <button
            onClick={() => setActiveView("historical-data")}
            className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
              activeView === "historical-data"
                ? "bg-blue-50 text-blue-700 font-medium border border-blue-200"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">📊</span>
              <span>Historical Data</span>
            </div>
          </button>
        </nav>

        <div className="p-4 border-t border-slate-300 text-xs text-slate-500">
          <div>Active: {activeView === "site-config" ? "Site Config" : "Historical Data"}</div>
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 overflow-auto">
        {activeView === "site-config" && <SiteConfigApp />}
        {activeView === "historical-data" && <HistoricalDataApp />}
      </main>
    </div>
  );
}
