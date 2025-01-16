"use client";

import { useEffect, useMemo } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  staggerDelay?: number;
}

export const TextGenerateEffect = ({
  words,
  className,
  staggerDelay = 0.2,
}: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();
  const wordsArray = useMemo(() => words.split(" "), [words]);

  useEffect(() => {
    const animation = animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(staggerDelay),
      }
    );

    return () => animation.stop(); // Cleanup animation on unmount
  }, [animate, scope, staggerDelay]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="opacity-0 inline-block"
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
