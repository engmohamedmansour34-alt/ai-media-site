'use client'

import { useState } from 'react'

export default function UploadForm() {
  const [loading, setLoading] = useState(false)

  return (
    <form
      action="https://formspree.io/f/xpqzbpwk"
      method="POST"
      onSubmit={() => setLoading(true)}
      className="max-w-xl mx-auto space-y-6"
    >
      {/* Google Drive Link */}
      <div>
        <label className="block mb-2 font-medium">
          Google Drive Link
          <span className="block text-xs text-gray-500">
            رابط الملف (صوت أو فيديو)
          </span>
        </label>
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
        <label className="block mb-2 font-medium">
          File Language
          <span className="block text-xs text-gray-500">
            لغة المحتوى
          </span>
        </label>
        <select
          name="language"
          required
          className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">Select language</option>
          <option value="English">English</option>
          <option value="Arabic">Arabic</option>
        </select>
      </div>

      {/* Output Format */}
      <div>
        <label className="block mb-2 font-medium">
          Output Format
          <span className="block text-xs text-gray-500">
            صيغة الملف النهائي
          </span>
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

      {/* Transcript Type */}
      <div>
        <label className="block mb-2 font-medium">
          Transcript Type
          <span className="block text-xs text-gray-500">
            نوع التفريغ
          </span>
        </label>
        <select
          name="transcript_type"
          required
          className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="Clean Text">Clean Text (بدون تكرار)</option>
          <option value="With Timestamps">
            With Timestamps (بتوقيت)
          </option>
        </select>
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2 font-medium">
          Your Email
          <span className="block text-xs text-gray-500">
            سنرسل لك النتيجة هنا
          </span>
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Redirect */}
      <input type="hidden" name="_redirect" value="/thank-you" />

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white py-4 rounded text-lg font-medium hover:bg-gray-800 transition disabled:opacity-60"
      >
        {loading ? 'Submitting...' : 'Submit Request'}
      </button>

      {/* Trust note */}
      <p className="text-center text-xs text-gray-500">
        🔒 Your files are handled confidentially and never shared.
      </p>
    </form>
  )
}  