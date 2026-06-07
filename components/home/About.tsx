"use client";

import { Section, FadeIn } from "@/components/ui/Reusable";

export default function About() {
  return (
    <Section id="about" className="bg-[#050505] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <FadeIn direction="right">
            <h2 className="text-4xl md:text-7xl font-playfair mb-12 leading-tight">
              A Haven for<br />
              <span className="text-accent italic">Creative Sovereignty.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <p className="text-secondary-text text-lg leading-relaxed font-light">
                At CRESTHOLM, we believe that the most profound art is born from absolute freedom and the embrace of the alternative. We are a sanctuary for gothic souls and unique minds who dare to challenge the status quo and craft their own spectral legacies.
              </p>
              <p className="text-secondary-text text-lg leading-relaxed font-light">
                Our philosophy is simple: prioritize the alternative vision over commercial trends. By providing world-class resources and unyielding support, we enable our artists to explore the depths of their creative shadows.
              </p>
            </div>
          </FadeIn>
        </div>
        
        <div className="lg:col-span-5 relative">
          <FadeIn direction="left" delay={0.3}>
            <div className="relative aspect-square">
              <div className="absolute inset-0 border border-white/10 translate-x-6 translate-y-6 z-0" />
              <img 
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80" 
                alt="Studio Atmosphere"
                className="object-cover w-full h-full relative z-10 grayscale contrast-125"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
