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
          <h2 className="text-2xl md:text-4xl font-bold text-center">Narges Vahdani</h2>
          <h3 className="text-lg md:text-xl font-semibold text-center">Data Scientist & AI Specialist</h3>

          <p> I’m Narges — a passionate and versatile Data Scientist and AI Engineer with over five years of hands-on experience building intelligent systems, machine learning pipelines, and business-driven AI solutions. I hold a Master’s degree in Data Science and have delivered transformative projects across diverse industries. My work spans from developing agentic AI platforms and automation tools at IBM Research to engineering digital twin segmentation models at Basler & Hofmann and building scalable analytics architectures at Madani Consulting. </p>

          <p> My technical toolbox is deep and modern: I specialize in large language models (LLMs), retrieval-augmented generation (RAG), cloud-native pipelines (Azure, Databricks), SQL performance tuning, and neural network design. I have a proven track record of shipping models into production, optimizing end-to-end data workflows, and bringing explainable AI into real-world applications. </p>

          <p> But what truly sets me apart is how I show up: I’m not just a builder — I’m a culture catalyst. My teams know me for my positive energy, curiosity, and relentless commitment to meaningful outcomes. I bring warmth to collaboration, clarity to ambiguity, and ownership to every challenge I take on. I care deeply about purpose, people, and performance — and I thrive in environments where I can grow while helping others grow. Whether it's aligning AI innovation with business impact or elevating team dynamics, I lead with intention and always strive to make the organization better than I found it. </p>
          <p> I’m excited to contribute to a mission-driven company where curiosity, impact, and excellence are celebrated — and where my skills in AI engineering, strategic thinking, and people-first problem solving can help shape the future. </p>
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
