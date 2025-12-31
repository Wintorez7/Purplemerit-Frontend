import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Space - User Management Platform | Manage Users Smarter and Securely</title>
        <meta
          name="description"
          content="A powerful platform to control user accounts, permissions, authentication, and access — all in one place. Trusted by 250K+ teams worldwide."
        />
        <meta name="keywords" content="user management, access control, authentication, RBAC, security, SSO, identity management" />
        <link rel="canonical" href="https://space-pm.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Logos />
          <Features />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
