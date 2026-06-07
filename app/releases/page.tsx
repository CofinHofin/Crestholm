import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { PageHero, Section, FadeIn } from "@/components/ui/Reusable";
import { releases } from "@/lib/data/releases";
import Link from "next/link";

export const metadata = {
  title: "Releases | CRESTHOLM",
  description: "Explore the CRESTHOLM catalog: cinematic soundscapes, independent minds, timeless sound.",
};

export default function ReleasesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />
      <PageHero 
        title="Discography" 
        subtitle="Explore our curated catalog of cinematic soundscapes and experimental masterpieces."
        image="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80"
      />
      
      <Section className="bg-[#0A0A0A]">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {releases.map((release, index) => (
            <FadeIn key={release.slug} delay={index * 0.05}>
              <Link href={`/releases/${release.slug}`} className="group block">
                <div className="relative aspect-square overflow-hidden mb-6 bg-surface shadow-2xl">
                  <img 
                    src={release.coverArt} 
                    alt={release.title}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute inset-0 border border-white/5 group-hover:border-accent/20 transition-colors duration-500" />
                </div>
                <div className="px-2">
                  <h3 className="text-lg md:text-xl font-playfair group-hover:text-accent transition-colors duration-300 leading-tight uppercase tracking-tight mb-1">{release.title}</h3>
                  <p className="text-secondary-text text-[9px] tracking-[0.2em] font-light italic mb-3 uppercase">{release.artistName}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-[8px] uppercase tracking-[0.3em] text-accent font-bold">{release.type}</span>
                    <span className="w-1 h-px bg-white/10" />
                    <span className="text-[8px] uppercase tracking-[0.3em] text-secondary-text/50">{release.releaseDate.split(',')[1].trim()}</span>
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
