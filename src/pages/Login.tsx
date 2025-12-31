import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import Loading from "@/components/Loading";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = "https://purplemerit-backend-4r33.onrender.com/api/auth";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try { 
      const res = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Invalid email or password");
        setLoading(false);
        return;
      }

      localStorage.setItem("token", data.accessToken);
      toast.success("Login successful!");

      if (data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-purple-950/40">
        <Loading/>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-purple-950/40 text-white overflow-hidden">
      {/* Navbar */}
      <div className="absolute top-0 w-full">
        <Navbar />
      </div>

      {/* Background Glow */}
      <div className="absolute -z-10 w-[700px] h-[700px] bg-purple-700/20 blur-[150px] rounded-full top-40"></div>

      {/* Auth Card */}
      <Card className="w-[90%] max-w-md border-purple-800/30 bg-purple-950/40 backdrop-blur-sm shadow-lg shadow-purple-900/40">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold text-white">
            Sign In
          </CardTitle>
          <CardDescription className="text-purple-300">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-purple-200">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-purple-900/40 border-purple-700/50 text-white placeholder:text-purple-400 focus-visible:ring-purple-500"
                required
                disabled={loading}
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-purple-200">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-purple-900/40 border-purple-700/50 text-white placeholder:text-purple-400 focus-visible:ring-purple-500"
                required
                disabled={loading}
              />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>

            <div className="text-center text-sm text-purple-300">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-purple-400 hover:text-purple-300 font-medium"
              >
                Sign up
              </Link>
            </div>

            <Link
              to="/forgetpassword"
              className="text-purple-400 hover:text-purple-300 font-medium text-center"
            >
              Forgot Password?
            </Link>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
