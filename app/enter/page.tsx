"use client";

import { motion } from "motion/react";

export default function Enter() {
  return (
    <div className="flex items-center justify-center gap-10">
      <motion.div
        className="w-25 h-25 bg-red-500 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      />
    </div>
  );
}
