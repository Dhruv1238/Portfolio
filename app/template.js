// /app/template.tsx
"use client";

import { motion } from "framer-motion";

export default function Template({ children }) {
 return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: -0, opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
 );
}
