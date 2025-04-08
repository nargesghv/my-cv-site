'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CVPage() {
  const handlePrint = () => window.print();
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/cv', label: 'CV' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f9fafb] to-[#e5e7eb] dark:from-[#111827] dark:to-[#1f2937] text-black dark:text-white px-6 md:px-20 py-10 transition-colors duration-700">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-4 bg-white/60 dark:bg-gray-800/80 backdrop-blur-lg shadow-md sticky top-0 z-50 mb-8 rounded-xl">
        <h1 className="text-xl md:text-2xl font-bold text-blue-900 dark:text-white">Narges Vahdani</h1>
        <div className="flex gap-4 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition duration-300 ease-in-out px-3 py-1 rounded-md ${
                pathname === link.href
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-white font-semibold shadow-sm'
                  : 'hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-700 dark:hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 text-sm px-3 py-1 rounded-full border border-blue-600 text-blue-600 dark:border-white dark:text-white hover:bg-blue-600 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </nav>

      <section className="max-w-5xl mx-auto bg-white dark:bg-gray-900 p-8 md:p-14 shadow-xl rounded-3xl space-y-12 print:shadow-none print:bg-white animate-fade-in">
        {/* Header */}
        <header className="text-center space-y-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src="/profile.jpg"
              alt="Narges Vahdani"
              width={130}
              height={130}
              className="rounded-full border-4 border-blue-200 shadow-md"
            />
            <h1 className="text-4xl font-bold text-blue-900 dark:text-white">Narges Vahdani</h1>
            <p className="text-md md:text-lg text-gray-700 dark:text-gray-300">
              📍 8952 Zurich | ✉️{' '}
              <a href="mailto:nargesvahdani@gmail.com" className="text-blue-600 hover:underline">
                nargesvahdani@gmail.com
              </a>{' '}
              | 📞 +41 76 270 0440
            </p>
            <a
              href="https://www.linkedin.com/in/narghotbi/"
              className="text-blue-600 hover:underline font-medium"
              target="_blank"
            >
              View LinkedIn Profile ↗
            </a>
            <div className="space-x-4 pt-2 print:hidden">
              <a
                href="/Narges-Vahdani-CV.pdf"
                download
                className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-full shadow-md transition-all"
              >
                📄 Download CV
              </a>
              <button
                onClick={handlePrint}
                className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-full shadow-md transition-all"
              >
                🖨️ Print Page
              </button>
            </div>
          </div>
        </header>

        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-300 pb-1 mb-4 text-blue-800 dark:text-blue-300">
            Professional Summary
          </h2>
          <p className="text-justify text-gray-800 dark:text-gray-300 leading-relaxed">
            I am a Data Scientist and AI specialist with over five years of professional experience in machine learning,
            intelligent automation, and real-time data solutions. With a strong academic foundation in data science and
            electrical engineering, I’ve developed advanced pipelines, deployed LLMs, and led interdisciplinary teams.
            I am deeply committed to leveraging AI for business transformation through rigorous modeling, intuitive system design,
            and scalable infrastructure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-4 text-blue-800 dark:text-blue-300">Experience</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-bold">IBM Research (2024–2025)</h3>
              <ul className="list-disc list-inside">
                <li>Developed a scalable LLM-powered SQL generation pipeline with PostgreSQL + LangChain.</li>
                <li>Fine-tuned IBM Granite 8B with QLoRA for spatial query optimization (AgentBee, NASA project).</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Basler & Hofmann (2023–2024)</h3>
              <ul className="list-disc list-inside">
                <li>Segmented point cloud data using voxel-based CNNs with similarity-based data repair.</li>
                <li>Integrated PyRevit and AI agents to automate Revit workflows and enable chat-based interactions.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">iHomeLab (2023–2025)</h3>
              <ul className="list-disc list-inside">
                <li>Developed RAG-based question answering and real-time IoT analytics for smart elderly care.</li>
                <li>Improved engagement and information accessibility using web scraping + LangGraph agents.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-4 text-blue-800 dark:text-blue-300">Projects</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-300">
            <li><strong>Financial AI Assistant:</strong> Built real-time Kafka + LangGraph pipeline to automate invoice processing & payment logic with OpenAI Assistants.</li>
            <li><strong>Signal Analytics:</strong> AI-driven clustering of IoT sensor data to enhance smart home reliability for elderly safety.</li>
            <li><strong>Q&A Chatbot (RAG):</strong> Multilingual Streamlit chatbot with LLAMA 3.2 + RAG + OpenAPI for HSLU academic support.</li>
            <li><strong>ETL Pipelines:</strong> Spark-based, cloud-integrated pipelines for deduplication, cleansing, and streaming large-scale engineering data.</li>
            <li><strong>Agricultural NLP:</strong> LangChain-based RAG chatbot hosted on AWS Lambda Edge for rural data access and decision-making.</li>
            <li><strong>Point Cloud ML – Basler & Hofmann:</strong> Developed voxel-based CNN with similarity-based reconstruction achieving 78% accuracy. Evaluated with IoU & F1 score, powering a 3D digital twin platform.</li>
            <li><strong>PostgreSQL AI Pipeline – IBM Research:</strong> Implemented AI-powered SQL generation using LangChain and BIRD/custom evaluation framework to retrieve spatial satellite data.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-4 text-blue-800 dark:text-blue-300">Education</h2>
          <ul className="list-disc list-inside">
            <li>Master of Science in Data Science – HSLU, Lucerne (2022–2025)</li>
            <li>Bachelor of Engineering in Electrical Engineering – IKU (2011)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-4 text-blue-800 dark:text-blue-300">Certificates</h2>
          <ul className="list-disc list-inside">
            <li>Diploma in Python – EDUCBA, Toronto (2020)</li>
            <li>Diploma in AWS Cloud Architect – Metro College of Tech, Toronto (2018)</li>
            <li>Diploma in Interior Architecture – George Brown College (2012)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-4 text-blue-800 dark:text-blue-300">Technical Skills</h2>
          <ul className="columns-2 md:columns-3 gap-4 list-disc list-inside">
            <li>AWS, Azure, GCP</li>
            <li>Python, JavaScript, Java, C++</li>
            <li>PyTorch, TensorFlow, Scikit-learn</li>
            <li>PostgreSQL, MongoDB, Redis</li>
            <li>Kafka, Spark, Flink</li>
            <li>Docker, Kubernetes, Jenkins</li>
            <li>LLMs, RAG, GANs, LangGraph</li>
            <li>GeoPandas, QGIS, PostGIS</li>
            <li>Git, RESTful APIs, Web Scraping</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-center py-10 mt-10 border-t border-gray-300 dark:border-gray-700">
          <p className="text-sm mb-3">© {new Date().getFullYear()} Narges Vahdani. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:nargesvahdani@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">✉️ Email</a>
            <a href="https://www.linkedin.com/in/narghotbi/" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">🔗 LinkedIn</a>
            <a href="/Narges-Vahdani-CV.pdf" download className="text-blue-600 dark:text-blue-400 hover:underline">📄 CV</a>
          </div>
        </footer>

        <style jsx>{`
          @keyframes fade-in {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 1.2s ease-in-out;
          }
        `}</style>
      </section>
    </main>
  );
}
