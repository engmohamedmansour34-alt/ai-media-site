import UploadForm from '../components/UploadForm'
import Link from 'next/link'

export default function UploadPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold mb-4">
          Upload Your Audio or Video
        </h1>

        <p className="text-gray-600 text-lg">
          Human-made transcription in Arabic & English
        </p>

        <p className="text-gray-500 mt-3 text-sm">
          تفريغ يدوي احترافي — بدون ترجمة آلية أو AI
        </p>
      </div>

      {/* Trust Bar */}
      <div className="flex justify-center gap-6 flex-wrap text-sm mb-14">
        <span className="px-4 py-2 bg-gray-100 rounded-full">
          ✔ 100% Manual
        </span>
        <span className="px-4 py-2 bg-gray-100 rounded-full">
          ✔ Arabic & English
        </span>
        <span className="px-4 py-2 bg-gray-100 rounded-full">
          ✔ Proofread & Clean
        </span>
      </div>

      {/* Info Box */}
      <div className="bg-gray-50 border rounded-xl p-6 mb-12">
        <h2 className="font-semibold mb-3">
          Before you upload
        </h2>

        <ul className="text-gray-600 space-y-2 text-sm">
          <li>• Accepted formats: MP3, WAV, MP4, MOV</li>
          <li>• Maximum file size: 2GB</li>
          <li>• Delivery time: 24–48 hours</li>
          <li>• Output: Clean text + SRT / VTT (optional)</li>
          <li>• Language: Arabic or English</li>
        </ul>
      </div>

      {/* Upload Form */}
      <UploadForm />

      {/* Security Note */}
      <p className="text-center text-sm text-gray-500 mt-6">
        Your files are handled securely and never shared.
      </p>

      {/* Samples CTA */}
      <div className="text-center mt-14">
        <p className="text-gray-600 mb-3">
          Want to see the quality first?
        </p>

        <Link
          href="/samples"
          className="underline font-medium"
        >
          View Real Transcription Samples →
        </Link>
      </div>
    </main>
  )
}
