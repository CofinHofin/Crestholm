"use client";

import { Section, FadeIn, Button } from "@/components/ui/Reusable";

export default function LatestRelease() {
  return (
    <Section id="releases" className="bg-[#050505] !py-32">
      <div className="flex flex-col lg:flex-row gap-24 items-center">
        <FadeIn direction="up" className="w-full lg:w-1/2">
          <div className="relative aspect-square shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden group rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80" 
              alt="Latest Release"
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute top-8 left-8 border border-white/20 p-4 backdrop-blur-sm">
              <span className="text-white text-[10px] uppercase tracking-[0.4em]">Available Now</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2} className="w-full lg:w-1/2">
          <div className="flex flex-col">
            <span className="text-accent uppercase tracking-[0.5em] text-xs font-bold mb-8 block">New Release</span>
            <h2 className="text-6xl md:text-7xl font-playfair mb-4 leading-none tracking-tighter uppercase">Ethereal</h2>
            <h2 className="text-6xl md:text-7xl font-playfair mb-6 leading-none tracking-tighter uppercase text-accent italic">Echoes</h2>
            <h3 className="text-2xl md:text-3xl text-secondary-text font-light mb-12 tracking-wide uppercase">Luna Rayne</h3>
            
            <div className="grid grid-cols-2 gap-12 mb-12 border-y border-white/5 py-8">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-accent mb-2">Released</span>
                <span className="text-lg tracking-widest font-light">12.06.2026</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-accent mb-2">Catalogue</span>
                <span className="text-lg tracking-widest font-light">CRST-042</span>
              </div>
            </div>

            <p className="text-secondary-text text-xl mb-12 max-w-xl leading-relaxed font-light italic">
              "A haunting auditory journey through the subconscious where shadows speak louder than sound."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="primary" className="px-12" onClick={() => window.location.href = '/releases/ethereal-echoes'}>Stream Album</Button>
              <Button variant="outline" className="px-12" onClick={() => window.location.href = '/releases'}>View Catalog</Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
