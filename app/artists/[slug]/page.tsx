import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { PageHero, Section, FadeIn, Button } from "@/components/ui/Reusable";
import { artists } from "@/lib/data/artists";
import { releases } from "@/lib/data/releases";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Music, Globe, Video, User } from "lucide-react";

export async function generateStaticParams() {
  return artists.map((artist) => ({
    slug: artist.slug,
  }));
}

export default async function ArtistProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = artists.find((a) => a.slug === slug);

  if (!artist) {
    notFound();
  }

  const artistReleases = releases.filter((r) => r.artistId === artist.id);

  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />
      <PageHero 
        title={artist.name} 
        subtitle={artist.genre}
        image={artist.heroImage}
      />

      {/* Biography Section */}
      <Section className="bg-[#0A0A0A]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-5xl font-playfair mb-8">Biography</h2>
              <div className="w-20 h-px bg-accent mb-8" />
              <p className="text-secondary-text text-lg leading-relaxed font-light mb-8">
                {artist.fullBio}
              </p>
              
              <div className="flex space-x-6">
                {artist.socials.instagram && (
                  <a href={artist.socials.instagram} className="text-secondary-text hover:text-accent transition-colors" title="Instagram">
                    <Globe size={24} />
                  </a>
                )}
                {artist.socials.twitter && (
                  <a href={artist.socials.twitter} className="text-secondary-text hover:text-accent transition-colors" title="Twitter">
                    <User size={24} />
                  </a>
                )}
                {artist.socials.spotify && (
                  <a href={artist.socials.spotify} className="text-secondary-text hover:text-accent transition-colors" title="Spotify">
                    <Music size={24} />
                  </a>
                )}
                {artist.socials.youtube && (
                  <a href={artist.socials.youtube} className="text-secondary-text hover:text-accent transition-colors" title="YouTube">
                    <Video size={24} />
                  </a>
                )}
              </div>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-5">
            <FadeIn direction="left" delay={0.2}>
              <div className="aspect-[3/4] overflow-hidden bg-surface">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Discography Section */}
      <Section className="bg-[#0D0D0D]">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-playfair mb-16 text-center">Discography</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artistReleases.map((release, index) => (
            <FadeIn key={release.slug} delay={index * 0.1}>
              <Link href={`/releases/${release.slug}`} className="group block text-center">
                <div className="aspect-square overflow-hidden mb-6 shadow-2xl bg-surface">
                  <img 
                    src={release.coverArt} 
                    alt={release.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <h4 className="text-xl font-playfair mb-1">{release.title}</h4>
                <p className="text-xs uppercase tracking-widest text-secondary-text">{release.type} • {release.releaseDate}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Gallery Section */}
      {artist.gallery && (
        <Section className="bg-[#0A0A0A]">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-playfair mb-16">Gallery</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artist.gallery.map((img, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <div className="aspect-video overflow-hidden bg-surface">
                  <img 
                    src={img} 
                    alt={`${artist.name} gallery ${i}`}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>
      )}

      <Footer />
    </main>
  );
}
