
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <AdminSidebar/>

      <div className="ml-16 w-full bg-[#f8fafc] min-h-screen">
        <AdminNavbar />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
