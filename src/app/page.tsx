'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();
  const [zoomOpen, setZoomOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/cv', label: 'CV' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fdf6f0] to-[#e7e0d8] text-black scroll-smooth">

      {/* Navigation */}
      <nav className="flex flex-wrap justify-between items-center px-6 md:px-10 py-4 bg-white/40 backdrop-blur-md shadow-md sticky top-0 z-50">
        <h1 className="text-xl md:text-2xl font-bold">Narges Vahdani</h1>
        <div className="space-x-4 md:space-x-6 text-base md:text-lg mt-2 md:mt-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition duration-300 ease-in-out ${
                pathname === link.href
                  ? 'text-blue-800 font-semibold underline'
                  : 'hover:text-blue-800'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-[90vh] px-4 md:px-10 py-10">
        <div className="w-full max-w-6xl bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-10 animate-slide-up">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

            {/* TEXT */}
            <div className="flex-1 text-justify space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold">Narges Vahdani</h2>
              <h3 className="text-lg md:text-xl font-semibold">AI Engineer & Data Scientist</h3>

              <p>
                I&apos;m Narges — an AI engineer and data scientist driven by curiosity,
                creativity, and the desire to build technology that genuinely helps
                people. My journey didn&apos;t begin in a lab; it started with puzzles,
                ideas, and a fascination with how things work.
              </p>

              <p>
                At <strong>IBM Research Zurich</strong>, I built conversational
                geospatial agents, fine-tuned LLMs with QLoRA, and engineered
                RAG systems for complex NL-to-SQL tasks. At <strong>Basler & Hofmann</strong>,
                I created digital twin intelligence through voxel-based CNNs.
                At <strong>iHomeLab</strong>, I worked on real-time sensing,
                occupancy prediction, and agricultural AI assistants.
              </p>

              <p>
                I bring warmth, clarity, and momentum to teams — shaping technology
                with purpose, empathy, and curiosity.
              </p>

              <p>
                Outside of AI, I&apos;m happiest exploring the Swiss Alps, skiing,
                hiking, painting, sculpting, or reading about astronomy and quantum
                physics.
              </p>

              <p>
                Explore my artistic world:
                <a
                  href="https://narivahdan.wixsite.com/website"
                  target="_blank"
                  className="text-blue-700 underline ml-1"
                >
                  Creative Portfolio
                </a>.
                My AI projects live here:
                <a
                  href="https://github.com/nargesghv"
                  target="_blank"
                  className="text-blue-700 underline ml-1"
                >
                  GitHub
                </a>.
              </p>

              <div className="pt-4">
                <a
                  href="/Narges-Vahdani-CV.pdf"
                  download
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md transition"
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* IMAGE */}
            <div className="w-full md:w-[45%] flex flex-col items-center">
              <div className="relative cursor-zoom-in group" onClick={() => setZoomOpen(true)}>
                <div className="rounded-2xl overflow-hidden border-4 border-white shadow-xl w-72 h-72 md:w-96 md:h-96">
                  <Image
                    src="/picture1.jpg"
                    alt="Narges in the Swiss Alps"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* CAPTION */}
                <p className="mt-3 text-center text-gray-700 text-sm font-semibold tracking-wide italic font-serif">
                  Alp Mountain — Interlaken, Switzerland
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW — 📹 Video Section */}
      <section className="px-4 md:px-10 py-10 flex justify-center">
        <div className="w-full max-w-4xl text-center space-y-6">

          <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide">
            🎥 Exploring in the Alps
          </h3>

          {/* Responsive YouTube Short */}
          <div className="relative w-full pb-[177%] md:pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/dYnQlZyq7TM"
              title="Exploring in Alps"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ZOOM OVERLAY */}
      {zoomOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 flex items-center justify-center px-4"
          onClick={() => setZoomOpen(false)}
        >
          <div className="relative max-w-4xl w-full">
            <Image
              src="/picture1.jpg"
              alt="Zoomed"
              width={1600}
              height={1600}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomOpen(false);
              }}
              className="absolute top-4 right-4 bg-white/90 px-4 py-1 rounded-full text-sm font-semibold shadow-md hover:bg-white"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
      `}</style>
    </main>
  );
}
