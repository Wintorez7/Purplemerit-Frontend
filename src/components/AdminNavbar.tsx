import { Search } from "lucide-react";

export default function AdminNavbar() {
  return (
    <div className="h-16 bg-white shadow-sm border-b flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-80 gap-2">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search users..."
          className="bg-transparent outline-none text-sm"
        />
      </div>

      <div className="flex items-center gap-3">
        <img
          src="https://ui-avatars.com/api/?name=Admin"
          className="w-9 h-9 rounded-full border"
        />
        <p className="font-medium text-gray-700">Admin</p>
      </div>
    </div>
  );
}
