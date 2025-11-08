import React, { useState } from 'react';

const artworks = [
  {
    src: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop',
    title: 'Breath Between',
    medium: 'Charcoal on paper',
    year: '2023',
    caption: 'Where the hush gathers at the edge of a thought.',
  },
  {
    src: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
    title: 'A Quiet Orchard',
    medium: 'Acrylic on canvas',
    year: '2024',
    caption: 'Small birds of light lingering on the skin of dawn.',
  },
  {
    src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop',
    title: 'Holdfast',
    medium: 'Graphite study',
    year: '2022',
    caption: 'Knuckles of tide, patient as prayer.',
  },
  {
    src: 'https://images.unsplash.com/photo-1668764201236-d9cd7cd5b024?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTb2Z0JTIwV2VhdGhlcnxlbnwwfDB8fHwxNzYyNTY5NzUzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    title: 'Soft Weather',
    medium: 'Mixed media',
    year: '2025',
    caption: 'Rain writing names we once knew by heart.',
  },
  {
    src: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop',
    title: 'Remembering Hands',
    medium: 'Charcoal & gesso',
    year: '2024',
    caption: 'The palm keeps what the mouth lets go.',
  },
  {
    src: 'https://images.unsplash.com/photo-1709785595384-2fdbed68828b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdGlsbCUyMFRpZGV8ZW58MHwwfHx8MTc2MjU2OTc1M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    title: 'Still Tide',
    medium: 'Acrylic glaze',
    year: '2023',
    caption: 'Blue folded over blue until it breathes.',
  },
];

const Gallery = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="bg-[#FFF9F8] py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#A39897] mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((art, idx) => (
            <button
              key={idx}
              onClick={() => setActive(art)}
              className="group text-left bg-white/60 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              aria-label={`Open ${art.title}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={art.src}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-xl text-[#7f7473]">{art.title}</h3>
                <p className="text-sm text-[#6b6160] mt-1">
                  {art.medium} • {art.year}
                </p>
                <p className="text-sm text-[#6b6160] mt-2 italic">{art.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <div
            className="max-w-4xl w-full bg-[#FFF9F8] rounded-lg overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-[#FBEAEA]">
              <img src={active.src} alt={active.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-serif text-2xl text-[#A39897]">{active.title}</h4>
                  <p className="text-sm text-[#6b6160] mt-1">
                    {active.medium} • {active.year}
                  </p>
                </div>
                <button
                  onClick={() => setActive(null)}
                  className="text-[#A39897] hover:text-[#7f7473] px-3 py-1 rounded-md border border-[#E8B7B7]/60 hover:bg-[#FBEAEA]/60"
                  aria-label="Close"
                >
                  Close
                </button>
              </div>
              <p className="text-[#6b6160] mt-3 italic">{active.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
