"use client";

import { useState, useEffect } from "react";
import { artists } from "@/lib/data/artists";
import StartupAnimation from "@/components/animation/StartupAnimation";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedArtist from "@/components/home/FeaturedArtist";
import LatestRelease from "@/components/home/LatestRelease";
import WhatWeDo from "@/components/home/WhatWeDo";
import About from "@/components/home/About";
import LatestNews from "@/components/home/LatestNews";
import JoinCrestholm from "@/components/home/JoinCrestholm";
import OurArtists from "@/components/home/OurArtists";

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("crestholm_animation_played");
    if (!hasPlayed) {
      setShowAnimation(true);
    } else {
      setIsReady(true);
    }
  }, []);

  const handleAnimationComplete = () => {
    setShowAnimation(false);
    setIsReady(true);
    sessionStorage.setItem("crestholm_animation_played", "true");
  };

  return (
    <>
      {showAnimation && <StartupAnimation onComplete={handleAnimationComplete} />}
      
      <main className={`flex flex-col min-h-screen transition-opacity duration-1000 ${isReady ? "opacity-100" : "opacity-0"}`}>
        <Navigation />
        <Hero />
        <FeaturedArtist />
        <LatestRelease />
        <WhatWeDo />
        <About />
        <OurArtists artists={artists} />
        <LatestNews />
        <JoinCrestholm />
        <Footer />
      </main>
    </>
  );
}
