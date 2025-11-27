'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();

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
        className="flex flex-col items-center justify-center min-h-[90vh] text-center px-4 md:px-6"
      >
        {/* Profile Picture */}
        <div className="relative mb-6 animate-fade-in">
          <Image
            src="/picture1.jpg"
            alt="Narges Vahdani"
            width={140}
            height={140}
            className="rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>

        {/* Text Block */}
        <div className="backdrop-blur-md bg-white/80 text-black p-6 md:p-10 rounded-xl shadow-xl max-w-3xl animate-slide-up text-justify space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            Narges Vahdani
          </h2>
          <h3 className="text-lg md:text-xl font-semibold text-center">
            AI Engineer &amp; Data Scientist
          </h3>

          <p>
            I&apos;m Narges — an AI engineer and data scientist driven by curiosity,
            creativity, and the desire to build technology that genuinely helps
            people. My journey didn&apos;t begin in a lab or a tech hub; it started
            with puzzles, ideas, and a fascination with how things work. Over
            time, that early spark grew into a career focused on intelligent
            systems, multi-agent architectures, and AI tools that make complex
            problems feel intuitive, human, and useful in the real world.
          </p>

          <p>
            My path has taken me across industries and research environments. At{' '}
            <strong>IBM Research Zurich</strong>, I built conversational
            geospatial agents, fine-tuned LLMs with QLoRA, and engineered
            RAG-based systems that transformed intricate NL-to-SQL tasks into
            natural, fluid interactions. At <strong>Basler &amp; Hofmann</strong>,
            I entered the world of digital twins — designing voxel-based CNNs
            and LLM-driven automation to make infrastructure data smarter and
            more accessible. At <strong>iHomeLab</strong>, I contributed to
            real-time occupancy prediction, intelligent sensing systems, and
            agricultural chatbots designed to support safer living and better
            decision-making.
          </p>

          <p>
            But I&apos;m not just a builder of systems I&apos;m a builder of
            energy, culture, and momentum. I work with empathy, curiosity, and
            persistence. Teams know me as the person who brings clarity to
            ambiguity, who connects ideas across disciplines, and who shows up
            with warmth, positivity, and purpose. I care deeply about people,
            the intention behind the work, and the role technology plays in
            shaping our future.
          </p>

          <p>
            Outside of AI, you&apos;ll find me skiing or hiking in the Swiss Alps,
            painting, sculpting, reading about astronomy and quantum physics, or
            chasing whatever idea captures my curiosity next.
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
            . And if you&apos;re curious about what I&apos;m building, feel free to
            follow my work on{' '}
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

          <div className="text-center pt-4">
            <a
              href="/Narges-Vahdani-CV.pdf"
              download
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

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

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-in;
        }
      `}</style>
    </main>
  );
}
