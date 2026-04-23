import React from "react";
import { motion } from "framer-motion";

export default function FeatureCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative bg-card border border-border rounded-xl p-6 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
    >
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/50 transition-all duration-500" />

      <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
        <Icon className="w-5 h-5 text-accent" />
      </div>

      <h4 className="font-serif font-semibold text-foreground text-base mb-2">
        {title}
      </h4>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
