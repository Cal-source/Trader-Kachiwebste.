"use client";

import { motion } from "framer-motion";

export function ServiceCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="p-6 rounded-2xl bg-white/5 border border-white/10"
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-400 mt-2">{desc}</p>
    </motion.div>
  );
}
