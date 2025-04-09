'use client';
import React from 'react';
import Link from 'next/link';

export default function ReferencesPage() {
  const references = [
    {
      organization: 'IBM Research',
      file: '/downloads/reference-ibm.pdf',
    },
    {
      organization: 'iHomeLab – HSLU',
      file: '/downloads/reference-ihomelab.pdf',
    },
    {
      organization: 'Basler & Hofmann',
      file: '/downloads/reference-basler.pdf',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f9fafb] to-[#e5e7eb] dark:from-[#111827] dark:to-[#1f2937] text-black dark:text-white px-6 md:px-20 py-14">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-blue-800 dark:text-blue-300 mb-8">Professional References</h1>

        <p className="text-center mb-8 text-gray-600 dark:text-gray-400">
          You can download official reference letters from previous institutions I’ve worked with:
        </p>

        <ul className="space-y-6">
          {references.map((ref, idx) => (
            <li key={idx} className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{ref.organization}</span>
              <a
                href={ref.file}
                download
                className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full text-sm"
              >
                📄 Download PDF
              </a>
            </li>
          ))}
        </ul>

        <footer className="text-center mt-12 border-t pt-6 border-gray-300 dark:border-gray-700">
          <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
            ← Back to Home
          </Link>
        </footer>
      </div>
    </main>
  );
}
