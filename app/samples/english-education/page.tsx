'use client'

import Link from 'next/link'

export default function EnglishEducationSample() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-4">
        What are Creative Commons Licenses
      </h1>

      <p className="text-gray-600 mb-10">
        Educational English video with professional manual transcription.
      </p>

      <video
        controls
        poster="/samples/what-are-creative-commons-licenses.jpg"
        className="w-full rounded-lg border mb-12"
      >
        <source
          src="/samples/what-are-creative-commons-licenses.mp4"
          type="video/mp4"
        />
      </video>

      <div className="bg-gray-50 p-6 rounded text-sm leading-relaxed mb-16">
        This video introduces Creative Commons licenses, which make copyright
        easier to understand. It explains how creators can share their work
        legally and clearly.
      </div>

      <div className="text-center bg-black text-white p-10 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">
          Want a transcript like this?
        </h3>

        <Link
          href="/upload"
          className="inline-block bg-white text-black px-8 py-4 rounded text-lg font-medium"
        >
          Upload Your File
        </Link>
      </div>
    </section>
  )
}
