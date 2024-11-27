"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const SparklesCore = (props: {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  particleOffsetX?: number;
  particleOffsetY?: number;
  speed?: number;
}) => {
  const {
    id,
    className,
    background,
    minSize = 0.4,
    maxSize = 1,
    particleDensity = 100,
    particleColor = "#FFF",
    particleOffsetX = 0,
    particleOffsetY = 0,
    speed = 1,
  } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [particles, setParticles] = useState<any[]>([]);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      setContext(ctx);

      const handleResize = () => {
        if (canvas) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (context) {
      const canvas = context.canvas;
      const particleCount = Math.floor(
        (canvas.width * canvas.height) / particleDensity
      );
      const newParticles = [];

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width + particleOffsetX;
        const y = Math.random() * canvas.height + particleOffsetY;
        const size = Math.random() * (maxSize - minSize) + minSize;
        const weight = Math.random() * 2 - 0.5;
        const directionX = Math.random() * 2 - 1;
        const directionY = Math.random() * 2 - 1;

        newParticles.push({ x, y, size, weight, directionX, directionY });
      }

      setParticles(newParticles);
    }
  }, [
    context,
    minSize,
    maxSize,
    particleDensity,
    particleOffsetX,
    particleOffsetY,
  ]);

  useEffect(() => {
    if (context && particles.length > 0) {
      const animate = () => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);

        particles.forEach((particle) => {
          particle.x += particle.directionX * speed;
          particle.y += particle.directionY * speed;

          if (particle.x < 0 || particle.x > context.canvas.width) {
            particle.directionX *= -1;
          }
          if (particle.y < 0 || particle.y > context.canvas.height) {
            particle.directionY *= -1;
          }

          context.fillStyle = particleColor;
          context.beginPath();
          context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          context.fill();
        });

        animationFrameId.current = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
      };
    }
  }, [context, particles, particleColor, speed]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn("fixed inset-0 z-0", className)}
style={{
        background: background || "transparent",
      }}
    />
  );
};

