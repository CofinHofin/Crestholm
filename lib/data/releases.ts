import { Release } from "../types";

export const releases: Release[] = [
  {
    id: "r1",
    slug: "ethereal-echoes",
    title: "Ethereal Echoes",
    artistId: "2",
    artistName: "Luna Rayne",
    type: "EP",
    releaseDate: "June 12, 2026",
    coverArt: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80",
    description: "Luna Rayne's latest masterpiece explores the fragile boundary between the physical and the spectral. A haunting auditory journey through the subconscious, blending neoclassical piano with atmospheric field recordings and ritualistic textures.",
    tracklist: [
      "1. Prelude to Shadows",
      "2. The Spectral Breath",
      "3. Fragile Boundaries",
      "4. Ethereal Echoes",
      "5. Postlude (Submerged in Melancholy)"
    ],
    streamingLinks: {
      spotify: "#",
      appleMusic: "#",
      bandcamp: "#"
    },
    credits: "Produced by Luna Rayne at Crestholm Studios. Mastered by Julian Vane. Artwork by Elena S."
  },
  {
    id: "r2",
    slug: "nocturnal-midnight",
    title: "Nocturnal Midnight",
    artistId: "1",
    artistName: "Marcus Valentine",
    type: "Single",
    releaseDate: "May 28, 2026",
    coverArt: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80", // Reusing for now
    description: "A dark, cinematic journey through late-night urban gothic landscapes. Marcus Valentine's signature saxophone meets pulsing, avant-garde electronic textures.",
    tracklist: ["1. Nocturnal Midnight"],
    streamingLinks: {
      spotify: "#",
      appleMusic: "#"
    },
    credits: "Produced by Marcus Valentine. Mixed by Sarah Chen."
  },
  {
    id: "r3",
    slug: "velvet-shadows",
    title: "Velvet Shadows",
    artistId: "1",
    artistName: "Marcus Valentine",
    type: "Single",
    releaseDate: "April 15, 2026",
    coverArt: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80",
    description: "Deeply atmospheric gothic soul track with haunting vocals and a rich, layered arrangement of shadows and light.",
    tracklist: ["1. Velvet Shadows"],
    streamingLinks: {
      spotify: "#"
    },
    credits: "Produced by Marcus Valentine."
  },
  {
    id: "r4",
    slug: "starlight-theory",
    title: "Starlight Theory",
    artistId: "3",
    artistName: "Crestholm Founder",
    type: "Single",
    releaseDate: "March 10, 2026",
    coverArt: "https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80",
    description: "A complex, multi-part progressive rock epic that explores the origins of light and darkness.",
    tracklist: ["1. Starlight Theory"],
    streamingLinks: {
      spotify: "#",
      bandcamp: "#"
    },
    credits: "Written and produced by The Founder."
  }
];
