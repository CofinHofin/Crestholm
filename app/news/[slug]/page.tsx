import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Section, FadeIn } from "@/components/ui/Reusable";
import { news } from "@/lib/data/news";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return news.map((article) => ({
    slug: article.slug,
  }));
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = news.find((n) => n.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />
      
      <article className="pt-40 md:pt-56">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs uppercase tracking-widest text-white font-bold">{article.category}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-xs uppercase tracking-widest text-secondary-text/50">{article.date}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-playfair mb-12 leading-tight">{article.title}</h1>
            <p className="text-secondary-text text-sm uppercase tracking-widest mb-16">Written by {article.author}</p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="w-full aspect-[21/9] overflow-hidden bg-surface mb-24">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </FadeIn>

        <div className="container mx-auto px-6 md:px-12 max-w-3xl pb-24">
          <FadeIn delay={0.3}>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-secondary-text text-xl leading-relaxed font-light italic mb-8">
                {article.content}
              </p>
              <div className="space-y-6 text-secondary-text font-light leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin libero.
                </p>
                <h3 className="text-white font-playfair text-3xl mt-12 mb-6 tracking-wide">A New Perspective</h3>
                <p>
                  Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Sed varius sodales augue, ac vestibulum ante. Quisque varius, nibh ac feugiat interdum, libero massa laoreet tellus, nec interdum nisl tellus sit amet ante.
                </p>
              </div>
            </div>
          </FadeIn>
          
          <div className="mt-24 pt-12 border-t border-white/10 flex justify-between items-center">
            <Link href="/news" className="text-sm uppercase tracking-widest text-white hover:opacity-70 transition-opacity">
              ← Back to Journal
            </Link>
            <div className="flex gap-6">
              <a href="#" className="text-xs uppercase tracking-widest text-secondary-text hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-xs uppercase tracking-widest text-secondary-text hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
