import { motion } from "framer-motion";

const logos = [
  { name: "Forbes", text: "Forbes" },
  { name: "CNBC", text: "CNBC" },
  { name: "Bloomberg", text: "Bloomberg" },
  { name: "Inc.", text: "Inc." },
  { name: "CNBC", text: "CNBC" },
];

const Logos = () => {
  return (
    <section className="py-12 sm:py-16 bg-background border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-8"
        >
          Trusted by growing teams and secure businesses worldwide
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-xl sm:text-2xl font-bold text-muted-foreground/60 hover:text-muted-foreground transition-colors"
              style={{
                fontFamily: logo.name === "Forbes" ? "Georgia, serif" : 
                            logo.name === "Inc." ? "Georgia, serif" : "inherit",
                fontStyle: logo.name === "Inc." ? "italic" : "normal",
              }}
            >
              {logo.name === "CNBC" && (
                <span className="flex items-center gap-1">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  {logo.text}
                </span>
              )}
              {logo.name !== "CNBC" && logo.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Logos;
