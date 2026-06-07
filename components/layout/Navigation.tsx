"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Artists", href: "/artists" },
  { name: "Releases", href: "/releases" },
  { name: "About", href: "/about" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <nav
          className={cn(
              "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6",
              isScrolled
                  ? "bg-background/80 backdrop-blur-md py-4 border-b border-surface/50"
                  : "bg-transparent"
          )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <Image
                src="/crestholm.svg"
                alt="CRESTHOLM"
                width={120}
                height={120}
                className="h-10 md:h-12 w-auto object-contain group-hover:opacity-80 transition-opacity duration-300 invert"
                priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-12">
              {navLinks.map((link) => (
                  <Link
                      key={link.name}
                      href={link.href}
                      className="text-[10px] uppercase tracking-[0.3em] text-secondary-text hover:text-accent transition-all duration-500 relative group flex items-center gap-2"
                  >
                    <span className="w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[4px] border-l-accent opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-2" />

                    {link.name}

                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent/40 transition-all duration-500 group-hover:w-full" />
                  </Link>
              ))}
            </div>

            {/* Artist Portal */}
            <div className="ml-12 pl-12 border-l border-white/10">
              <Link
                  href="/account"
                  className="group flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-accent/60 group-hover:bg-accent transition-colors duration-300" />

                <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.35em] text-primary-text">
                  Artist Portal
                </span>

                  <span className="text-[9px] tracking-[0.2em] text-secondary-text opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  Access
                </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
              className="md:hidden text-primary-text"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
              <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden bg-surface overflow-hidden border-b border-white/5"
              >
                <div className="flex flex-col items-center py-10 space-y-8">
                  {navLinks.map((link) => (
                      <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-lg uppercase tracking-widest text-secondary-text hover:text-accent"
                      >
                        {link.name}
                      </Link>
                  ))}

                  <div className="w-24 h-px bg-white/10" />

                  <Link
                      href="/account"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex flex-col items-center"
                  >
                <span className="text-accent uppercase tracking-[0.4em] text-sm">
                  Artist Portal
                </span>

                    <span className="text-secondary-text text-xs tracking-[0.2em] mt-2">
                  Access
                </span>
                  </Link>
                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </nav>
  );
}