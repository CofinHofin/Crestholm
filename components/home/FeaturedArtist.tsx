"use client";

import { Section, FadeIn, Button } from "@/components/ui/Reusable";
import Image from "next/image";

export default function FeaturedArtist() {
  return (
    <Section id="artists" className="bg-[#0A0A0A] !py-0" container={false}>
      <div className="flex flex-col lg:flex-row h-full min-h-[80vh]">
        <FadeIn direction="right" className="w-full lg:w-1/2 h-[50vh] lg:h-auto">
          <div className="relative w-full h-full overflow-hidden group">
            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay group-hover:bg-transparent transition-all duration-700 z-10" />

            <img
                src="/naomi.jpg"
                alt="Grimer La Grimoire"
                className="object-cover w-full h-full grayscale transition-all duration-1000 scale-105 group-hover:scale-100 contrast-125"
            />

            {/* Large Background GLG Text */}
            <div className="absolute bottom-0 left-0 z-20 hidden lg:block pointer-events-none">
      <span
          className="text-accent text-[16rem] font-playfair font-bold leading-none select-none tracking-tight"
          style={{
            opacity: 0.18,
            textShadow: "0 0 40px rgba(180,220,255,0.25)",
            transform: "translate(-10%, 15%)",
          }}
      >
        GLG
      </span>
            </div>

            {/* Optional Dark Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={0.2} className="w-full lg:w-1/2 flex items-center bg-[#0D0D0D]">
          <div className="p-12 md:p-24 max-w-2xl">
            <span className="text-accent uppercase tracking-[0.5em] text-xs font-bold mb-6 block">Artist Spotlight</span>
            <h2 className="text-5xl md:text-7xl font-playfair mb-10 leading-[0.9] tracking-tighter">
              GRIMER<br />
              <span className="text-accent italic">LA GRIMOIRE</span>
            </h2>
            <div className="w-24 h-px bg-accent/40 mb-10" />
            <p className="text-secondary-text text-xl leading-relaxed mb-12 font-light italic">
              "Music is the architecture of the shadows."
            </p>
            <p className="text-secondary-text text-lg leading-relaxed mb-12 font-light">
              A Neoclassical Gothic Rock and Metal solo project created by Naomi. She is the person who owns the record label. Grimer La Grimoire explores the intersection of haunting melodies and avant-garde soundscapes within the unique Crestholm aesthetic.
            </p>
            <Button variant="outline" className="self-start px-12" onClick={() => window.location.href = '/artists/grimer-la-grimoire'}>View Artist Profile</Button>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
