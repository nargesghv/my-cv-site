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
            {/* Text Column */}
            <div className="flex-1 text-justify space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold">Narges Vahdani</h2>
              <h3 className="text-lg md:text-xl font-semibold">
                AI Engineer &amp; Data Scientist
              </h3>

              <p>
                I&apos;m Narges, an AI engineer and data scientist who&apos;s endlessly
                curious about how things work and why people do what they do. My
                journey into tech didn&apos;t start in a research lab; it started with
                simple puzzles, creative projects, and a fascination with ideas.
                Over time, that curiosity evolved into a passion for building AI
                systems that feel intuitive, helpful, and meaningful in real life.
              </p>

              <p>
                My work has taken me through some incredible environments. At{' '}
                <strong>IBM Research Zurich</strong>, I designed conversational
                geospatial agents, fine-tuned LLMs with QLoRA, and built RAG systems
                that turned complicated NL-to-SQL problems into smooth, natural
                interactions. At <strong>Basler &amp; Hofmann</strong>, I stepped into
                the world of digital twins, using voxel-based CNNs and LLM-powered
                automation to make infrastructure data smarter and easier to work
                with. And at <strong>iHomeLab</strong>, I explored intelligent sensing
                and real-time prediction systems that support safer buildings and
                better decision-making — from elderly-care environments to tools that
                help farmers in the field.
              </p>

              <p>
                Beyond the technical work, I&apos;m someone who cares deeply about
                people, purpose, and the energy a team builds together. I love
                bringing clarity to ambiguous problems, connecting ideas across
                disciplines, and creating momentum where it matters. I show up with
                warmth, curiosity, and intention and I do my best work in teams
                where creativity and real-world impact meet.
              </p>

              <p>
                When I&apos;m not deep in code or research, I&apos;m usually somewhere in
                the Swiss Alps, skiing, hiking, or just breathing in the mountains.
                I paint, sculpt, redesign furniture, experiment with interior and
                fashion concepts, and happily lose myself in books and videos about
                astronomy, quantum physics, and the mysteries of the universe.
              </p>

              <p>
                If you&apos;re curious about the artistic side of my life, you&apos;re
                welcome to explore it here:{' '}
                <a
                  href="https://narivahdan.wixsite.com/website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline"
                >
                  my creative space
                </a>
                . And if you want to see what I&apos;m building in AI, you can find my
                latest experiments and projects on{' '}
                <a
                  href="https://github.com/nargesghv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline"
                >
                  GitHub
                </a>
                .
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

            {/* Image Column */}
            <div className="w-full md:w-[45%] flex flex-col items-center">
              <div
                className="relative cursor-zoom-in group"
                onClick={() => setZoomOpen(true)}
              >
                <div className="rounded-2xl overflow-hidden border-4 border-white shadow-xl w-72 h-72 md:w-96 md:h-96">
                  <Image
                    src="/picture1.jpg"
                    alt="Narges in the Swiss Alps"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-center text-gray-700 text-sm font-semibold tracking-wide italic font-serif">
                  Alp Mountain — Interlaken, Switzerland
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-4 md:px-10 py-10 flex justify-center">
        <div className="w-full max-w-4xl text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide">
            🎥 Explore more about me 
          </h3>

          {/* Responsive YouTube Short Embed */}
          <div className="relative w-full pb-[177%] h-0 overflow-hidden rounded-2xl shadow-xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              src="https://www.youtube.com/shorts/gkBJSAM7Dl4"
              title="Exploring in Alps"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Zoom Overlay */}
      {zoomOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 flex items-center justify-center px-4"
          onClick={() => setZoomOpen(false)}
        >
          <div className="relative max-w-4xl w-full">
            <Image
              src="/picture1.jpg"
              alt="Zoomed portrait of Narges in the Swiss Alps"
              width={1600}
              height={1600}
              className="w-full h-auto rounded-2xl shadow-2xl object-contain"
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

