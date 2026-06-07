"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const variants = {
    primary: "bg-accent text-black border-accent hover:bg-transparent hover:text-accent shadow-[0_0_20px_rgba(185,226,250,0.3)]",
    secondary: "bg-surface text-primary-text border-surface hover:bg-transparent hover:border-secondary-text",
    outline: "bg-transparent text-primary-text border-white/20 hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(185,226,250,0.1)]",
  };

  return (
    <button
      className={cn(
        "relative px-8 py-4 text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 border group overflow-hidden",
        variants[variant],
        className
      )}
      {...props}
    >
      <div className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </div>
      
      {/* FFXV style hover line animation */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      <div className="absolute top-0 right-0 w-[1px] h-full bg-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
    </button>
  );
}

export function Section({ id, className, children, container = true }: { id?: string; className?: string; children: React.ReactNode; container?: boolean }) {
  return (
    <section id={id} className={cn("py-24 md:py-40 relative", className)}>
      {container ? (
        <div className="container mx-auto px-6 md:px-12">
          {children}
        </div>
      ) : children}
    </section>
  );
}

export function PageHero({ title, subtitle, image }: { title: string; subtitle?: string; image?: string }) {
  return (
    <section className="relative pt-40 pb-24 md:pt-64 md:pb-40 overflow-hidden">
      {image && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover grayscale opacity-50"
          />
        </div>
      )}
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <FadeIn>
          <h1 className="text-5xl md:text-8xl font-playfair mb-8 tracking-tight">{title}</h1>
          {subtitle && (
            <p className="text-secondary-text text-lg md:text-xl max-w-2xl font-light italic">
              {subtitle}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

export function FadeIn({ children, delay = 0, direction = "up", className }: { children: React.ReactNode; delay?: number; direction?: "up" | "down" | "left" | "right"; className?: string }) {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true }}
      className={className}
      transition={{ 
        duration: 1, 
        delay, 
        ease: [0.22, 1, 0.36, 1] 
      }}
    >
      {children}
    </motion.div>
  );
}
