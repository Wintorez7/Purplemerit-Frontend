import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plus, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-8">
        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-primary-foreground text-xs font-semibold"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">250K+</span> Teams trust us with user management
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            Manage Users{" "}
            <span className="text-gradient">Smarter, Faster, and Securely</span>
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            A powerful platform to control user accounts, permissions, authentication, and access — all in one place.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button variant="hero" size="lg" className="w-full sm:w-auto">
            <Plus size={18} />
            Join with us
          </Button>
          <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
            <Play size={16} />
            Preview Growth
          </Button>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-large border border-border/50 bg-card">
            <img
              src={heroDashboard}
              alt="Space User Management Dashboard"
              className="w-full h-auto"
            />
            {/* Glass Overlay Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 glass-card rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-medium hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-foreground">Active Users</span>
                <span className="text-lg sm:text-xl font-bold text-foreground">2.4K</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">12% increase this week</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 glass-card rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-medium hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs sm:text-sm font-medium text-foreground">Secure Logins</span>
                <span className="text-lg sm:text-xl font-bold text-foreground">99.9%</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">MFA enabled accounts</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
