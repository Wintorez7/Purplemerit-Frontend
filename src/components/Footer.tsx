import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook, Twitter, ArrowRight } from "lucide-react";

const footerLinks = {
  Resources: [
    "Company and team",
    "News and blog",
    "Investor relations",
    "Modern statement",
    "Affiliates partnerships",
  ],
  Product: ["Find Job", "Find Companies", "I'M a company"],
  Support: ["Support", "Contact", "Cookies"],
};

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Logo & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <span className="text-xl font-bold text-foreground">Space</span>
            </a>

            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Get update our
              <br />
              Newssletter
            </h3>

            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-card border-border/50 rounded-xl h-12"
              />
              <Button variant="hero" size="icon" className="h-12 w-12 rounded-xl shrink-0">
                <ArrowRight size={18} />
              </Button>
            </div>
          </motion.div>

          {/* Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([title, links], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4 className="font-semibold text-foreground mb-4">{title}</h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-border/50"
        >
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              <Twitter size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            ©Ofspace LLC 2024. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
