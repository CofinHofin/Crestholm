"use client";

import { Section, FadeIn } from "@/components/ui/Reusable";
import { motion } from "framer-motion";
import Link from "next/link";

const news = [
  {
    title: "The Evolution of Cinematic Sound: A Masterclass",
    category: "Editorial",
    date: "June 01, 2026",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80",
  },
  {
    title: "Inside the Studio: Recording the New Marcus Valentine Album",
    category: "Studio",
    date: "May 25, 2026",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80",
  },
  {
    title: "CRESTHOLM Announces Global Distribution Partnership",
    category: "News",
    date: "May 18, 2026",
    image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80",
  },
];

export default function LatestNews() {
  return (
    <Section id="news" className="bg-[#0A0A0A]">
      <div className="flex justify-between items-end mb-16">
        <FadeIn>
          <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Journal</span>
          <h2 className="text-4xl md:text-6xl font-playfair">Latest News</h2>
        </FadeIn>
        <FadeIn delay={0.2} className="hidden md:block">
          <Link href="/news" className="text-sm uppercase tracking-widest text-accent hover:opacity-70 transition-opacity duration-300">
            View All Articles →
          </Link>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {news.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.1}>
            <Link href={`/news/${item.title.toLowerCase().replace(/ /g, '-').replace(/:/g, '')}`}>
              <motion.article 
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden mb-6">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[10px] uppercase tracking-widest text-accent font-bold">{item.category}</span>
                  <span className="w-1 h-1 rounded-full bg-accent/30" />
                  <span className="text-[10px] uppercase tracking-widest text-secondary-text/50">{item.date}</span>
                </div>
                <h3 className="text-xl font-playfair leading-snug group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
              </motion.article>
            </Link>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
