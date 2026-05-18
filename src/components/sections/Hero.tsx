"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(10,132,255,0.2),_transparent_60%)]" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Trade Smarter. Build Wealth. <br />
          <span className="text-primary">With Trader Kachi</span>
        </h1>

        <p className="text-gray-400 mt-6 text-lg">
          Join an elite forex mentorship system designed to turn beginners
          into consistent, disciplined traders.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex gap-4 justify-center">
          <button className="bg-primary px-6 py-3 rounded-xl font-medium hover:scale-105 transition">
            Join Community
          </button>

          <button className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/5 transition">
            Learn More
          </button>
        </div>

        {/* Trust Line */}
        <p className="text-xs text-gray-500 mt-6">
          Trusted by upcoming traders across Nigeria & beyond
        </p>
      </motion.div>
    </section>
  );
}
