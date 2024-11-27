"use client";

import { useEffect, useState } from "react";

interface TypewriterEffectProps {
  text: string;
  className?: string;
}

export function TypewriterEffect({ text, className = "" }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <p className={className}>{displayText}</p>;
}

