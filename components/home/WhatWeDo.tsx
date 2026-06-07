"use client";

import { Section, FadeIn } from "@/components/ui/Reusable";
import { motion } from "framer-motion";

const services = [
  { title: "Artist Development", description: "Nurturing creative talent from raw potential to professional artistry." },
  { title: "Distribution", description: "Seamless global delivery across all major streaming platforms." },
  { title: "Marketing", description: "Cinematic storytelling and strategic reach for your unique sound." },
  { title: "Branding", description: "Crafting a visual and sonic identity that resonates with your vision." },
  { title: "Release Strategy", description: "Precision planning for every milestone of your career." },
  { title: "Career Guidance", description: "Long-term partnership focused on sustainable artistic growth." },
];

export default function WhatWeDo() {
  return (
    <Section className="bg-[#0A0A0A] !py-32 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <FadeIn className="lg:sticky lg:top-32">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-accent" />
              <span className="text-accent uppercase tracking-[0.5em] text-[10px] font-bold block">Our Expertise</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-playfair mb-8 leading-tight uppercase tracking-tighter">
              Professional<br />
              <span className="text-accent italic font-light">Infrastructure</span>
            </h2>
            <p className="text-secondary-text text-lg font-light leading-relaxed max-w-sm italic opacity-70">
              "We provide the foundation, you provide the vision. Together, we build legacies."
            </p>
            
            {/* FFXV inspired geometric element */}
            <div className="mt-12 hidden lg:block">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent/20">
                <path d="M0 0H20V2H2V20H0V0Z" fill="currentColor" />
                <path d="M100 0H80V2H98V20H100V0Z" fill="currentColor" />
                <motion.path 
                  d="M0 100L40 60" 
                  stroke="currentColor" 
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </svg>
            </div>
          </FadeIn>
        </div>

        <div className="lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.1} className="relative group">
                <div className="relative p-10 h-full bg-surface/30 border border-white/5 transition-all duration-500 hover:border-accent/30 hover:bg-surface/50 overflow-hidden">
                  {/* FFXV Style Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent/0 group-hover:border-accent/50 transition-all duration-500" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent/0 group-hover:border-accent/50 transition-all duration-500" />
                  
                  {/* Subtle background number */}
                  <div className="absolute -right-4 -bottom-8 text-9xl font-playfair text-white/[0.02] group-hover:text-accent/[0.03] transition-colors duration-700 pointer-events-none">
                    0{index + 1}
                  </div>

                  <div className="relative z-10">
                    <span className="text-accent/40 text-xs font-mono mb-6 block tracking-[0.2em]">TYPE_{index + 1}</span>
                    <h3 className="text-2xl font-playfair mb-4 tracking-wide uppercase group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="w-12 h-px bg-white/10 mb-6 group-hover:w-24 group-hover:bg-accent/40 transition-all duration-500" />
                    <p className="text-secondary-text leading-relaxed font-light text-sm italic group-hover:text-primary-text transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
