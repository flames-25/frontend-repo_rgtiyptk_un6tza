import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#FBEAEA] py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#A39897] mb-6">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <p className="text-[#6b6160]">
              For commissions, exhibition inquiries, or collaborations, please reach out via email or Instagram.
            </p>
            <div>
              <a href="mailto:natasha.art@example.com" className="text-[#7f7473] underline hover:text-[#A39897]">
                natasha.art@example.com
              </a>
            </div>
            <div>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="text-[#7f7473] underline hover:text-[#A39897]">
                Instagram @ntsha.art
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-[#FFF9F8] p-5 rounded-lg shadow-sm space-y-3"
          >
            <label className="block">
              <span className="text-sm text-[#7f7473]">Name</span>
              <input
                type="text"
                className="mt-1 w-full rounded-md border border-[#E8B7B7]/60 bg-white/80 px-3 py-2 text-[#6b6160] placeholder-[#A39897] focus:outline-none focus:ring-2 focus:ring-[#E8B7B7]"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-sm text-[#7f7473]">Email</span>
              <input
                type="email"
                className="mt-1 w-full rounded-md border border-[#E8B7B7]/60 bg-white/80 px-3 py-2 text-[#6b6160] placeholder-[#A39897] focus:outline-none focus:ring-2 focus:ring-[#E8B7B7]"
                placeholder="you@example.com"
              />
            </label>
            <label className="block">
              <span className="text-sm text-[#7f7473]">Message</span>
              <textarea
                className="mt-1 w-full rounded-md border border-[#E8B7B7]/60 bg-white/80 px-3 py-2 text-[#6b6160] placeholder-[#A39897] focus:outline-none focus:ring-2 focus:ring-[#E8B7B7]"
                rows="4"
                placeholder="Tell me about your project or question"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-[#E8B7B7] bg-[#FBEAEA] text-[#7f7473] hover:bg-[#E8B7B7]/20 transition-colors"
            >
              Send inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
