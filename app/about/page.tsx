import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { PageHero, Section, FadeIn } from "@/components/ui/Reusable";

export const metadata = {
  title: "About | CRESTHOLM",
  description: "Learn about the mission, story, and values of CRESTHOLM record label.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />
      <PageHero 
        title="Our Story" 
        subtitle="Founded on the belief that the most profound art is born from absolute freedom."
        image="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
      />
      
      <Section className="bg-[#0A0A0A]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <FadeIn direction="right">
            <h2 className="text-4xl md:text-6xl font-playfair mb-12">The Mission</h2>
            <div className="w-20 h-px bg-white mb-12" />
            <div className="space-y-8 text-secondary-text text-lg font-light leading-relaxed italic">
              <p>
                CRESTHOLM was established as a counter-current to the rapidly shifting, trend-driven music industry. Our mission is simple but absolute: to provide a professional infrastructure that supports distinctive artists without compromising their creative sovereignty.
              </p>
              <p>
                We believe in the longevity of the artist's career. We are not interested in fleeting viral moments; we are dedicated to building legacies. Through careful development, strategic promotion, and global distribution, we ensure that our artists' voices reach the audience they deserve.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.2}>
            <div className="aspect-[4/5] overflow-hidden bg-surface relative">
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80" 
                alt="Studio Atmosphere"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 border border-white/10 translate-x-4 -translate-y-4 -z-10" />
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-playfair mb-8 text-white">What We Provide</h2>
            <p className="text-secondary-text text-lg font-light italic">
              Comprehensive support for the modern independent artist.
            </p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { t: "Artist Development", d: "Nurturing creative talent from raw potential to professional artistry." },
            { t: "Distribution", d: "Seamless global delivery across all major streaming platforms." },
            { t: "Marketing", d: "Cinematic storytelling and strategic reach for your unique sound." },
            { t: "Branding", d: "Crafting a visual and sonic identity that resonates with your vision." },
            { t: "Release Strategy", d: "Precision planning for every milestone of your career." },
            { t: "Career Guidance", d: "Long-term partnership focused on sustainable artistic growth." },
          ].map((item, i) => (
            <FadeIn key={item.t} delay={i * 0.1}>
              <div className="p-12 bg-surface border border-white/5 hover:border-white/20 transition-all duration-500 h-full">
                <h3 className="text-2xl font-playfair mb-6">{item.t}</h3>
                <p className="text-secondary-text text-sm font-light italic leading-relaxed">{item.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="bg-[#0A0A0A] py-32 md:py-56">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-7xl font-playfair mb-12 italic text-white">Future Vision</h2>
            <p className="text-secondary-text text-xl leading-relaxed font-light mb-16">
              CRESTHOLM continues to evolve as a global sanctuary for independent music. We are expanding our creative collective, investing in new technologies, and remaining steadfast in our commitment to the artists who define us.
            </p>
            <div className="w-px h-24 bg-gradient-to-b from-white to-transparent mx-auto" />
          </FadeIn>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
