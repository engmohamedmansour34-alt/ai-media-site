import Link from 'next/link'

export default function BottomCTA() {
  return (
    <section className="py-24 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-6">
        Start Your Transcription Today
      </h2>

      <p className="text-gray-300 mb-8 text-lg">
        Upload your file and get accurate transcription fast.
      </p>

      <Link
        href="/upload"
        className="inline-block bg-white text-black px-10 py-4 rounded text-lg font-medium"
      >
        Upload Your File
      </Link>
    </section>
  )
}
