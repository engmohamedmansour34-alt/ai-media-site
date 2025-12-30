'use client'

import { useState } from 'react'

export default function UploadForm() {
  const [loading, setLoading] = useState(false)

  return (
    <form
      action="https://formspree.io/f/xpqzbpwk"
      method="POST"
      onSubmit={() => setLoading(true)}
      className="max-w-xl mx-auto space-y-6 bg-white p-6 rounded-xl border"
    >
      {/* Intro */}
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold">
          Submit your file for transcription
        </h3>
        <p className="text-sm text-gray-500">
          Human-reviewed transcription delivered within 24 hours
        </p>
      </div>

      {/* Google Drive Link */}
      <div>
        <label className="block mb-1 font-medium">
          Google Drive Link
        </label>
        <p className="text-xs text-gray-500 mb-2">
          Audio or video file (Drive / YouTube / Dropbox)
        </p>
        <input
          type="url"
          name="google_drive_link"
          required
          placeholder="https://drive.google.com/..."
          className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Language */}
      <div>
        <label className="block mb-1 font-medium">
          File Language
        </label>
        <select
          name="language"
          required
          className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">Select language</option>
          <option value="English">English</option>
          <option value="Arabic">Arabic (All dialects)</option>
        </select>
      </div>

      {/* Transcript Type */}
      <div>
        <label className="block mb-1 font-medium">
          Transcript Type
        </label>
        <select
          name="transcript_type"
          required
          className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="Clean Text">
            Clean Text (Recommended)
          </option>
          <option value="With Timestamps">
            With Timestamps
          </option>
        </select>
        <p className="text-xs text-gray-500 mt-1">
          Clean text removes filler words and repetitions
        </p>
      </div>

      {/* Output Format */}
      <div>
        <label className="block mb-1 font-medium">
          Output Format
        </label>
        <select
          name="output_format"
          required
          className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="Word">Word (.docx)</option>
          <option value="PDF">PDF</option>
        </select>
      </div>

      {/* Email */}
      <div>
        <label className="block mb-1 font-medium">
          Your Email
        </label>
        <p className="text-xs text-gray-500 mb-2">
          We’ll send pricing and delivery details here
        </p>
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Hidden redirect */}
      <input type="hidden" name="_redirect" value="/thank-you" />

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition disabled:opacity-60"
      >
        {loading ? 'Submitting request...' : 'Get price & delivery time'}
      </button>

      {/* Trust */}
      <div className="text-center space-y-1">
        <p className="text-xs text-gray-500">
          🔒 Files are handled confidentially
        </p>
        <p className="text-xs text-gray-500">
          💬 You’ll receive a response within a few hours
        </p>
      </div>
    </form>
  )
}
