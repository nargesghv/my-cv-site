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
      <section id="home" className="flex flex-col items-center justify-center min-h-[90vh] text-center px-4 md:px-6">
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
          <h2 className="text-2xl md:text-4xl font-bold text-center">Narges Ghotbizadeh Vahdani</h2>
          <h3 className="text-lg md:text-xl font-semibold text-center">Data Scientist & AI Specialist</h3>

          <p>
            I’m Narges Ghotbizadeh Vahdani, a Data Scientist and AI specialist with over five years of professional experience in machine learning, business analytics, and intelligent system development. I hold a Master’s degree in Data Science and have delivered impactful solutions across various industries—from developing scalable AI pipelines and agentic automation platforms at IBM Research and Madani Consulting, to building advanced segmentation models for digital twin systems at Basler & Hofmann.
          </p>

          <p>
            My work is grounded in deep technical expertise, including NLP, LLMs, RAG, SQL optimization, cloud computing (Azure, Databricks), and neural network architecture.
          </p>

          <p>
            But I’m also more than a technologist. I’m a deeply creative individual who thrives on both collaboration and innovation. In every team I’ve joined, I’ve been recognized for my ability to seamlessly integrate, bring positive, energetic vibes, and push relentlessly toward results. My managers have consistently appreciated my team-first mindset, passion for quality, and tireless commitment to getting the job done—never leaving a challenge unresolved.
          </p>

          <p>
            Outside of data, I’m a sporty and artistic soul. I love hiking, volleyball, and biking, and I channel my creativity through interior design, fashion, jewelry making, and furniture renovation. You can explore a glimpse of my artistic journey at{' '}
            <a
              href="https://narivahdan.wixsite.com/website"
              target="_blank"
              className="text-blue-700 underline"
            >
              my personal creative site
            </a>.
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
