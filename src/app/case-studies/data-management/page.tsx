'use client';
import React from 'react';
import Link from 'next/link';

export default function DataManagementCaseStudy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fdf6f0] to-[#e6e4e1] dark:from-[#111827] dark:to-[#1f2937] text-black dark:text-white px-6 md:px-16 py-14">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-xl space-y-8">
        <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-300">
          Data Management and SQL: Conversational Query System for HR Database
        </h1>

        <p className="text-gray-800 dark:text-gray-300 text-lg">
          While working at <strong>Basler & Hofmann</strong>, I developed an AI-powered question-answering system that transformed how non-technical staff accessed data from internal HR databases (Azura & PostgreSQL).
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Project Goal</h2>
          <p>
            The aim was to build a conversational interface that allowed team members to ask questions in plain language and retrieve data without writing SQL.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Key Technologies</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 mt-2">
            <li>LLMs (Large Language Models)</li>
            <li>PostgreSQL</li>
            <li>Azura Database</li>
            <li>LangChain Agent Framework</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Pipeline Overview</h2>
          <ol className="list-decimal list-inside pl-4 space-y-2 mt-2">
            <li>User inputs a natural language question (e.g., “How many employees joined in 2023?”)</li>
            <li>The pipeline detects intent and extracts key entities</li>
            <li>An LLM generates the corresponding SQL query</li>
            <li>The query runs on the Azura or PostgreSQL database</li>
            <li>The system returns a concise, human-readable answer</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Impact</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 mt-2">
            <li>✅ Empowered HR and management teams to access data with zero SQL experience</li>
            <li>✅ Replaced an outdated Perl-based system with a modern, intelligent interface</li>
            <li>✅ Reduced manual database queries by 85%</li>
            <li>✅ Enhanced decision-making and efficiency in administrative processes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Lessons & Takeaways</h2>
          <p>
            This project deepened my experience in building secure database interfaces and taught me how to balance LLM flexibility with structured query execution. I also explored fallback strategies when LLM-generated queries failed, using intent-based template matching and SQL syntax validators.
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
