import React from "react";
import { motion } from "framer-motion";

export function ThreeDCardDemo() {
  return (
    <motion.div
      className="w-full max-w-sm"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-xl">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-100 mb-2">Our Journey</h3>
          <p className="text-gray-400 mb-4">Milestones in our AI revolution</p>
          <ul className="space-y-2 text-gray-300">
            <li>2020: Founded with a vision</li>
            <li>2021: Launch of first AI product</li>
            <li>2022: Expansion to global markets</li>
            <li>2023: Breakthrough in NLP technology</li>
            <li>2024: Partnerships with Fortune 500 companies</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

