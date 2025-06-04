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
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-blue-900 dark:text-white">
            Narges Vahdani
          </h1>
          <h2 className="text-sm md:text-base text-gray-600 dark:text-gray-300">
            Data Scientist &amp; AI Engineer
          </h2>
        </div>
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
            <h1 className="text-4xl font-bold text-blue-900 dark:text-white">
              Narges Vahdani
            </h1>
            <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">
              Data Scientist &amp; AI Engineer
            </h2>
            <p className="text-md md:text-lg text-gray-700 dark:text-gray-300">
              📍 8952 Zurich | ✉️{' '}
              <a
                href="mailto:nargesvahdani@gmail.com"
                className="text-blue-600 hover:underline"
              >
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

        {/* Summary */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-300 pb-1 mb-4 text-blue-800 dark:text-blue-300">
            Summary
          </h2>
          <p className="text-justify text-gray-800 dark:text-gray-300 leading-relaxed">
            Creative and driven professional blending technology, design, and applied science to tackle
            real-world challenges. Skilled at hands-on development and strategic problem-solving, with
            a practical, can-do attitude and a collaborative spirit. Energetic and adaptable, I thrive on
            learning new skills, overcoming obstacles, and contributing to impactful projects.
          </p>
        </section>

        {/* Work Experiences */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-300 pb-1 mb-4 text-blue-800 dark:text-blue-300">
            Work Experience
          </h2>
          <div className="space-y-8">
            {/* IBM Research */}
            <div>
              <h3 className="text-xl font-bold">Master Thesis &amp; Intern</h3>
              <p className="italic text-gray-600 dark:text-gray-400">
                Multidimensional Database – IBM Research, Zurich | Sep 2024 – Feb 2025
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-800 dark:text-gray-300">
                <li>
                  Collaborated on the Agent Bee team for IBM’s Geospatial Studio, adding agentic tools that enable automatic
                  prompt refinement, on-the-fly model tuning, and semantic dataset selection via vector-based retrieval.
                </li>
                <li>
                  Partnered with the Zurich NL-to-SQL team to fine-tune models on client data; when data quality was insufficient,
                  designed an end-to-end pipeline using IBM Granite 3 and advanced prompt engineering to generate high-quality
                  synthetic GeospatialSQL training data—enabling LLMs to be fine-tuned on domain-specific spatial tasks with
                  minimal real data.
                </li>
                <li>
                  Created a user-friendly, multimodal natural language–to–SQL interface for IBM’s multidimensional geospatial
                  database by fine-tuning LLMs (IBM Granite, LLaMA 3.2) with SFT, QLoRA, and RLHF—ensuring accurate, interpretable
                  geospatial query results through targeted benchmark evaluations.
                </li>
              </ul>
            </div>

            {/* PMO Group */}
            <div>
              <h3 className="text-xl font-bold">Director, Data Engineering</h3>
              <p className="italic text-gray-600 dark:text-gray-400">
                PMO Group (Business Analysis) – Toronto | Sep 2018 – Jan 2021
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-800 dark:text-gray-300">
                <li>
                  Built a predictive real estate analytics platform integrating Power BI and SAP, delivering market insights to executives.
                </li>
                <li>
                  Deployed a real-time app using fine-tuned regression models to forecast housing prices across Toronto neighborhoods.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-300 pb-1 mb-4 text-blue-800 dark:text-blue-300">
            Projects
          </h2>
          <div className="space-y-8">
            {/* iHomeLab */}
            <div>
              <h3 className="text-xl font-bold">Research Assistant</h3>
              <p className="italic text-gray-600 dark:text-gray-400">
                iHomeLab – Lucerne University, Lucerne | Mar 2023 – Feb 2025
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-800 dark:text-gray-300">
                <li>
                  Addressed farmers’ need for real-time technical support: built a RAG-powered educational chatbot
                  (LLAMA 3.1 &amp; CRAG) using AWS Lambda and S3 to enable on-demand Q&amp;A and feedback in the agriculture
                  domain—resulting in measurable improvements in crop management and production quality.
                </li>
                <li>
                  Improved weak-signal detection for Ambient Assisted Living: engineered a framework combining vector similarity
                  search and clustering to enhance noisy AAL sensor data, then trained CNN/RNN time-series models to predict
                  elderly presence in rooms—enabling more reliable monitoring and informing the design of safer, stress-free
                  living environments.
                </li>
              </ul>
            </div>

            {/* Basler & Hofmann */}
            <div>
              <h3 className="text-xl font-bold">Data Engineer Intern</h3>
              <p className="italic text-gray-600 dark:text-gray-400">
                Basler &amp; Hofmann – Zurich | Apr 2023 – May 2024
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-800 dark:text-gray-300">
                <li>
                  Enhanced B&amp;H Digital Twin Quality: developed voxel-based CNN models for point cloud segmentation to label
                  each point—enabling higher-fidelity infrastructure visualization and improving data quality for digital twin
                  platform developers.
                </li>
                <li>
                  Accelerated HR Data Retrieval: built an agentic Q&amp;A pipeline over HR databases by applying LLMs for automated
                  SQL generation and querying—significantly speeding up data extraction for the HR team.
                </li>
                <li>
                  Streamlined Revit Workflows with AI: architected a hybrid PyRevit + LLM pipeline for rule-based model validation
                  and task automation—delivering a 30% workflow speed-up, allowing non-technical staff to interact via Revit and
                  reducing project time while maintaining optimized results.
                </li>
              </ul>
            </div>

            {/* Standalone Projects */}
            <div>
              <h3 className="text-xl font-bold">Accent Classification from Voice</h3>
              <p className="italic text-gray-600 dark:text-gray-400">Tech: Wav2Vec2, Common Voice, PyTorch, Hugging Face, Torchaudio, Librosa, Scikit-learn</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Synthetic Data Generation Pipeline for Enterprise AI</h3>
              <p className="italic text-gray-600 dark:text-gray-400">
                Tech: Large Language Models (LLMs), Prompt Engineering, Advanced Prompt Engineering
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Realtime Multi-Agent Conversational System</h3>
              <p className="italic text-gray-600 dark:text-gray-400">
                Tech: LangChain, LangGraph, MCP, LLM, Python, Tool Augmentation, Asynchronous Programming, OpenAI, DALL·E,
                Matplotlib, Prompt Engineering, Agent Design, Server-Sent Events, Conversational AI, Generative AI, Multi-Agent Systems
              </p>
            </div>
          </div>
        </section>

        {/* Awards & Certification */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-300 pb-1 mb-4 text-blue-800 dark:text-blue-300">
            Awards &amp; Certification
          </h2>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300">
            <li>
              Python Programming Certificate (2020) &mdash; EDUCBA Python Institute, Toronto, Canada
            </li>
            <li>
              Certificate in AWS Cloud Architect (2018) &mdash; Metro College of Technology, Toronto, Canada
            </li>
            <li>
              Professional Diploma in Interior/Fashion Design (2012) &mdash; George Brown College, Toronto, Canada
            </li>
          </ul>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-300 pb-1 mb-4 text-blue-800 dark:text-blue-300">
            Education
          </h2>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300">
            <li>
              Master of Science in Data Science &mdash; HSLU (Lucerne University of Applied Sciences) | Sep 2022 – Feb 2025
            </li>
            <li>
              Bachelor of Engineering in Electrical Engineering (Automation &amp; Control Systems) &mdash; IKIU | Sep 2007 – Jan 2011
            </li>
          </ul>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-300 pb-1 mb-4 text-blue-800 dark:text-blue-300">
            Technical Skills
          </h2>
          <ul className="columns-2 md:columns-3 gap-4 list-disc list-inside text-gray-800 dark:text-gray-300">
            <li>AI/ML: GPT-4, LLaMA, Hugging Face, PyTorch, TensorFlow, Scikit-learn, RLHF, QLoRA, Wav2Vec2</li>
            <li>GenAI &amp; Agents: LangChain, LangGraph, OpenAI Assistants API, RAG, GraphRAG, Prompt Engineering</li>
            <li>Computer Vision: YOLOv8, OpenCV, 3D Reconstruction, SLAM, Image-to-Text, WebXR, Unity3D</li>
            <li>Data Engineering: Kafka, Airflow, FastAPI, Docker, Kubernetes, PostgreSQL, MongoDB, DBT</li>
            <li>MLOps &amp; Deployment: CI/CD (GitHub Actions), Azure, GCP (Vertex AI, BigQuery), AWS (SageMaker)</li>
            <li>Analytics &amp; BI: Power BI, Streamlit, SQL, Experiment Design, A/B Testing, Feature Importance</li>
            <li>NLP &amp; Search: Text-to-SQL, Semantic Search, pgvector, Neo4j, Cypher, LangChain Tools</li>
            <li>Software Dev: REST APIs, Pydantic, JSON, Jupyter, React (basic integration)</li>
            <li>Soft Skills: Technical leadership, agile mindset, cross-functional teamwork, mentoring</li>
            <li>Languages: English (fluent)</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-center py-10 mt-10 border-t border-gray-300 dark:border-gray-700">
          <p className="text-sm mb-3">© {new Date().getFullYear()} Narges Vahdani. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:nargesvahdani@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ✉️ Email
            </a>
            <a
              href="https://www.linkedin.com/in/narghotbi/"
              target="_blank"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              🔗 LinkedIn
            </a>
            <a
              href="/Narges-Vahdani-CV.pdf"
              download
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              📄 CV
            </a>
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
