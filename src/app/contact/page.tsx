'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Optional: Add email sending API integration here
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fdf6f0] to-[#e6e4e1] dark:from-[#111827] dark:to-[#1f2937] text-black dark:text-white px-6 md:px-16 py-14">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-blue-800 dark:text-blue-300 mb-6">Get in Touch</h1>

        {submitted ? (
          <p className="text-green-600 dark:text-green-400 text-center font-semibold text-lg">
            ✅ Thank you! I will get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium mb-1">Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-md font-semibold transition"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
          Or email me directly at{' '}
          <a href="mailto:nargesvahdani@gmail.com" className="text-blue-600 underline">nargesvahdani@gmail.com</a>
        </div>

        <footer className="text-center mt-12 border-t pt-6 border-gray-300 dark:border-gray-700">
          <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
            ← Back to Home
          </Link>
        </footer>
      </div>
    </main>
  );
}
