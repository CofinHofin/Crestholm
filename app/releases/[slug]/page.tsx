import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Section, FadeIn, Button } from "@/components/ui/Reusable";
import { releases } from "@/lib/data/releases";
import { artists } from "@/lib/data/artists";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Music, PlayCircle } from "lucide-react";

export async function generateStaticParams() {
  return releases.map((release) => ({
    slug: release.slug,
  }));
}

export default async function ReleaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const release = releases.find((r) => r.slug === slug);

  if (!release) {
    notFound();
  }

  const artist = artists.find((a) => a.id === release.artistId);

  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />
      
      <Section className="bg-[#0A0A0A] pt-40 md:pt-56">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Cover Art */}
          <div className="lg:col-span-5">
            <FadeIn direction="right">
              <div className="aspect-square shadow-2xl shadow-black bg-surface overflow-hidden">
                <img 
                  src={release.coverArt} 
                  alt={release.title}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </FadeIn>
          </div>

          {/* Details */}
          <div className="lg:col-span-7">
            <FadeIn direction="left" delay={0.2}>
              <div className="mb-12">
                <span className="text-xs uppercase tracking-[0.3em] text-secondary-text mb-4 block">
                  {release.type} • {release.releaseDate}
                </span>
                <h1 className="text-5xl md:text-7xl font-playfair mb-4">{release.title}</h1>
                {artist && (
                  <Link 
                    href={`/artists/${artist.slug}`}
                    className="text-2xl md:text-3xl font-light italic text-secondary-text hover:text-accent transition-colors"
                  >
                    by {release.artistName}
                  </Link>
                )}
              </div>

              <div className="w-24 h-px bg-accent mb-10" />

              <p className="text-secondary-text text-lg leading-relaxed font-light mb-12 max-w-2xl">
                {release.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-16">
                <Button variant="primary" className="flex items-center gap-3">
                  <PlayCircle size={18} /> Stream Now
                </Button>
                <Button variant="outline">Official Store</Button>
              </div>

              {/* Tracklist */}
              <div className="mb-16">
                <h3 className="text-xl font-playfair uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Tracklist</h3>
                <div className="space-y-4">
                  {release.tracklist.map((track, i) => (
                    <div key={i} className="flex justify-between items-center group cursor-default">
                      <span className="text-secondary-text group-hover:text-accent transition-colors font-light tracking-wide">{track}</span>
                      <Music size={14} className="text-accent/30 group-hover:text-accent transition-colors" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Credits */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4">Credits</h3>
                <p className="text-secondary-text text-sm font-light italic leading-relaxed">
                  {release.credits}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Related Releases */}
      <Section className="bg-[#0D0D0D]">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-playfair mb-16">More from {release.artistName}</h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {releases
            .filter((r) => r.artistId === release.artistId && r.id !== release.id)
            .map((related, index) => (
              <FadeIn key={related.slug} delay={index * 0.1}>
                <Link href={`/releases/${related.slug}`} className="group block">
                  <div className="aspect-square overflow-hidden mb-4 bg-surface shadow-lg">
                    <img 
                      src={related.coverArt} 
                      alt={related.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <h4 className="text-lg font-playfair mb-1">{related.title}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-secondary-text">{related.type}</p>
                </Link>
              </FadeIn>
            ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
