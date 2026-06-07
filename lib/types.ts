export interface Artist {
  id: string;
  slug: string;
  name: string;
  genre: string;
  shortBio: string;
  fullBio: string;
  image: string;
  heroImage: string;
  socials: {
    instagram?: string;
    twitter?: string;
    spotify?: string;
    youtube?: string;
  };
  gallery?: string[];
}

export interface Release {
  id: string;
  slug: string;
  title: string;
  artistId: string;
  artistName: string;
  type: "Single" | "EP" | "Album";
  releaseDate: string;
  coverArt: string;
  description: string;
  tracklist: string[];
  streamingLinks: {
    spotify?: string;
    appleMusic?: string;
    bandcamp?: string;
  };
  credits: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: "Releases" | "Artist News" | "Tours" | "Announcements" | "Editorial";
  date: string;
  image: string;
  content: string;
  author: string;
}
