import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-6">
        Ready to get your transcription?
      </h2>

      <Link
        href="/upload"
        className="inline-block bg-white text-black px-8 py-4 rounded text-lg"
      >
        Start Now
      </Link>
    </section>
  )
}
