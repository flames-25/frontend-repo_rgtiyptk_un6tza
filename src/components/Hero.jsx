import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] overflow-hidden bg-[#FBEAEA]"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2kUhnZ-bxxbk5a4y/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft grain overlay for handmade paper feel */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-soft-light"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 20%, rgba(255,255,255,0.7) 0, rgba(255,255,255,0.6) 20%, transparent 60%), radial-gradient(circle at 75% 60%, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.5) 25%, transparent 65%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex flex-col items-start">
        <h1 className="text-[2.2rem] sm:text-5xl md:text-6xl leading-tight font-serif text-[#A39897] drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]">
          Natasha (Ntsha)
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-[#7f7473] font-medium">
          “Scribbled from dreams, carved in stillness”
        </p>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#6b6160] leading-relaxed bg-[#FFF9F8]/70 backdrop-blur-sm p-4 rounded-md shadow-sm">
          I make marks to listen. Through charcoal dust and slow acrylic, I search for
          the quiet edges of feeling—where breath meets memory and hands remember more
          than words. My work is a conversation with stillness; each piece holds a soft
          place for the viewer to arrive, pause, and be.
        </p>
      </div>
    </section>
  );
};

export default Hero;
