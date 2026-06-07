"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Reusable";

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background with Parallax */}
            <motion.div
                style={{ y: y1 }}
                className="absolute inset-0 z-0"
            >
                {/* Background Image */}
                <div
                    className="w-full h-full bg-[url('https://images.unsplash.com/photo-1514525253361-bee243870d2c?auto=format&fit=crop&q=80')] bg-cover bg-center"
                    aria-hidden="true"
                />

                {/* Atmospheric Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#020406]/40 via-[#05080d]/60 to-[#0A0A0A]/90 z-10" />

                {/* Subtle Blue Glow */}
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        background:
                            "radial-gradient(circle at center, rgba(180,220,255,0.08) 0%, transparent 60%)",
                    }}
                />

                {/* Fog Layer */}
                <div
                    className="absolute inset-0 z-10 opacity-20"
                    style={{
                        background:
                            "linear-gradient(180deg, transparent 0%, rgba(180,220,255,0.03) 50%, transparent 100%)",
                    }}
                />
            </motion.div>

            {/* Huge Background Word */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <span
            className="font-playfair uppercase tracking-[0.2em] text-accent"
            style={{
                fontSize: "18rem",
                opacity: 0.03,
                lineHeight: 1,
            }}
        >
          CRESTHOLM
        </span>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 md:px-12 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-8"
                >
                    {/* Decorative Crest Divider */}
                    <div className="flex items-center justify-center gap-6 mb-10">
                        <div className="w-20 h-px bg-accent/30" />
                        <div className="w-2 h-2 border border-accent/40 rotate-45" />
                        <div className="w-20 h-px bg-accent/30" />
                    </div>

                    <span className="text-accent uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block opacity-80">
            Independent Record Label
          </span>

                    <h1 className="text-6xl md:text-8xl font-playfair mb-2 tracking-tighter leading-none uppercase">
                        Independent Minds.
                    </h1>

                    <h1 className="text-6xl md:text-8xl font-playfair mb-10 tracking-tighter leading-none uppercase text-accent italic font-light">
                        Timeless Sound.
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.2,
                        delay: 1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-secondary-text text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-light tracking-wide leading-relaxed"
                >
                    Developing and supporting alternative artists who exist beyond
                    trends, crafting work rooted in atmosphere, identity, and lasting
                    artistic vision.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.2,
                        delay: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <Button
                        variant="primary"
                        className="min-w-[220px]"
                        onClick={() => (window.location.href = "/artists")}
                    >
                        Explore Artists
                    </Button>

                    <Button
                        variant="outline"
                        className="min-w-[220px]"
                        onClick={() => (window.location.href = "/releases")}
                    >
                        Latest Releases
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
        <span className="text-[8px] uppercase tracking-[0.5em] text-accent/50 rotate-90 mb-8 origin-left">
          Explore
        </span>

                <div className="w-px h-16 bg-gradient-to-b from-accent/50 to-transparent" />
            </motion.div>
        </section>
    );
}