import { Home, Users, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menu = [
  { icon: <Home size={22} />, path: "/admin/dashboard" },
  { icon: <Users size={22} />, path: "/admin/users" },
  { icon: <Settings size={22} />, path: "/admin/settings" },
];

export default function AdminSidebar() {
  const { pathname } = useLocation();

  return (
    <div className="w-16 h-screen bg-white border-r flex flex-col items-center py-6 gap-6 shadow-sm fixed">
      {menu.map((item) => (
        <Link key={item.path} to={item.path}
          className={`p-3 rounded-lg transition ${
            pathname === item.path ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
