import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Amit Verma",
    role: "CTO at TechVision Ltd.",
    content: "Managing users is now effortless, secure, and scalable for our team. The automation features saved us countless hours!",
    avatar: "AV",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Security Lead at CloudBase",
    content: "The role-based access control is exactly what we needed. We reduced unauthorized access incidents by 95% within the first month.",
    avatar: "SM",
  },
  {
    id: 3,
    name: "David Chen",
    role: "IT Director at FinanceHub",
    content: "SSO integration was seamless. Our 5,000+ employees now have secure, one-click access to all our internal tools.",
    avatar: "DC",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="customer" className="py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Voices of Satisfaction What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Elevate your experience with a suite of unparalleled and contemporary features, setting us apart as a provider of unique and modern solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <Button variant="hero" size="default">
            All Testimonial
          </Button>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10"
            >
              {/* Avatar and Controls */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-primary-foreground text-xl font-bold shadow-medium">
                  {testimonials[current].avatar}
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-foreground">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[current].role}
                  </p>
                </div>
                {/* Navigation */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={prev}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-full border border-border hover:border-foreground/30"
                  >
                    <ChevronLeft size={14} />
                    Prev
                  </button>
                  <button
                    onClick={next}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-full border border-border hover:border-foreground/30"
                  >
                    Next
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>

              {/* Quote */}
              <div className="flex-1">
                <blockquote className="text-xl sm:text-2xl text-foreground leading-relaxed">
                  "{testimonials[current].content}"
                </blockquote>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-primary w-6"
                    : "bg-border hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
