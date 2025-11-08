import React from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Commission from './components/Commission';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FFF9F8] text-[#2d2928]">
      {/* Header / simple nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FFF9F8]/70 border-b border-[#E8B7B7]/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#home" className="font-serif text-xl text-[#A39897]">Ntsha</a>
          <nav className="hidden sm:flex items-center gap-6 text-[#7f7473]">
            <a href="#gallery" className="hover:text-[#A39897]">Gallery</a>
            <a href="#about" className="hover:text-[#A39897]">About</a>
            <a href="#commissions" className="hover:text-[#A39897]">Commissions</a>
            <a href="#contact" className="hover:text-[#A39897]">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Gallery />
        <About />
        <Commission />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
