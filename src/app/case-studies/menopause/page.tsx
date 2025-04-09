'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MenopauseCaseStudy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fdf6f0] to-[#e6e4e1] dark:from-[#111827] dark:to-[#1f2937] text-black dark:text-white px-6 md:px-16 py-14">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-xl space-y-8">
        <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-300">Machine Learning Case Study: Predicting Menopause Onset</h1>
        <p className="text-gray-800 dark:text-gray-300 text-lg">
          This case study explores the development of a machine learning pipeline to predict the age of menopause onset using synthetic health data. The goal was to provide interpretable predictions based on hormonal levels, lifestyle factors, and family history.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-700 dark:text-blue-300">1. Dataset & Features</h2>
          <p>
            A synthetic dataset of 20 women was created, capturing features such as:
          </p>
          <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
            <li>Current Age</li>
            <li>Body Mass Index (BMI)</li>
            <li>Parity (number of children)</li>
            <li>Hormonal levels: FSH, LH, Estradiol</li>
            <li>Mother's age at menopause</li>
            <li>Lifestyle features (e.g., smoking)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-700 dark:text-blue-300">2. Feature Engineering</h2>
          <p>
            Data was preprocessed and transformed:
          </p>
          <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
            <li>Standard scaling of numerical features</li>
            <li>Imputation for missing hormone values</li>
            <li>One-hot encoding for lifestyle categories</li>
            <li>Creation of interaction features (e.g., LH × Age)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-700 dark:text-blue-300">3. Model Development</h2>
          <p>
            Several regression models were trained to predict menopause onset:
          </p>
          <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
            <li>Linear Regression</li>
            <li>Decision Tree Regressor</li>
            <li>Random Forest Regressor</li>
            <li><strong>Gradient Boosting Regressor</strong> (Best Performer)</li>
          </ul>
          <p className="mt-4">Model performance was evaluated using the <strong>R² score</strong>.</p>

          <div className="mt-4">
            <Image
              src="/output.png"
              alt="Model Comparison Chart"
              width={900}
              height={500}
              className="rounded-xl border shadow-md"
            />
            <p className="text-center text-sm mt-2 text-gray-500">Figure 1: Comparison of models based on R² score</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-700 dark:text-blue-300">4. Feature Importance Analysis</h2>
          <p>The most influential features identified by Gradient Boosting were:</p>
          <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
            <li>Current Age</li>
            <li>Mother's Menopause Age</li>
            <li>LH Level</li>
          </ul>

          <div className="mt-4">
            <Image
              src="/output (1).png"
              alt="Feature Importance"
              width={900}
              height={500}
              className="rounded-xl border shadow-md"
            />
            <p className="text-center text-sm mt-2 text-gray-500">Figure 2: Feature Importance from Gradient Boosting</p>
          </div>
        </section>

        <section className="text-center">
          <Link href="/projects">
            <span className="text-blue-700 hover:text-blue-900 underline">← Back to Projects</span>
          </Link>
        </section>
      </div>
    </main>
  );
}
