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
      {/* Navigation Bar */}
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
      <section
        id="home"
        className="flex items-center justify-center min-h-[90vh] px-4 md:px-10 py-10"
      >
        <div className="w-full max-w-6xl bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-10 animate-slide-up">
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8">
            {/* Text Column */}
            <div className="flex-1 text-justify space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left">
                Narges Vahdani
              </h2>
              <h3 className="text-lg md:text-xl font-semibold text-center md:text-left">
                AI Engineer &amp; Data Scientist
              </h3>

              <p>
                I&apos;m Narges — an AI engineer and data scientist driven by
                curiosity, creativity, and the desire to build technology that
                genuinely helps people. My journey didn&apos;t begin in a lab or a
                tech hub; it started with puzzles, ideas, and a fascination with
                how things work. Over time, that early spark grew into a career
                focused on intelligent systems, multi-agent architectures, and AI
                tools that make complex problems feel intuitive, human, and
                useful in the real world.
              </p>

              <p>
                My path has taken me across industries and research environments.
                At <strong>IBM Research Zurich</strong>, I built conversational
                geospatial agents, fine-tuned LLMs with QLoRA, and engineered
                RAG-based systems that transformed intricate NL-to-SQL tasks into
                natural, fluid interactions. At{' '}
                <strong>Basler &amp; Hofmann</strong>, I entered the world of
                digital twins — designing voxel-based CNNs and LLM-driven
                automation to make infrastructure data smarter and more
                accessible. At <strong>iHomeLab</strong>, I contributed to
                real-time occupancy prediction, intelligent sensing systems, and
                agricultural chatbots designed to support safer living and better
                decision-making.
              </p>

              <p>
                But I&apos;m not just a builder of systems — I&apos;m a builder of
                energy, culture, and momentum. I work with empathy, curiosity,
                and persistence. Teams know me as the person who brings clarity
                to ambiguity, connects ideas across disciplines, and shows up
                with warmth, positivity, and purpose. I care deeply about people,
                the intention behind the work, and the role technology plays in
                shaping our future.
              </p>

              <p>
                Outside of AI, you&apos;ll find me skiing or hiking in the Swiss
                Alps, painting, sculpting, reading about astronomy and quantum
                physics, or chasing whatever idea captures my curiosity next.
              </p>

              <p>
                If you&apos;d like to explore another side of me, you can visit my
                creative art space:{' '}
                <a
                  href="https://narivahdan.wixsite.com/website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline"
                >
                  my personal creative site
                </a>
                . And if you&apos;re curious about what I&apos;m building, feel free
                to follow my work on{' '}
                <a
                  href="https://github.com/nargesghv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline"
                >
                  GitHub
                </a>
                — there&apos;s always something new in progress.
              </p>

              <div className="pt-4 text-center md:text-left">
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
            <div className="w-full md:w-[40%] flex justify-center md:justify-end">
              <div
                className="relative cursor-zoom-in group"
                onClick={() => setZoomOpen(true)}
              >
                <div className="rounded-2xl overflow-hidden border-4 border-white shadow-lg w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  <Image
                    src="/picture1.jpg"
                    alt="Narges Vahdani"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center md:text-right">
                  Click to zoom
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zoom Overlay */}
      {zoomOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 flex items-center justify-center px-4"
          onClick={() => setZoomOpen(false)}
        >
          <div className="relative max-w-3xl w-full">
            <Image
              src="/picture1.jpg"
              alt="Narges Vahdani zoomed"
              width={1200}
              height={1200}
              className="w-full h-auto rounded-2xl shadow-2xl object-contain"
            />
            <button
              className="absolute top-3 right-3 bg-white/80 rounded-full px-3 py-1 text-xs font-semibold shadow hover:bg-white"
              onClick={(e) => {
                e.stopPropagation();
                setZoomOpen(false);
              }}
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
