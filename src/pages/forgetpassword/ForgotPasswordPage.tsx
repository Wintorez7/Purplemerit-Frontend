import ForgotPassword from "@/components/ForgotPassword"
import Navbar from "@/components/Navbar";


const ForgotPasswordPage = () => {
  return (
   <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-purple-950/40 text-white overflow-hidden">
      {/* Navbar */}
      <div className="absolute top-0 w-full">
        <Navbar />
      </div>

     <ForgotPassword/>
    </div>
  )
}

export default ForgotPasswordPage