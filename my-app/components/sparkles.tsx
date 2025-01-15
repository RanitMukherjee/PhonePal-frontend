"use client";
import React, { useRef, useEffect, useState } from "react";
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
  particleShape?: "circle" | "square";
  count?: number;
}) => {
  const {
    id,
    className,
    background = "transparent",
    minSize = 0.4,
    maxSize = 1,
    particleDensity = 100,
    particleColor = "#FFA500",
    speed = 1,
    particleShape = "circle",
    count,
  } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      setContext(ctx);
    }
  }, []);

  useEffect(() => {
    if (context) {
      const particles: Particle[] = [];

      const addParticle = (x: number, y: number) => {
        particles.push(new Particle(x, y));
      };

      const resize = () => {
        if (canvasRef.current) {
          canvasRef.current.width = window.innerWidth;
          canvasRef.current.height = window.innerHeight;
        }
      };

      const animate = () => {
        if (canvasRef.current) {
          context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

          for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw(context);
          }
        }

        requestAnimationFrame(animate);
      };

      const createParticles = () => {
        if (canvasRef.current) {
          const totalParticles = count || Math.floor(
            (canvasRef.current.width * canvasRef.current.height) / 10000 * particleDensity
          );

          for (let i = 0; i < totalParticles; i++) {
            const x = Math.random() * canvasRef.current.width;
            const y = Math.random() * canvasRef.current.height;
            addParticle(x, y);
          }
        }
      };

      class Particle {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;

        constructor(x: number, y: number) {
          this.x = x;
          this.y = y;
          this.size = Math.random() * (maxSize - minSize) + minSize;
          this.speedX = Math.random() * speed - speed / 2;
          this.speedY = Math.random() * speed - speed / 2;
        }

        update() {
          if (canvasRef.current) {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvasRef.current.width) {
              this.speedX = -this.speedX;
            }

            if (this.y < 0 || this.y > canvasRef.current.height) {
              this.speedY = -this.speedY;
            }
          }
        }

        draw(ctx: CanvasRenderingContext2D) {
          ctx.fillStyle = particleColor;
          ctx.beginPath();
          if (particleShape === "circle") {
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillRect(this.x, this.y, this.size, this.size);
          }
        }
      }

      resize();
      createParticles();
      animate();

      window.addEventListener("resize", () => {
        resize();
        createParticles();
      });
    }
  }, [context, particleDensity, minSize, maxSize, particleColor, speed, particleShape, count]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn("fixed inset-0 -z-10", className)}
      style={{
        background: background,
      }}
    />
  );
};

