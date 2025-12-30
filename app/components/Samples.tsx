import Link from 'next/link'

export default function SampleCTA() {
  return (
    <div className="mt-12 text-center border-t pt-8">
      <p className="text-gray-600 mb-4">
        Need a transcription similar to this sample?
      </p>

      <Link
        href="/upload"
        className="inline-block bg-black text-white px-8 py-3 rounded font-medium hover:bg-gray-800 transition"
      >
        Request Transcription
      </Link>
    </div>
  )
}
