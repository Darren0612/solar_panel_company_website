import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
import {
  Home,
  Package,
  Wrench,
  CreditCard,
  BarChart3,
  Leaf,
  User,
  HelpCircle,
  Sun,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { IconButton } from "@mui/material";

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/dashboard" },
  { icon: Package, label: "Subscription", path: "/dashboard/subscription" },
  { icon: Wrench, label: "Maintenance", path: "/dashboard/maintenance" },
  { icon: CreditCard, label: "Billing", path: "/dashboard/billing" },
  { icon: BarChart3, label: "Analytics", path: "/dashboard/analytics" },
  { icon: Leaf, label: "Green Impact", path: "/dashboard/green-impact" },
  { icon: User, label: "Profile", path: "/dashboard/profile" },
  { icon: HelpCircle, label: "Help Center", path: "/dashboard/help" },
];

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-40">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <IconButton
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              {sidebarOpen ? <X /> : <Menu />}
            </IconButton>
            <div className="flex items-center gap-2">
              <Sun className="w-8 h-8 text-orange-500" />
              <span className="text-xl font-bold text-gray-800">SolarRent</span>
            </div>
          </div>
          <IconButton onClick={handleLogout} title="Logout">
            <LogOut className="w-5 h-5" />
          </IconButton>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 bottom-0 w-64 bg-white shadow-lg transform transition-transform duration-300 z-30 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="pt-16 lg:pl-64">
        <div className="p-6">
          <Outlet />
        </div>
      </main>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
