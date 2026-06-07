import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { PageHero, Section, FadeIn } from "@/components/ui/Reusable";
import { artists } from "@/lib/data/artists";
import Link from "next/link";
import { motion } from "framer-motion";

export const metadata = {
  title: "Artists | CRESTHOLM",
  description: "The CRESTHOLM roster: a collective of visionary artists and independent minds.",
};

export default function ArtistsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />
      <PageHero 
        title="Our Roster" 
        subtitle="A collective of visionary artists and independent minds dedicated to their craft."
        image="https://images.unsplash.com/photo-1514525253361-bee243870d2c?auto=format&fit=crop&q=80"
      />
      
      <Section className="bg-[#0A0A0A]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {artists.map((artist, index) => (
            <FadeIn key={artist.slug} delay={index * 0.1}>
              <Link href={`/artists/${artist.slug}`} className="group block relative">
                <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-surface">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 contrast-125"
                  />
                  <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="relative">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-accent mb-3 block font-bold">{artist.genre}</span>
                  <h3 className="text-3xl md:text-4xl font-playfair group-hover:text-accent transition-all duration-500 leading-none uppercase tracking-tighter">{artist.name}</h3>
                  <div className="mt-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-secondary-text group-hover:text-white transition-colors">
                    Explore Profile <span className="w-12 h-px bg-white/10 group-hover:bg-accent transition-all duration-500" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
