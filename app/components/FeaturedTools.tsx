import Link from 'next/link'

export default function FeaturedTools() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Popular Transcription Tools (AI & Human)
      </h2>

      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        A neutral overview of widely used transcription tools — and when human
        transcription is still the better option.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="border rounded-xl p-6">
          <h3 className="font-semibold mb-2">Otter.ai</h3>
          <p className="text-sm text-gray-600 mb-4">
            Fast AI transcription for meetings and interviews.
          </p>
          <Link href="/tools/transcription" className="underline text-sm">
            See full comparison →
          </Link>
        </div>

        <div className="border rounded-xl p-6">
          <h3 className="font-semibold mb-2">Descript</h3>
          <p className="text-sm text-gray-600 mb-4">
            Creator-focused transcription and editing platform.
          </p>
          <Link href="/tools/transcription" className="underline text-sm">
            See full comparison →
          </Link>
        </div>

        <div className="border rounded-xl p-6">
          <h3 className="font-semibold mb-2">Human Transcription</h3>
          <p className="text-sm text-gray-600 mb-4">
            Highest accuracy for publishing, subtitles, and clients.
          </p>
          <Link href="/upload" className="underline text-sm">
            Request service →
          </Link>
        </div>
      </div>
    </section>
  )
}
