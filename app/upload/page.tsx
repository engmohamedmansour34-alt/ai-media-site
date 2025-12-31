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
          تفريغ يدوي احترافي مع مراجعة بشرية كاملة — مناسب للنشر، الترجمة، والعملاء
        </p>

        {/* Positioning vs AI */}
        <p className="mt-4 text-sm text-gray-500">
          AI tools are great for drafts — this service is for final, publishing-ready transcripts.
        </p>
      </div>

      {/* Trust Bar */}
      <div className="flex justify-center gap-4 flex-wrap text-sm mb-14">
        <span className="px-4 py-2 bg-gray-100 rounded-full">
          ✔ 100% Human-reviewed
        </span>
        <span className="px-4 py-2 bg-gray-100 rounded-full">
          ✔ Arabic & English
        </span>
        <span className="px-4 py-2 bg-gray-100 rounded-full">
          ✔ Proofread & formatted
        </span>
        <span className="px-4 py-2 bg-gray-100 rounded-full">
          ✔ No signup required
        </span>
      </div>

      {/* Value Box */}
      <div className="bg-gray-50 border rounded-xl p-6 mb-12">
        <h2 className="font-semibold mb-3">
          Why human transcription?
        </h2>

        <ul className="text-gray-600 space-y-2 text-sm">
          <li>• Higher accuracy than AI (especially Arabic & accents)</li>
          <li>• Clean structure ready for publishing or subtitles</li>
          <li>• No hallucinations or missing context</li>
          <li>• Suitable for SEO content, clients, and legal use</li>
        </ul>
      </div>

      {/* Upload Form */}
      <UploadForm />

      {/* Post Form Trust */}
      <p className="text-center text-xs text-gray-500 mt-4">
        No subscription · File reviewed before payment · No obligation
      </p>

      {/* Risk Reversal */}
      <div className="mt-6 bg-gray-50 border rounded-lg p-4 text-center text-sm text-gray-600">
        If your file isn’t suitable, we’ll tell you before any payment.
      </div>

      {/* Security Note */}
      <p className="text-center text-sm text-gray-500 mt-6">
        🔒 Your files are handled securely and never shared.
      </p>

      {/* Samples CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-600 mb-3">
          Want to review quality before ordering?
        </p>

        <Link
          href="/samples"
          className="underline font-medium"
        >
          View real transcription samples →
        </Link>
      </div>

      {/* SEO Semantic Hint (non-visible) */}
      <div className="sr-only">
        Professional human transcription service for audio and video files.
        Accurate Arabic and English transcription with human review.
      </div>
    </main>
  )
}
