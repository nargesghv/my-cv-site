'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';

type Project = {
  title: string;
  tech: string;
  tag: string;
  description: string;
  impact: string;
  link: string;
  report: string;
  image?: string; // <- make this optional
};

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Point Cloud Segmentation – Basler & Hofmann',
      tech: 'CNNs, PyTorch, 3D ML, Similarity Repair',
      tag: 'Computer Vision',
      image: '/logos/basler.png',
      description:
        'Developed a voxel-based CNN for segmenting 3D point clouds and repairing missing data using similarity-based techniques. Improved digital twin accuracy by 30%. Evaluated using IoU and F1-score.',
      impact:
        'Enhanced B&H’s digital twin platform with precise spatial modeling, giving clients better infrastructure insights.',
      link: '/case-studies/basler-cnn',
      report: '/downloads/basler-report.pdf',
    },
    {
      title: 'NLtoGeospatial SQL – IBM Research',
      tech: 'LangChain, PostgreSQL, PostGIS, Prompt Engineering, LLMs, QLoRA Finetuning',
      tag: 'Agentic AI',
      image: '/logos/ibm.png',
      description:
        'Built an AI pipeline to convert natural language to SQL using intent detection, keyword extraction, and LLM-based query generation. Benchmarked on BIRD and a custom evaluation set.',
      impact:
        'Empowered non-technical users to interact with spatial databases. Enabled fast and accurate data access from complex satellite layers.',
      link: '/case-studies/ibm-sql-agent',
      report: '/downloads/ibm-sql-report.pdf',
    },
    {
      title: 'AI-Driven Financial Automation Platform – Madani Consulting',
      tech: 'Azure Databricks, Kafka, PySpark, OpenAI, Event-Driven Systems',
      tag: 'Data Management',
      image: '/logos/madani.png',
      description:
        'Led the design of a real-time event-driven automation platform for financial workflows using AI agents, Kafka, and Databricks. Optimized reconciliation, fraud detection, and cross-service triggers.',
      impact:
        'Enabled scalable, intelligent financial pipelines with autonomous agents, reducing manual workload by 70% and increasing workflow efficiency by 80%.',
      link: '/case-studies/madani-automation',
      report: '/downloads/madani-report.pdf',
    },
    {
      title: 'LLM-based Syntactic NLtoSQL Data Generation – IBM Research',
      tech: 'IBM Granite 8B, Meta Prompting, SQL Generation, QA Pairs, OpenAPI, Chain-of-Thought, Data Management',
      tag: 'LLMs',
      image: '/logos/ibm.png',
      description:
        'Used LLMs to generate high-quality geospatial SQL datasets by guiding models to form subtopics and corresponding Q&A pairs. Included validation and refinement to ensure SQL correctness and diversity.',
      impact:
        'Delivered a robust data generation pipeline enhancing IBM’s SQL model training with diverse, high-quality samples.',
      link: '/case-studies/ibm-sql-gen',
      report: '/downloads/sql-gen-report.pdf',
    },
    {
      title: 'Fine-tuning LLMs for Text-to-SQL Tasks – IBM Research',
      tech: 'Meta Llama 3.1, IBM Granite 8B, QLoRA, Prompt Engineering, Syntactic Data Generation',
      tag: 'LLMs',
      image: '/logos/ibm.png',
      description:
        'Fine-tuned transformer models on text-to-SQL datasets using QLoRA and advanced prompting techniques. Enhanced SQL generation performance via local/Ollama and OpenAPI evaluations.',
      impact:
        'Improved model accuracy and SQL output validity for enterprise-grade AI-driven database interfaces.',
      link: '/case-studies/ibm-tuning-llms',
      report: '/downloads/ibm-tuning-llms.pdf',
    },
    {
      title: 'Real-Time Market Analysis with SAP & Power BI – PMO Group',
      tech: 'Power BI, SAP S/4HANA, Predictive Dashboards, App Development',
      tag: 'Business Intelligence',
      image: '/logos/pmo.png',
      description:
        'Designed an advanced analytics tool that integrated SAP ERP with Power BI dashboards for real-time investment decision-making during the COVID-19 market shift.',
      impact:
        'Provided clients with critical market insights and improved internal operational resilience and agility.',
      link: '/case-studies/pmo-bi-tool',
      report: '/downloads/pmo-bi.pdf',
    },
    {
      title: 'Menopause Prediction with Predictive Modeling – Anna Startup',
      tech: 'Gradient Boosting, Regression, Feature Engineering, Predictive Modeling, Data Preparation',
      tag: 'Machine Learning',
      description:
        'Led predictive modeling on synthetic menopause data using ensemble regressors. Identified top features influencing age of onset.',
      impact:
        'Provided a deployable and explainable model for women’s health applications.',
      link: '/case-studies/menopause',
      report: '/downloads/menopause-prediction.pdf',
    },
    {
      title: 'Conversational SQL Pipeline – Basler & Hofmann',
      tech: 'LLMs, LangChain, PostgreSQL, Azure, NLP',
      tag: 'Data Management',
      image: '/logos/basler.png',
      description:
        'Developed a natural language interface for querying HR data using LLMs and PostgreSQL. Automated SQL generation from user questions.',
      impact:
        'Enabled fast, accurate HR data access for non-technical users and reduced dependency on IT for database queries.',
      link: '/case-studies/data-management',
      report: '/downloads/basler-db-report.pdf',
    },
    {
      title: 'Academic Chatbot with RAG – iHomeLab',
      tech: 'LLAMA 3.2, RAG, CRAG, Streamlit, Python, Ollama',
      tag: 'LLMs',
      image: '/logos/ihome.png',
      description:
        'Built a university-facing Q&A chatbot using retrieval-augmented generation (RAG) techniques. Integrated web scraping, hosted LLMs, and Streamlit for real-time academic support.',
      impact:
        'Improved student access to academic FAQs and feedback workflows at HSLU through an interactive, scalable chatbot interface.',
      link: '/case-studies/ihomelab-rag-chatbot',
      report: '/downloads/ihomelab-rag-report.pdf',
    },
    {
      title: 'Agentic AI + BIM Automation – PyRevit Integration',
      tech: 'LLMs, LangChain, PyRevit, Vector DB, GPT-4, RAG',
      tag: 'Agentic AI',
      image: '/logos/basler.png',
      description:
        'Integrated an LLM-powered agent into PyRevit for automating architectural tasks via intelligent memory retrieval and planning.',
      impact:
        'Reduced design time by 65% and enabled real-time, conversational control over Revit workflows for AEC professionals.',
      link: '/case-studies/agentic-bim',
      report: '/downloads/agentic-bim.pdf',
    },
    {
      title: 'Agent Bee Integration – IBM Geospatial Studio',
      tech: 'Agentic AI, LLMs, Geospatial Modeling, Prompt Engineering',
      tag: 'Agentic AI',
      image: '/logos/ibm.png',
      description:
        'Integrated Agent Bee into IBM’s Geospatial Studio with tools for user feedback, prompt refinement, and intelligent model/dataset tuning.',
      impact:
        'Enabled interactive climate modeling workflows, reducing human effort in Earth system simulations while enhancing model accuracy and transparency.',
      link: '/case-studies/agent-bee-ibm',
      report: '/downloads/agent-bee-case.pdf',
    },
    {
      title: 'Real-Time Business Insights Platform – Azure Cognitive Search + LLMOps',
      tech: 'Python, Kafka, Azure Cognitive Search, Ollama LLM, FastAPI, LLMOps',
      tag: 'Data Management',
      description:
        'Built a real-time stock market intelligence system using Kafka streaming, Azure Search indexing, RAG pipelines with Ollama LLMs, and FastAPI REST APIs. Integrated LLMOps monitoring for latency and prompt optimization.',
      impact:
        'Enabled real-time retrieval and predictive insights into stock market events with scalable LLM pipelines and production-grade APIs.',
      link: 'https://github.com/nargesghv/Real-Time-Business-Intelligence-Platform-with-Azure-AI-Search-LLM-LLMOps-Kafka',
      report: '',
    },
    {
      title: 'Real Estate Forecasting Platform – ML + Azure Cloud + BI',
      tech: 'Python, XGBoost, FAISS, Azure SQL, Power BI, FastAPI',
      tag: 'Machine Learning',
      description:
        'Designed a real-time forecasting solution for Toronto housing markets by combining XGBoost modeling, FAISS-based property search, cloud APIs with FastAPI, and Power BI dashboards connected to Azure SQL databases.',
      impact:
        'Delivered end-to-end AI forecasting and business intelligence system for real estate investment insights using cloud-native deployment.',
      link: 'https://github.com/nargesghv/RealEstate-Forecasting-Platform',
      report: '',
    },
    {
      title: 'Real-Time Image Classification Pipeline – TensorFlow + Kafka',
      tech: 'TensorFlow, Kafka, FastAPI, Docker, OpenCV, Hugging Face',
      tag: 'Computer Vision',
      description:
        'Built a modular real-time CNN classification system with live webcam ingestion via Kafka, real-time FastAPI model inference, and containerized deployment with Docker. Achieved 92% validation accuracy on Food-101 dataset.',
      impact:
        'Enabled live streaming image classification at scale, combining deep learning, real-time messaging, and fast deployment workflows.',
      link: 'https://github.com/nargesghv/RealTime-CNN-Classification',
      report: '',
    },
    // —————————— NEW PROJECTS BELOW ——————————
    {
      title: 'Realtime Multi-Agent Conversational System – LangGraph & MCP',
      tech: 'LangGraph, MCP, DALL·E, Matplotlib, Python REPL, Server-Sent Events',
      tag: 'Agentic AI',
      description:
        'Developed a real-time, tool-augmented conversational AI agent integrating LangGraph with the Multi-Tool Calling Protocol (MCP). Enabled the LLM to reason, plan, and call external tools—DALL·E for image generation, Matplotlib for visualization, and a Python REPL for dynamic code execution—via a structured graph-based flow.',
      impact:
        'Showcased a fully modular architecture with a local MCP tool server, demonstrating seamless AI integration with real-world utilities and extensibility for future tool additions.',
      link: '',
      report: '',
    },
    {
      title: 'Accent Classification from Voice',
      tech: 'Wav2Vec2, Common Voice, PyTorch, Hugging Face, Torchaudio, Librosa, Scikit-learn, Logistic Regression',
      tag: 'Machine Learning',
      description:
        'Built an audio-based accent classification system using pretrained Wav2Vec2 embeddings and logistic regression. Automated dataset preparation with Mozilla Common Voice, extracted audio features, and trained a classifier to predict regional accents (American, British, Indian). Packaged as a command-line tool with real-time inference and model persistence.',
      impact:
        'Delivered a robust, real-time accent classifier, enabling immediate inference and demonstrating model performance portability in real-world audio applications.',
      link: '',
      report: '',
    },
    {
      title: 'Real-Time Multilingual Audio Deepfake Detection System',
      tech: 'PyTorch, Hugging Face Transformers (wav2vec2), Torchaudio, Apache Kafka, Grafana, InfluxDB, Docker, Kubernetes',
      tag: 'Machine Learning',
      description:
        'Developed a real-time multilingual audio deepfake detection system using PyTorch and Hugging Face’s wav2vec2, integrated with Apache Kafka for streaming and Grafana + InfluxDB for monitoring. Built scalable microservices with Docker and Kubernetes, including Kafka producers/consumers and a model inference pipeline.',
      impact:
        'Enabled robust, low-latency detection of deepfake audio across multiple languages, with automated alerts and scalable microservice orchestration.',
      link: '',
      report: '',
    },
    {
      title: 'RAG-Enabled Multi-Agent Chat Application (PydanticAI + FastAPI)',
      tech: 'PydanticAI, FastAPI, PostgreSQL, pgvector, OpenAI GPT, TypeScript Frontend',
      tag: 'Agentic AI',
      description:
        'Designed and implemented a RAG-based chat application using PydanticAI and FastAPI. Developed a modular multi-agent architecture that dynamically retrieved and summarized relevant documents via PostgreSQL/pgvector embedding search. Integrated OpenAI GPT models for context-aware Q&A, with live streaming responses and a TypeScript-based web frontend.',
      impact:
        'Delivered a scalable, real-time agentic chat interface, improving document retrieval accuracy and user engagement in knowledge-intensive scenarios.',
      link: '',
      report: '',
    },
    {
      title: 'GraphRAG Legal Contract Intelligence',
      tech: 'LLM, Neo4j, FastAPI, LangChain, Pydantic, Cypher',
      tag: 'Agentic AI',
      description:
        'Developed an agentic RAG system combining LLM-based structured data extraction with a Neo4j knowledge graph for legal contract analysis. Built LangChain-powered tools and FastAPI endpoints to extract, store, and query structured legal insights from raw documents. Enabled advanced semantic search, clause tracking, and aggregation queries using Pydantic schemas and Cypher.',
      impact:
        'Streamlined contract review workflows by enabling semantic search and clause-level insights, reducing manual effort and improving legal decision-making.',
      link: '',
      report: '',
    },
    {
      title: 'DriftAlert: Real-Time AI-Powered Schema Monitoring System',
      tech: 'Python, PostgreSQL, Kafka, OpenAI GPT-4o, LangChain Agents, Vector Store, Pydantic, SQL, JSON, Guardrails',
      tag: 'Agentic AI',
      description:
        'Built an advanced agent-based monitoring system to detect and report database schema drift in real time. Leveraged GPT-4o-mini and OpenAI Agents SDK to orchestrate multi-agent reasoning, tool-calling utilities, and semantic vector search. Employed Kafka for streaming schema snapshots and Pydantic for structured output.',
      impact:
        'Automated lifecycle tracking of schema changes, reduced manual QA and release delays by surfacing breaking changes instantly, and enabled explainable, searchable AI-generated audit trails.',
      link: '',
      report: '',
    },
    {
      title: 'LangGraph AI Document Classifier',
      tech: 'Python, FastAPI, React, Tailwind, OpenAI GPT-4, LangChain, SQLite, Streamlit',
      tag: 'LLMs',
      description:
        'Developed a full-stack AI-powered document classification system using a LangGraph agent (GPT-4) to categorize uploaded PDF and DOCX files into business-related groups (tax, payroll, client communication). Built a React + Tailwind frontend with real-time file preview, a FastAPI backend for model orchestration, and a SQLite database for classification history. Integrated Streamlit as an alternate analytics dashboard.',
      impact:
        'Enabled rapid, accurate document categorization and provided stakeholders with intuitive dashboards for tracking classification history and performance.',
      link: '',
      report: '',
    },
    {
      title: 'Real-Time AI Chatbot Project',
      tech: 'Python, Kafka, MongoDB, FAISS, GPT-4, FastAPI',
      tag: 'RAG',
      description:
        'Designed and implemented a real-time question-answering chatbot using Kafka-based ETL pipelines, MongoDB for document storage, FAISS for semantic retrieval, and OpenAI’s GPT-4 for natural language responses. Built RESTful APIs with FastAPI, integrated vector embeddings with Sentence Transformers, and optimized for enterprise Q&A workflows.',
      impact:
        'Delivered a high-throughput, low-latency chatbot infrastructure supporting real-time enterprise Q&A, improving response accuracy and system scalability.',
      link: '',
      report: '',
    },
  ];

  const uniqueTags = ['All', ...new Set(projects.map((proj) => proj.tag))];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fdf6f0] to-[#e6e4e1] dark:from-[#111827] dark:to-[#1f2937] text-black dark:text-white px-6 md:px-16 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Projects Showcase</h1>

      <div className="flex justify-center mb-8 flex-wrap gap-3">
        {uniqueTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-1 text-sm rounded-full border transition-all ${
              selectedTag === tag
                ? 'bg-blue-600 text-white border-blue-700'
                : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects
          .filter((proj) => selectedTag === 'All' || proj.tag === selectedTag)
          .map((proj, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-4 transform transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
              onClick={() => setSelectedProject(proj)}
            >
              <div className="flex items-center gap-4">
                {proj.image && (
                  <Image src={proj.image} alt="Logo" width={40} height={40} className="rounded-md" />
                )}
                <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300">{proj.title}</h2>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">{proj.tech}</p>
              <p className="text-gray-800 dark:text-gray-300 text-justify">{proj.description}</p>
              <p className="text-sm text-green-700 dark:text-green-400 font-medium">{proj.impact}</p>
            </div>
          ))}
      </div>

      <Dialog open={!!selectedProject} onClose={() => setSelectedProject(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white dark:bg-gray-900 max-w-2xl w-full p-6 rounded-xl shadow-lg space-y-4">
            <Dialog.Title className="text-xl font-bold text-blue-700 dark:text-blue-300">
              {selectedProject?.title}
            </Dialog.Title>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">{selectedProject?.tech}</p>
            <p className="text-gray-800 dark:text-gray-300 text-justify">{selectedProject?.description}</p>
            <p className="text-sm text-green-700 dark:text-green-400 font-medium">{selectedProject?.impact}</p>
            <div className="pt-4 flex gap-4">
              {selectedProject?.link && (
                <Link
                  href={selectedProject.link}
                  className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full shadow"
                >
                  📘 Full Case Study
                </Link>
              )}
              {selectedProject?.report && (
                <a
                  href={selectedProject.report}
                  download
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-full shadow"
                >
                  📄 Download Report
                </a>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="ml-auto px-3 py-1 text-sm border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      <footer className="text-center mt-14 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/cv" className="underline text-blue-600 hover:text-blue-800">
          ← Back to CV
        </Link>
      </footer>
    </main>
  );
}
