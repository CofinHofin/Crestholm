import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { PageHero, Section, FadeIn } from "@/components/ui/Reusable";
import { news } from "@/lib/data/news";
import Link from "next/link";

export const metadata = {
  title: "Journal | CRESTHOLM",
  description: "Latest news, editorials, and studio updates from the CRESTHOLM collective.",
};

export default function NewsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />
      <PageHero 
        title="Journal" 
        subtitle="Insights into our creative process, artist milestones, and label announcements."
        image="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80"
      />
      
      <Section className="bg-[#0A0A0A]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {news.map((article, index) => (
            <FadeIn key={article.slug} delay={index * 0.1}>
              <Link href={`/news/${article.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden mb-8 bg-surface">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-accent font-bold">{article.category}</span>
                  <span className="w-1 h-1 rounded-full bg-accent/30" />
                  <span className="text-[10px] uppercase tracking-widest text-secondary-text/50">{article.date}</span>
                </div>
                <h3 className="text-2xl font-playfair group-hover:text-accent transition-colors duration-300 leading-snug">
                  {article.title}
                </h3>
                <p className="text-secondary-text mt-4 line-clamp-2 font-light italic text-sm">
                  {article.content}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read Article <span>→</span>
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
