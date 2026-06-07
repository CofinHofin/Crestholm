import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { PageHero, Section, FadeIn, Button } from "@/components/ui/Reusable";

export const metadata = {
  title: "Join | CRESTHOLM",
  description: "Submit your music to CRESTHOLM record label. We are looking for visionary artists and independent minds.",
};

export default function JoinPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />
      <PageHero 
        title="Join Us" 
        subtitle="We are always seeking authentic voices and visionary artists to join our collective."
        image="https://images.unsplash.com/photo-1514525253361-bee243870d2c?auto=format&fit=crop&q=80"
      />
      
      <Section className="bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="bg-surface p-8 md:p-16 border border-white/5">
              <div className="mb-12">
                <h2 className="text-3xl font-playfair mb-4">Artist Submission</h2>
                <p className="text-secondary-text font-light italic">
                  Due to the volume of submissions, we are only able to contact artists we wish to discuss potential partnership with.
                </p>
              </div>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-secondary-text font-bold">Artist / Band Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors font-light"
                      placeholder="Your artistic identity"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-secondary-text font-bold">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors font-light"
                      placeholder="how we can reach you"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-secondary-text font-bold">Location</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors font-light"
                      placeholder="City, Country"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-secondary-text font-bold">Genre</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors font-light"
                      placeholder="e.g. Ambient / Art Rock"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-secondary-text font-bold">Biography</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border border-white/10 p-4 text-white focus:outline-none focus:border-white transition-colors font-light italic"
                    placeholder="Tell us about your artistic journey and vision..."
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-secondary-text font-bold">Streaming Links (SoundCloud, Spotify, etc.)</label>
                  <textarea 
                    rows={2}
                    className="w-full bg-transparent border border-white/10 p-4 text-white focus:outline-none focus:border-white transition-colors font-light"
                    placeholder="Provide links to your best work"
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-secondary-text font-bold">Social Media Links</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors font-light"
                    placeholder="Instagram, Twitter, etc."
                  />
                </div>

                <div className="pt-8">
                  <Button variant="primary" className="w-full md:w-auto" type="button">
                    Submit Music
                  </Button>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
