"use client";

import { Section, FadeIn, Button } from "@/components/ui/Reusable";

export default function JoinCrestholm() {
  return (
    <Section id="contact" className="bg-[#050505] py-32 md:py-64 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(185,226,250,0.1)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <FadeIn>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-accent/30" />
            <span className="text-accent uppercase tracking-[0.6em] text-[10px] font-bold block">Submissions Open</span>
            <div className="w-12 h-px bg-accent/30" />
          </div>
          <h2 className="text-6xl md:text-8xl font-playfair mb-12 leading-[0.85] tracking-tighter uppercase">
            Your Next<br />
            <span className="text-accent italic font-light tracking-normal">Chapter</span>
          </h2>
          <p className="text-secondary-text text-xl md:text-2xl mb-16 max-w-3xl mx-auto font-light leading-relaxed italic opacity-80">
            "We are not looking for the next trend. We are looking for the next unique soul that dares to dwell in the shadows."
          </p>
          <div className="flex flex-col items-center justify-center gap-10">
            <Button variant="primary" className="px-20 py-6" onClick={() => window.location.href = '/join'}>
              Submit Your Music
              <span className="ml-4 w-8 h-px bg-black/30 group-hover:bg-accent group-hover:w-12 transition-all duration-500" />
            </Button>
            <div className="flex items-center gap-8">
              <div className="w-8 h-8 border border-white/5 rotate-45 flex items-center justify-center">
                <div className="w-1 h-1 bg-accent/40" />
              </div>
              <p className="text-[9px] uppercase tracking-[0.5em] text-secondary-text/40">
                Alternative Souls Only
              </p>
              <div className="w-8 h-8 border border-white/5 rotate-45 flex items-center justify-center">
                <div className="w-1 h-1 bg-accent/40" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
