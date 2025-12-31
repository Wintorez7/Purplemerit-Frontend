import { motion } from "framer-motion";
import { Users, Shield, Lock, BarChart3, Key, UserCheck } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Centralized User Directory",
    description: "Manage all user accounts with real-time control and automation.",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    icon: Shield,
    title: "Role-Based Access Control",
    description: "Assign roles & permissions to keep your system secure.",
    gradient: "from-blue-500/10 to-blue-500/5",
  },
  {
    icon: Lock,
    title: "Authentication & Security",
    description: "Support MFA, JWT, encrypted passwords and secure login.",
    gradient: "from-green-500/10 to-green-500/5",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Track user activity, login trends, and system engagement.",
    gradient: "from-orange-500/10 to-orange-500/5",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {features.slice(0, 2).map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className={`h-full rounded-3xl bg-gradient-to-br ${feature.gradient} p-8 sm:p-10 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-medium`}>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-base sm:text-lg mb-8">
                  {feature.description}
                </p>
                
                {/* Feature Illustration */}
                <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-soft border border-border/50">
                  {index === 0 ? (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-foreground">User Directory</span>
                        <span className="text-xs text-muted-foreground">2,450 users</span>
                      </div>
                      <div className="space-y-2">
                        {["Admin", "Manager", "Editor", "Viewer"].map((role, i) => (
                          <div key={role} className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary-light" />
                              <span className="text-sm text-foreground">{role}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">{[12, 45, 120, 890][i]} users</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-foreground">Role Permissions</span>
                        <div className="flex gap-2">
                          <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded">Admin</span>
                          <span className="text-xs text-primary font-medium">Full Access</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {["Read", "Write", "Delete", "Create", "Manage", "Export"].map((perm) => (
                          <div key={perm} className="flex items-center gap-1 p-2 bg-green-500/10 rounded-lg text-xs text-green-600">
                            <UserCheck size={12} />
                            {perm}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Key,
              title: "Single Sign-On",
              description: "Enable SSO with OAuth, SAML, and social login providers for seamless access.",
            },
            ...features.slice(2),
            {
              icon: UserCheck,
              title: "User Provisioning",
              description: "Automate user creation, updates, and deactivation with SCIM support.",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full rounded-2xl bg-card p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-soft">
                {/* Illustration */}
                <div className="h-32 mb-6 flex items-center justify-center bg-muted/50 rounded-xl overflow-hidden">
                  <feature.icon className="w-16 h-16 text-primary/40 group-hover:text-primary/60 transition-colors" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
