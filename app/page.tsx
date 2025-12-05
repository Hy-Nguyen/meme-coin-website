'use client';

import Hero from '@/components/hero';
import Marquee from '@/components/marquee';
import TextCarousel from '@/components/text-carousel';
import About from '@/components/about';
import MemeGallery from '@/components/meme-gallery';
import FloatingObjects from '@/components/floating-objects';
import ParallaxBackground from '@/components/parallax-background';
import Footer from '@/components/footer';
import CryptoPlatforms from '@/components/lenders';
import { is } from 'date-fns/locale';

export default function Home() {
  const isSafari = () => {
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1 && ua.indexOf('android') === -1;
  };
  return (
    <main className="bg-background relative min-h-screen">
      {!isSafari() && (
        <>
          <FloatingObjects />
          <ParallaxBackground />
        </>
      )}

      <div className="relative z-10">
        <Hero />
        <Marquee />
        <TextCarousel />
        <About />
        <CryptoPlatforms />
        <MemeGallery />

        <Footer />
      </div>
    </main>
  );
}
