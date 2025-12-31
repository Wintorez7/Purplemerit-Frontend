import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loading from "@/components/Loading";

export default function Signup() {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user"); // NEW ROLE STATE
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = "https://purplemerit-backend-4r33.onrender.com/api/auth";

  const handleSignup = async (e: React.FormEvent) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    return toast.error("Passwords do not match!");
  }

  setLoading(true);

  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullname,
        email,
        password,
        role,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
    if (response.status === 409) {
        toast.error("User already exists! Please login.");
    } else {
        toast.error(data.message || "Registration failed");
    }
    setLoading(false);
    return;
    }


    toast.success("Account created successfully!");

    // Clear form values
    setFullname("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    // Delay redirect to show success toast
    setTimeout(() => {
      navigate("/login");
    }, 1000);

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
      <div className="absolute top-0 w-full">
        <Navbar />
      </div>

      <div className="absolute -z-10 w-[700px] h-[700px] bg-purple-700/20 blur-[150px] rounded-full top-40"></div>

      <Card className="w-[90%] max-w-md bg-purple-950/40 backdrop-blur-sm border-purple-800/30 shadow-lg shadow-purple-900/40 mt-10">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-bold text-white">
            Create Account
          </CardTitle>
          <CardDescription className="text-purple-300">
            Enter your details to get started
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSignup}>
          <CardContent className="space-y-4">
            {/* Fullname */}
            <div>
              <Label htmlFor="fullname" className="text-purple-200">
                Full Name
              </Label>
              <Input
                id="fullname"
                type="text"
                placeholder="John Doe"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                disabled={loading}
                required
                className="bg-purple-900/40 border-purple-700/50 text-white placeholder-purple-400"
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-purple-200">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
                className="bg-purple-900/40 border-purple-700/50 text-white placeholder-purple-400"
              />
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password" className="text-purple-200">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                minLength={6}
                required
                className="bg-purple-900/40 border-purple-700/50 text-white placeholder-purple-400"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <Label htmlFor="confirmPassword" className="text-purple-200">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loading}
                required
                className="bg-purple-900/40 border-purple-700/50 text-white placeholder-purple-400"
              />
            </div>

            {/* NEW ROLE DROPDOWN */}
            <div>
              <Label htmlFor="role" className="text-purple-200">
                Select Role
              </Label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-3 rounded-lg bg-purple-900/40 text-white border border-purple-700/50
                focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 transition-colors"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </Button>

            <p className="text-center text-sm text-purple-300">
              Already have an account?{" "}
              <Link to="/login" className="text-purple-400 hover:text-purple-300 font-medium">
                Sign In
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
