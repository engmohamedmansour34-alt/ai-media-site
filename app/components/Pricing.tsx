import Link from 'next/link'

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Simple, Transparent Pricing
        </h2>

        <p className="text-gray-600 mb-12">
          Pay only for what you need. No subscriptions.
        </p>

        <div className="max-w-md mx-auto bg-white border rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-4">
            Manual Transcription
          </h3>

          <div className="text-4xl font-bold mb-2">
            $1.25 <span className="text-lg font-normal">/ minute</span>
          </div>

          <p className="text-gray-600 mb-6">
            Audio & video files transcribed by humans.
          </p>

          <ul className="text-left text-gray-600 space-y-2 mb-8">
            <li>✔ Human-made transcription</li>
            <li>✔ High accuracy</li>
            <li>✔ Timestamps on request</li>
            <li>✔ Email delivery</li>
          </ul>

          <Link
            href="/upload"
            className="block bg-black text-white py-3 rounded text-lg"
          >
            Upload Your File
          </Link>
        </div>
      </div>
    </section>
  )
}
