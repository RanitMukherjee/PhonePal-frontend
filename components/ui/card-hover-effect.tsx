"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CardHoverEffectItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface CardHoverEffectProps {
  items: CardHoverEffectItem[];
  className?: string;
  hoverBg?: string; // Optional prop for custom hover background
  iconContainer?: string; // Optional prop for custom icon container styling
}

export const CardHoverEffect = ({
  items,
  className,
  hoverBg = "bg-blue-800", // Default hover background
  iconContainer = "p-2 w-12 h-12 rounded-full bg-blue-700 mb-3 text-orange-500", // Default icon container styling
}: CardHoverEffectProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className={cn(
              "absolute inset-0 rounded-lg",
              hoverBg // Apply the custom hover background
            )}
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: hoveredIndex === idx ? 1 : 0,
              transition: { duration: 0.15 },
            }}
          />
          <div className="relative z-10 p-5 h-full w-full">
            <div className={cn(iconContainer)}>{item.icon}</div>
            <h3 className="font-semibold text-lg text-white mb-2">
              {item.title}
            </h3>
            <p className="text-orange-300 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};