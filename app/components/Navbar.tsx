"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white fixed top-0 z-50">
      <nav className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-lg text-gray-900 hover:text-emerald-600"
        >
          AI Media
        </Link>

        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
              Services
              <span className="text-xs">▼</span>
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-3 w-64 bg-white border rounded-xl shadow-lg p-3 space-y-1">
                <Link
                  href="/services/podcast-transcription"
                  className="block px-3 py-2 rounded hover:bg-gray-50"
                >
                  🎙 Podcast Transcription
                </Link>
                <Link
                  href="/services/video-transcription"
                  className="block px-3 py-2 rounded hover:bg-gray-50"
                >
                  🎥 Video Transcription
                </Link>
                <Link
                  href="/services/interview-transcription"
                  className="block px-3 py-2 rounded hover:bg-gray-50"
                >
                  🗣 Interview Transcription
                </Link>
                <Link
                  href="/services/subtitles"
                  className="block px-3 py-2 rounded hover:bg-gray-50"
                >
                  💬 Subtitles (SRT / VTT)
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/tools/transcription"
            className="text-gray-600 hover:text-gray-900"
          >
            Tools
          </Link>

          <Link
            href="/blog"
            className="text-gray-600 hover:text-gray-900"
          >
            Blog
          </Link>

          <Link
            href="/samples"
            className="text-gray-600 hover:text-gray-900"
          >
            Samples
          </Link>

          <Link
            href="/pricing"
            className="text-gray-600 hover:text-gray-900"
          >
            Pricing
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="/upload"
          className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700"
        >
          Upload File
        </Link>
      </nav>
    </header>
  );
}
