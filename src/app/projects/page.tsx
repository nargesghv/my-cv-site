'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';

// ✅ Define project type
type Project = {
  title: string;
  tech: string;
  tag: string;
  image: string;
  description: string;
  impact: string;
  link: string;
  report: string;
};

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null); // ✅ Apply type here

  const projects = [
    {
      title: 'AI-powered Point Cloud Segmentation – Basler & Hofmann',
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
      title: 'Agentic SQL Generator – IBM Research',
      tech: 'LangChain, PostgreSQL, Prompt Engineering, LLMs',
      tag: 'Agentic AI',
      image: '/logos/ibm.png',
      description:
        'Built an AI pipeline to convert natural language to SQL using intent detection, keyword extraction, and LLM-based query generation. Benchmarked on BIRD and custom evaluation set.',
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
      title: 'LLM-based Syntactic SQL Data Generation – IBM Research',
      tech: 'IBM Granite 8B, Meta Prompting, SQL Generation, QA Pairs',
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
      tech: 'Meta Llama 3.1, IBM Granite 8B, QLoRA, Prompt Engineering',
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
      tech: 'Power BI, SAP S/4HANA, Predictive Dashboards',
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
      title: 'Menopause Prediction using Machine Learning – Anna Startup',
      tech: 'Gradient Boosting, Feature Engineering, Regression Models, Python',
      tag: 'Machine Learning',
      image: '/logos/anna.png', // Make sure this image is placed inside /public/logos/
      description:
        'Led a health data initiative to predict menopause onset age using synthetically generated clinical datasets. Evaluated multiple regression models including Gradient Boosting, which showed the highest accuracy and interpretability.',
      impact:
        'Built a model explaining how age, mother’s menopause, and LH levels influence menopause prediction. Enabled future deployment for real-time prediction in awareness campaigns.',
      link: '/case-studies/menopause-ml',
      report: '/downloads/menopause-ml-report.pdf',
    },
    {
      title: '3D Point Cloud Segmentation for Digital Twins – Basler & Hofmann',
      tech: 'Voxel-based CNN, IoU/F1, PyTorch, Similarity Repair, 3D ML',
      tag: 'Machine Learning',
      image: '/logos/basler.png',
      description:
        'Applied machine learning to segment point cloud infrastructure data. Developed and fine-tuned a voxel CNN with evaluation accuracy of 78%. Addressed missing data using similarity-based reconstruction methods.',
      impact:
        'Enhanced B&H’s digital twin platform with precise infrastructure modeling. Provided clients with detailed, interactive spatial visualizations of construction projects.',
      link: '/case-studies/basler-ml-segmentation',
      report: '/downloads/basler-ml-report.pdf',
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
