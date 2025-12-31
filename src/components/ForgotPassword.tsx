import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

type ForgotPasswordResponse = {
  success: boolean;
  message: string;
};

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post<ForgotPasswordResponse>(
        "https://purplemerit-backend-4r33.onrender.com/api/password/forgot-password",
        { email }
      );

      if (res.data.success) {
        toast.success("OTP sent successfully!");
        navigate("/verify-otp", { state: { email } });
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="email" className="block text-sm text-purple-200 mb-1">
          Email address*
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-purple-900/50 text-white placeholder-purple-400
          focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold
        transition disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send OTP"}
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
