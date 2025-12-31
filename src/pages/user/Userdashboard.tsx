import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const userdashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-950/40 text-white">
      <div className="bg-purple-900/40 p-8 rounded-xl shadow-xl border border-purple-700 w-[90%] max-w-md text-center space-y-6">
        <h1 className="text-3xl font-bold">User Dashboard</h1>
        <p className="text-purple-300">Welcome User 🎉</p>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default userdashboard;