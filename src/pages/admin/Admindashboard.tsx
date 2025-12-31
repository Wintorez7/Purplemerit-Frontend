import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { MoreVertical } from "lucide-react";

interface UserType {
  _id: string;
  fullName: string;
  email: string;
  role: string;
  avatar?: string;
  isActive: boolean;
  lastLogin?: string;
}
interface UsersResponse {
  users: UserType[];
  totalPages: number;
}
const AdminDashboard = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
     const { data } = await axios.get<UsersResponse>(
        `https://purplemerit-backend-4r33.onrender.com/api/users/all?page=${page}&limit=10`
      );
      setUsers(data.users);
      setTotalPages(data.totalPages);
    } catch {
      toast.error("Failed to load users");
    }
    setLoading(false);
  };

  const handleStatus = async (id: string, status: boolean) => {
    const confirm = window.confirm(
      `Are you sure you want to ${status ? "activate" : "deactivate"} this user?`
    );
    if (!confirm) return;

    try {
      await axios.patch(
        `https://purplemerit-backend-4r33.onrender.com/api/users/update-status/${id}`,
        { isActive: status }
      );

      toast.success(`User ${status ? "activated" : "deactivated"}!`);
      fetchUsers();
    } catch {
      toast.error("Action failed");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  return (
    <div className="p-6 bg-[#f8fafc] h-screen overflow-auto">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 text-gray-600 text-sm">
            <tr>
              <th className="p-3 text-left">Users</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Last Login</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="text-center py-4">
                  Loading users...
                </td>
              </tr>
            ) : users.map((user) => (
              <tr key={user._id} className="border-b hover:bg-gray-50">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={user.avatar || `https://ui-avatars.com/api/?name=${user.fullName}`}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{user.fullName}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </td>

                <td className="p-3">
                  <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                    {user.role}
                  </span>
                </td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${user.isActive
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-200 text-gray-600"}
                    `}
                  >
                    {user.isActive ? "Active" : "Inactive"}
                  </span>
                </td>

                <td className="p-3 text-sm text-gray-600">
                  {user.lastLogin ? new Date(user.lastLogin).toDateString() : "-"}
                </td>

                <td className="p-3 text-center">
                  <button
                    onClick={() => handleStatus(user._id, !user.isActive)}
                    className="text-gray-600 hover:text-black transition"
                  >
                    <MoreVertical size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center gap-3">
        <button
          disabled={page <= 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="px-4 py-2">
          {page} / {totalPages}
        </span>

        <button
          disabled={page >= totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
