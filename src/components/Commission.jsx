import React from 'react';

const Commission = () => {
  return (
    <section id="commissions" className="bg-[#FFF9F8] py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#A39897] mb-6">Commissions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/70 p-5 rounded-lg shadow-sm">
            <h3 className="font-serif text-xl text-[#7f7473]">Portraits</h3>
            <ul className="mt-2 text-[#6b6160] list-disc list-inside space-y-1">
              <li>Graphite study — A5 / A4 / A3</li>
              <li>Charcoal portrait — A4 / A3</li>
              <li>Acrylic on canvas — 12x16 / 16x20 / 18x24</li>
            </ul>
          </div>
          <div className="bg-white/70 p-5 rounded-lg shadow-sm">
            <h3 className="font-serif text-xl text-[#7f7473]">Nature & Still Life</h3>
            <ul className="mt-2 text-[#6b6160] list-disc list-inside space-y-1">
              <li>Botanical sketches — A5 / A4</li>
              <li>Still life charcoal — A4 / A3</li>
              <li>Acrylic paintings — 12x16 / 16x20</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-[#E8B7B7] bg-[#FBEAEA] text-[#7f7473] hover:bg-[#E8B7B7]/20 transition-colors"
          >
            Request a commission
          </a>
          <p className="text-sm text-[#6b6160]">Lead time varies between 2–6 weeks depending on size and medium.</p>
        </div>
      </div>
    </section>
  );
};

export default Commission;
