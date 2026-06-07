"use client";

import { Section, FadeIn } from "@/components/ui/Reusable";
import { Artist } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";

interface OurArtistsProps {
  artists: Artist[];
}

export default function OurArtists({ artists }: OurArtistsProps) {
  return (
    <Section id="artists" className="bg-[#050505]">
      <div className="text-center mb-16">
        <FadeIn direction="up">
          <h2 className="text-4xl md:text-7xl font-playfair mb-6 leading-tight">
            Our <span className="text-accent">Artists</span>
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto font-light">
            Discover the unique minds who dwell in the intersection of gothic atmosphere and alternative sound.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artists.map((artist) => (
          <FadeIn key={artist.id} direction="up" delay={0.1}>
            <Link 
              href={`/artists/${artist.slug}`} 
              className="block group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <Image 
                  src={artist.image} 
                  alt={artist.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-playfair text-white mb-2">{artist.name}</h3>
                    <p className="text-white/80 text-sm">{artist.genre}</p>
                  </div>
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
