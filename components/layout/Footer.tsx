import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/Crestholm_text_cropped.png" 
                alt="CRESTHOLM" 
                width={500} 
                height={150} 
                className="h-8 md:h-10 w-auto object-contain brightness-110 opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <p className="text-secondary-text max-w-sm mb-8">
              Developing and supporting alternative artists who create unique, gothic soundscapes for a global audience.
            </p>
          </div>

          <div>
            <h4 className="text-primary-text font-playfair text-lg mb-6 tracking-wide">Explore</h4>
            <ul className="space-y-4">
              {["Artists", "Releases", "About", "News", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`} 
                    className="text-secondary-text hover:text-white transition-colors duration-300 text-sm tracking-widest uppercase"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-text font-playfair text-lg mb-6 tracking-wide">Connect</h4>
            <ul className="space-y-4">
              {["Instagram", "Twitter", "YouTube", "Spotify", "SoundCloud"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-secondary-text hover:text-white transition-colors duration-300 text-sm tracking-widest uppercase"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-surface/20">
          <p className="text-secondary-text/50 text-xs tracking-widest uppercase mb-4 md:mb-0">
            © {currentYear} CRESTHOLM RECORDS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8">
            <Link href="#" className="text-secondary-text/50 hover:text-white text-[10px] tracking-widest uppercase">Privacy Policy</Link>
            <Link href="#" className="text-secondary-text/50 hover:text-white text-[10px] tracking-widest uppercase">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
