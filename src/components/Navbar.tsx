import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Features", link: "#features" },
    { name: "Customer", link: "#customer" },
    { name: "Pricing", link: "#pricing" },
    { name: "Blog", link: "#blog" },
  ];

  return (
    <>
      {/* Announcement Bar */}
      {/* <div className="gradient-primary text-primary-foreground py-2.5 px-4 text-center text-sm">
        <span className="inline-flex items-center gap-2 flex-wrap justify-center">
          <span className="bg-card text-foreground px-3 py-0.5 rounded-full text-xs font-semibold">
            Limited
          </span>
          <span className="hidden sm:inline">All plans are</span>
          <span className="bg-card/20 text-primary-foreground px-2 py-0.5 rounded-md font-bold">
            30% OFF
          </span>
          <span className="hidden sm:inline">for the next 7 days.</span>
          <a
            href="#"
            className="font-semibold underline underline-offset-2 hover:no-underline transition-all"
          >
            Claim Discount
          </a>
        </span>
      </div> */}

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo -> Redirect to Home */}
            <Link to="/" className="flex items-center gap-2">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <span className="text-xl font-bold text-foreground">Space</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) =>
                item.link.startsWith("#") ? (
                  <a
                    key={item.name}
                    href={item.link}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>

            {/* CTA Login Button */}
            <div className="hidden space-x-6 lg:block">
              <Link
                to="/login"
                className="text-purple-400 hover:text-purple-300 font-medium"
              >
                Login
              </Link>
              <Link
                  to="/signup"
                  className="text-purple-400 hover:text-purple-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Sigup
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border bg-background"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                {menuItems.map((item) =>
                  item.link.startsWith("#") ? (
                    <a
                      key={item.name}
                      href={item.link}
                      className="text-muted-foreground hover:text-foreground transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.link}
                      className="text-muted-foreground hover:text-foreground transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                )}

                <Link
                  to="/login"
                  className="text-purple-400 hover:text-purple-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-purple-400 hover:text-purple-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Sigup
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
