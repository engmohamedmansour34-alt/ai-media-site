import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-28 text-center max-w-5xl mx-auto px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
        Accurate Audio & Video Transcription
        <br />
        Arabic & English
      </h1>

      <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
        Clean, readable transcripts powered by AI and carefully reviewed for accuracy.
        Ideal for podcasts, interviews, meetings, and online videos.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href="/upload"
          className="inline-block bg-black hover:bg-gray-800 text-white px-10 py-4 rounded text-lg font-medium transition"
        >
          Request Transcription
        </Link>

        <Link
          href="/samples"
          className="inline-block border border-black hover:bg-black hover:text-white px-10 py-4 rounded text-lg font-medium transition"
        >
          View Samples
        </Link>
      </div>

      <p className="mt-6 text-sm text-gray-400">
        Supports Arabic & English • MP3, WAV, MP4, MOV
      </p>
    </section>
  )
}
