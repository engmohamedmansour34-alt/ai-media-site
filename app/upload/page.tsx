import UploadForm from '@/app/components/UploadForm'
import Link from 'next/link'

export default function UploadPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Professional Audio & Video Transcription
        </h1>

        <p className="text-gray-700 text-lg">
          Human-reviewed transcription in Arabic & English
        </p>

        <p className="text-gray-500 mt-3 text-sm">
          تفريغ يدوي احترافي مع مراجعة بشرية كاملة — بدون اعتماد على أدوات آلية
        </p>
      </div>

      {/* Trust Bar */}
      <div className="flex justify-center gap-4 flex-wrap text-sm mb-14">
        <span className="px-4 py-2 bg-gray-100 rounded-full">
          ✔ 100% Human-made
        </span>
        <span className="px-4 py-2 bg-gray-100 rounded-full">
          ✔ Arabic & English
        </span>
        <span className="px-4 py-2 bg-gray-100 rounded-full">
          ✔ Clean & Proofread
        </span>
        <span className="px-4 py-2 bg-gray-100 rounded-full">
          ✔ No Signup Required
        </span>
      </div>

      {/* Info Box */}
      <div className="bg-gray-50 border rounded-xl p-6 mb-12">
        <h2 className="font-semibold mb-3">
          Before you upload
        </h2>

        <ul className="text-gray-600 space-y-2 text-sm">
          <li>• Accepted formats: MP3, WAV, MP4, MOV</li>
          <li>• Share via Google Drive, YouTube, or Dropbox</li>
          <li>• Delivery time: 24–48 hours</li>
          <li>• Output: Clean text (Word / PDF)</li>
          <li>• Optional: Timestamps, Subtitles (SRT / VTT)</li>
        </ul>
      </div>

      {/* Upload Form */}
      <UploadForm />

      {/* Post Form Trust */}
      <p className="text-center text-xs text-gray-500 mt-4">
        No subscription · Pay only after file review
      </p>

      {/* Security Note */}
      <p className="text-center text-sm text-gray-500 mt-6">
        🔒 Your files are handled securely and never shared.
      </p>

      {/* Samples CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-600 mb-3">
          Want to check the quality before ordering?
        </p>

        <Link
          href="/samples"
          className="underline font-medium"
        >
          View real transcription samples →
        </Link>
      </div>
    </main>
  )
}
