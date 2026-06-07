import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { PageHero, Section, FadeIn, Button } from "@/components/ui/Reusable";
import { Mail, MessageSquare, Newspaper } from "lucide-react";

export const metadata = {
  title: "Contact | CRESTHOLM",
  description: "Get in touch with CRESTHOLM for general enquiries, press, or artist submissions.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />
      <PageHero 
        title="Contact" 
        subtitle="For all professional enquiries, please select the appropriate category below."
        image="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
      />
      
      <Section className="bg-[#0A0A0A]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {[
            { 
              icon: <MessageSquare size={32} />, 
              title: "General Enquiries", 
              desc: "For general questions about the label and our operations.",
              email: "info@crestholm.com"
            },
            { 
              icon: <Newspaper size={32} />, 
              title: "Press & Media", 
              desc: "For interview requests, assets, and press releases.",
              email: "press@crestholm.com"
            },
            { 
              icon: <Mail size={32} />, 
              title: "Artist Submissions", 
              desc: "Please use our dedicated submission form for music.",
              link: "/join"
            },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="p-12 bg-surface border border-white/5 h-full flex flex-col">
                <div className="text-white mb-8">{item.icon}</div>
                <h3 className="text-2xl font-playfair mb-4">{item.title}</h3>
                <p className="text-secondary-text text-sm font-light italic mb-8 flex-grow">{item.desc}</p>
                {item.email ? (
                  <span className="text-white text-sm tracking-widest">{item.email}</span>
                ) : (
                  <a href={item.link} className="text-white text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">Submission Form →</a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <div className="bg-surface p-8 md:p-16 border border-white/5">
              <h2 className="text-3xl font-playfair mb-12">Send a Message</h2>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-secondary-text font-bold">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-secondary-text font-bold">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors font-light"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-secondary-text font-bold">Subject</label>
                  <select className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors font-light appearance-none">
                    <option className="bg-surface">General Enquiry</option>
                    <option className="bg-surface">Press & Media</option>
                    <option className="bg-surface">Licensing</option>
                    <option className="bg-surface">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-secondary-text font-bold">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full bg-transparent border border-white/10 p-4 text-white focus:outline-none focus:border-white transition-colors font-light italic"
                  ></textarea>
                </div>
                <div className="pt-8">
                  <Button variant="primary" className="w-full md:w-auto" type="button">
                    Send Message
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
