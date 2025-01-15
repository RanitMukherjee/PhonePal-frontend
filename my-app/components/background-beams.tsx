"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 opacity-50",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#1e3a8a,#1e3a8a_50%,#172554_100%)]" />
    </div>
  );
};

