'use client';
import React from 'react';
import Link from 'next/link';

export default function MenopauseCaseStudy() {
  return (
    <main className="min-h-screen px-6 md:px-20 py-14 bg-gradient-to-br from-[#fdf6f0] to-[#e6e4e1] dark:from-[#111827] dark:to-[#1f2937] text-black dark:text-white">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 p-10 rounded-xl shadow-xl space-y-8">
        <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-300 text-center">
          🧠 ML for Menopause Prediction
        </h1>

        {/* Overview */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">📌 Overview</h2>
          <p>
            This project predicts the age of menopause onset using synthetic clinical data. It applies multiple machine learning models to discover patterns among key features such as hormones, BMI, and family history.
          </p>
        </section>

        {/* Data Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">📊 Dataset & Features</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>🧬 Hormonal markers: FSH, LH, estradiol</li>
            <li>⚖️ Lifestyle & Health: BMI, parity</li>
            <li>👩 Family history: Mother’s menopause age</li>
          </ul>
          <p className="mt-2">The dataset contained 20 synthetic samples representing real-world patterns.</p>
        </section>

        {/* Modeling */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">🛠️ Model Training</h2>
          <p>
            Four regression models were tested:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1 mt-2">
            <li>Linear Regression</li>
            <li>Decision Tree Regressor</li>
            <li>Random Forest</li>
            <li><strong>Gradient Boosting</strong> – Best Performer</li>
          </ul>
        </section>

        {/* Results */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">📈 Results & Metrics</h2>
          <p>
            Gradient Boosting showed the highest accuracy with the best R² score. Visualizations such as pair plots and bar charts of feature importances revealed:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>🧓 Current age</li>
            <li>👩 Mother's menopause age</li>
            <li>🧪 LH hormone levels</li>
          </ul>
        </section>

        {/* Outcomes */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">🚀 Outcomes</h2>
          <p>
            A practical, interpretable model was exported for use in a future digital health assistant. This system could inform users about potential hormonal health planning and provide early predictions for clinicians.
          </p>
        </section>

        <div className="text-center pt-6 border-t border-gray-300 dark:border-gray-700 mt-8">
          <Link
            href="/projects"
            className="text-blue-700 dark:text-blue-400 underline hover:text-blue-900 dark:hover:text-white"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
