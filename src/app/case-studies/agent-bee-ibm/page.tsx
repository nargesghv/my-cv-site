'use client';
import React from 'react';
import Link from 'next/link';

export default function AgentBeePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fdf6f0] to-[#e6e4e1] dark:from-[#111827] dark:to-[#1f2937] text-black dark:text-white px-6 md:px-16 py-14">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-xl space-y-8">
        <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-300">
          Agentic AI in Geospatial Studio – IBM Research
        </h1>

        <section className="space-y-4">
          <p>
            As part of IBM Research, I helped design and deploy agentic AI tools within the{' '}
            <strong>Geospatial Studio</strong> platform—an interactive environment used for Earth system modeling,
            climate simulation, and environmental scenario forecasting.
          </p>

          <p>
            The project focused on enhancing the AI assistant, <strong>Agent Bee</strong>, by equipping it with
            domain-specific tools that enabled intelligent, adaptive, and user-centric workflows in climate science.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Tools & Functionalities</h2>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              🧭 <strong>Feedback Loop Engine</strong>: Agent Bee could proactively query user satisfaction and offer
              refinements based on result quality and uncertainty metrics.
            </li>
            <li>
              ✨ <strong>Prompt Optimizer</strong>: Used prior conversation logs, prompt templates, and user goals to
              iteratively refine queries and improve retrieval effectiveness.
            </li>
            <li>
              🧠 <strong>Auto-Tuner for Models & Datasets</strong>: Leveraged metadata and semantic search over a vector
              store to identify high-relevance geospatial datasets and parameter configurations.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Research Focus</h2>
          <p>
            This work built upon recent advances in <strong>LLM-driven tool orchestration</strong> (LangGraph, Toolformer),
            <strong>semantic vector retrieval</strong>, and <strong>human-AI feedback loops</strong> in modeling-intensive
            systems. The implementation aligned with emerging patterns from papers like ReAct, Reflexion, and AutoGPT.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Impact</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              🚀 Enabled domain scientists to explore large-scale models without writing queries or managing parameters manually.
            </li>
            <li>
              🔍 Reduced iteration cycles for climate model calibration by over <strong>60%</strong>.
            </li>
            <li>
              🌍 Supported global research teams working on deforestation, flood impact, and carbon modeling.
            </li>
          </ul>
        </section>

        <footer className="text-center pt-10 border-t border-gray-300 dark:border-gray-700">
          <Link href="/projects" className="text-blue-600 hover:text-blue-800 underline">
            ← Back to Projects
          </Link>
        </footer>
      </div>
    </main>
  );
}
