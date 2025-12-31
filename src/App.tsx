import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import ForgotPasswordPage from "./pages/forgetpassword/ForgotPasswordPage";
import Login from "./pages/Login";
import AdminUsers from "./pages/admin/AdminUsers";


import Admindashboard from "./pages/admin/admindashboard";
import UserDashboard from "./pages/user/userdashboard";


const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup/>} />
            {/* catch-all route should be last */}
            <Route path="*" element={<NotFound />} />
            <Route path="/forgetpassword" element={<ForgotPasswordPage />} />
            {/* <Route path="/verify-otp" element={<VerifyOtp />} /> */}
            <Route path="/admin/dashboard" element={<Admindashboard/>} />
            <Route path="/user/dashboard" element={<UserDashboard/>} />
            <Route path="/admin/users" element={<AdminUsers />} />

          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
