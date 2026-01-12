"use client";
import React, { useId, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, SingleOrMultiple } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "motion/react";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;

  const [init, setInit] = useState(false);
  const controls = useAnimation();
  const generatedId = useId();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      controls.start({ opacity: 1, transition: { duration: 1 } });
    }
  };

  return (
    <motion.div
      animate={controls}
      className={cn("absolute inset-0 w-full h-full opacity-0", className)}
    >
      {init && (
        <Particles
          id={id || generatedId}
          className="w-full h-full"
          // canvasClassName="w-full h-full"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: { value: background || "transparent" },
            },
            fullScreen: { enable: false },

            particles: {
              number: {
                value: particleDensity || 120,
                density: { enable: true },
              },
              color: { value: particleColor || "#ffffff" },
              size: {
                value: { min: minSize || 1, max: maxSize || 3 },
              },
              opacity: {
                value: { min: 0.2, max: 1 },
                animation: {
                  enable: true,
                  speed: speed || 3,
                  sync: false,
                },
              },
              move: {
                enable: true,
                speed: { min: 0.2, max: 1 },
              },
              shape: { type: "circle" },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};
