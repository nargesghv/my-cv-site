'use client';
import React from 'react';
import Link from 'next/link';

export default function IHomeLabRAGChatbotPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fdf6f0] to-[#e6e4e1] dark:from-[#111827] dark:to-[#1f2937] text-black dark:text-white px-6 md:px-16 py-14">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-xl space-y-8">
        <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-300">
          Academic Chatbot with RAG – iHomeLab
        </h1>

        <p className="text-gray-800 dark:text-gray-300 text-lg">
          At <strong>iHomeLab</strong>, I led the development of an intelligent chatbot system to assist students at HSLU with automated answers and real-time feedback collection.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Objective</h2>
          <p>
            The project aimed to streamline academic support by creating a conversational interface powered by Retrieval-Augmented Generation (RAG) and Large Language Models.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Key Tools & Technologies</h2>
          <ul className="list-disc list-inside pl-4 mt-2">
            <li>LLAMA 3.2 via Ollama</li>
            <li>RAG and CRAG architecture</li>
            <li>OpenAPI for LLM hosting</li>
            <li>Python, Pandas, Streamlit</li>
            <li>Web scraping for university data ingestion</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Implementation</h2>
          <p className="mb-4">
            The chatbot pipeline involved structured scraping of the university website and syllabus repositories, which were indexed for fast semantic search using vector databases. RAG enabled the system to provide contextual responses even for new or rare queries.
          </p>
          <p>
            CRAG was explored to combine concise summaries with context documents, improving trust and transparency. The chatbot was deployed with a Streamlit frontend and supported user feedback to continuously improve its accuracy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Impact</h2>
          <ul className="list-disc list-inside pl-4 mt-2">
            <li>✅ Automated hundreds of common academic FAQs</li>
            <li>✅ Provided multilingual access to course and department-level knowledge</li>
            <li>✅ Enhanced the student experience with instant, 24/7 support</li>
            <li>✅ Scaled across faculties using modular pipeline architecture</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Visual Demo (Optional)</h2>
          <p>
            I can also help you include a Streamlit GIF/demo or chatbot screenshot here if you'd like — just let me know!
          </p>
        </section>

        <footer className="text-center mt-10">
          <Link href="/projects" className="text-blue-600 hover:text-blue-800 underline">
            ← Back to Projects
          </Link>
        </footer>
      </div>
    </main>
  );
}
