'use client';
import React from 'react';
import Link from 'next/link';

export default function AgenticBIMPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fdf6f0] to-[#e6e4e1] dark:from-[#111827] dark:to-[#1f2937] text-black dark:text-white px-6 md:px-16 py-14">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-xl space-y-8">
        <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-300">
          Agentic AI for BIM Workflow Automation – PyRevit + LLM Integration
        </h1>

        <p className="text-gray-800 dark:text-gray-300 text-lg">
          This case study explores the design and deployment of an <strong>Agentic AI pipeline</strong> that integrates <strong>PyRevit</strong> with a conversational large language model (LLM) agent to automate complex tasks in Building Information Modeling (BIM).
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Background & Motivation</h2>
          <p>
            The AEC (Architecture, Engineering, Construction) industry has long suffered from fragmented data flows, repetitive manual modeling in Revit, and high coordination costs. While BIM tools like Autodesk Revit offer deep functionality, navigating them efficiently still requires significant domain expertise and time.
          </p>
          <p>
            With the rise of agentic frameworks like <strong>LangGraph</strong>, <strong>AutoGPT</strong>, and OpenAI's <strong>function-calling LLMs</strong>, it's now feasible to build autonomous software agents capable of decision-making, memory retrieval, and tool execution. Our goal was to leverage these advances to embed intelligence into PyRevit and transform it into a co-pilot for architectural and construction workflows.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">System Architecture</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Interface Layer:</strong> A custom PyRevit add-in with CLI and GUI access points.</li>
            <li><strong>Agent Layer:</strong> An LLM (OpenAI GPT-4 and IBM Granite 8B) capable of understanding task objectives, querying internal APIs, and selecting workflows from a memory of prior projects.</li>
            <li><strong>Planner:</strong> Chain-of-thought + reflection-based prompt engineering allowed the agent to decompose user instructions and fetch best practices using vectorized case libraries.</li>
            <li><strong>Execution:</strong> PyRevit scripts were modularized into tool APIs callable via LangChain’s agent architecture.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Key Features</h2>
          <ul className="list-disc list-inside pl-4 mt-2">
            <li>🧠 Conversational interface for prompting the agent (“Generate a lighting plan like Project Oslo”)</li>
            <li>📚 Retrieval from similar past project configurations using vector embeddings (FAISS + Pinecone)</li>
            <li>🔁 Intelligent loop execution with backtracking on errors or constraint violations</li>
            <li>📈 Workflow logs and visualization in real time via Streamlit dashboard (optional for supervisors)</li>
            <li>🧩 API gateway enabling future extension with simulation engines (e.g., EnergyPlus)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Research Context</h2>
          <p className="mb-4">
            The use of Agentic AI in AEC is a novel but growing area. Recent works like “Toolformer: Language Models Can Teach Themselves to Use Tools” (Schick et al., 2023) and “ReAct: Synergizing Reasoning and Acting in Language Models” (Yao et al., 2022) show that embedding tool-awareness into language models allows for high-impact automation across domains.
          </p>
          <p>
            In our case, we focused on streamlining Revit workflows such as family placements, lighting analysis, sheet generation, and revision tracking—previously manual tasks that consumed hundreds of engineering hours. By using an LLM-powered agent trained on domain-specific memory, these operations are now completed in seconds.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Impact & Outcomes</h2>
          <ul className="list-disc list-inside pl-4 mt-2">
            <li>🔧 Reduced manual modeling effort by over <strong>65%</strong></li>
            <li>⏱️ Task completion time lowered from hours to <strong>seconds</strong></li>
            <li>📊 Improved reuse of project knowledge with LLM-driven memory retrieval</li>
            <li>💬 Enhanced team collaboration with chat-driven task orchestration</li>
            <li>🛠️ Created a scalable framework to plug future AI tools into the Revit ecosystem</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Next Steps</h2>
          <p>
            We plan to expand this system with dynamic plug-in loading, voice-based commands, and predictive model fine-tuning using historical performance logs. This would evolve the AI assistant into a true digital project manager for AEC teams.
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
