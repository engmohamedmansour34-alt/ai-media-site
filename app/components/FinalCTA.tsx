import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="py-24 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-6">
        Ready to Transcribe Your File?
      </h2>

      <p className="text-gray-300 mb-8 text-lg">
        Upload your media and get a clean, accurate transcript.
      </p>

      <Link
        href="/upload"
        className="inline-block bg-white text-black px-10 py-4 rounded text-lg font-medium"
      >
        Upload Now
      </Link>
    </section>
  )
}
